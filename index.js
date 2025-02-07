'use strict';

const os = require('os');
const path = require('path');
const fsx = require('fs/promises');

const core = require('@actions/core');
const acc = require('@alicloud/credentials');

const CredentialClient = acc.default;
const Config = acc.Config;

const ROLE_SESSION_NAME = core.getInput('role-session-name', { required: false });
const roleToAssume = core.getInput('role-to-assume');
const oidcProviderArn = core.getInput('oidc-provider-arn');
const roleSessionExpiration = core.getInput('role-session-expiration', { required: false });
const resourceRoleArn = core.getInput('resource-role-to-assume', { required: false });

function setOutput(accessKeyId, accessKeySecret, securityToken) {
  core.setSecret(accessKeyId);
  core.setSecret(accessKeySecret);
  core.setSecret(securityToken);
  // use standard environment variables
  core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_ID', accessKeyId);
  core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_SECRET', accessKeySecret);
  core.exportVariable('ALIBABA_CLOUD_SECURITY_TOKEN', securityToken);
  core.exportVariable('ALICLOUD_ACCESS_KEY', accessKeyId);
  core.exportVariable('ALICLOUD_SECRET_KEY', accessKeySecret);
  core.exportVariable('ALICLOUD_SECURITY_TOKEN', securityToken);
  // keep it for compatibility
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_ID', accessKeyId);
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_SECRET', accessKeySecret);
  core.exportVariable('ALIBABACLOUD_SECURITY_TOKEN', securityToken);
}

async function run() {
  
  if (roleToAssume && oidcProviderArn) {
    const audience = core.getInput('audience');
    const idToken = await core.getIDToken(audience);
    const oidcTokenFilePath = path.join(os.tmpdir(), 'token');
    // write into token file
    await fsx.writeFile(oidcTokenFilePath, idToken);
    const config = new Config({
      type: 'oidc_role_arn',
      roleArn: roleToAssume,
      oidcProviderArn,
      oidcTokenFilePath,
      roleSessionExpiration,
      roleSessionName: ROLE_SESSION_NAME
    });
    const client = new CredentialClient(config);
    const { accessKeyId, accessKeySecret, securityToken } = await client.getCredential();
    if (resourceRoleArn){
      core.info('OIDC user Assuming Resource Role...')
      const res_config = new Config({
        type: 'ram_role_arn',
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        securityToken: securityToken,
        roleArn: resourceRoleArn,
        roleSessionExpiration,
        roleSessionName: ROLE_SESSION_NAME
      });

      {
        const res_cred = new CredentialClient(res_config);
        const { accessKeyId, accessKeySecret, securityToken } = await res_cred.getCredential();
        setOutput(accessKeyId, accessKeySecret, securityToken);
      }
      return;
    }
    setOutput(accessKeyId, accessKeySecret, securityToken);
    return;
  }

  const config = new Config({
    type: 'ecs_ram_role'
  });
  const client = new CredentialClient(config);
  const { accessKeyId, accessKeySecret, securityToken } = await client.getCredential();

  if (resourceRoleArn) {
    const config = new Config({
      type: 'ram_role_arn',
      accessKeyId,
      accessKeySecret,
      securityToken,
      roleArn: resourceRoleArn,
      roleSessionExpiration,
      roleSessionName: ROLE_SESSION_NAME
    });

    {
      const cred = new CredentialClient(config);
      const { accessKeyId, accessKeySecret, securityToken } = await cred.getCredential();
      setOutput(accessKeyId, accessKeySecret, securityToken);
    }

    return;
  }

  setOutput(accessKeyId, accessKeySecret, securityToken);

  return;
}

if (require.main === module) {
  run().catch((err) => {
    console.log(err.stack);
    core.setFailed(err.message);
  });
}

exports.run = run;