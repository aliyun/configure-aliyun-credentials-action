'use strict';

const os = require('os');
const path = require('path');
const fsx = require('fs/promises');

const core = require('@actions/core');
const acc = require('@alicloud/credentials');

const CredentialClient = acc.default;
const Config = acc.Config;

const ROLE_SESSION_NAME = 'github-action-session';

function setOutput(accessKeyId, accessKeySecret, securityToken) {
  core.setOutput('aliyun-access-key-id', accessKeyId);
  core.setOutput('aliyun-access-key-secret', accessKeySecret);
  core.setOutput('aliyun-security-token', securityToken);
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_ID', accessKeyId);
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_SECRET', accessKeySecret);
  core.exportVariable('ALIBABACLOUD_SECURITY_TOKEN', securityToken);
}

async function run() {
  const roleToAssume = core.getInput('role-to-assume');
  const oidcProviderArn = core.getInput('oidc-provider-arn');
  if (roleToAssume && oidcProviderArn) {
    const idToken = await core.getIDToken();
    const oidcTokenFilePath = path.join(os.tmpdir(), 'token');
    // write into token file
    await fsx.writeFile(oidcTokenFilePath, idToken);
    const config = new Config({
      type: 'oidc_role_arn',
      roleArn: roleToAssume,
      oidcProviderArn,
      oidcTokenFilePath,
      roleSessionName: ROLE_SESSION_NAME
    });
    const client = new CredentialClient(config);
    const accessKeyId = await client.getAccessKeyId();
    const accesskeySecret = await client.getAccessKeySecret();
    const securityToken = await client.getSecurityToken();
    setOutput(accessKeyId, accesskeySecret, securityToken);
    return;
  }

  const config = new Config({
    type: 'ecs_ram_role'
  });
  const client = new CredentialClient(config);
  const accessKeyId = await client.getAccessKeyId();
  const accessKeySecret = await client.getAccessKeySecret();
  const securityToken = await client.getSecurityToken();

  if (roleToAssume) {
    const config = new Config({
      type: 'ram_role_arn',
      accessKeyId,
      accessKeySecret,
      securityToken,
      roleArn: roleToAssume,
      roleSessionName: ROLE_SESSION_NAME
    });

    {
      const cred = new CredentialClient(config);
      const accessKeyId = await cred.getAccessKeyId();
      const accessKeySecret = await cred.getAccessKeySecret();
      const securityToken = await cred.getSecurityToken();
      setOutput(accessKeyId, accessKeySecret, securityToken);
    }

    return;
  }

  setOutput(accessKeyId, accessKeySecret, securityToken);

  return;
}

if (require.main === module) {
  run().catch((err) => {
    core.setFailed(err.message);
  });
}

exports.run = run;