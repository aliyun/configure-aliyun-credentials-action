# Configure Alibaba Cloud Credentials for GitHub Actions

Configure your Alibaba Cloud credentials environment variables for use in other GitHub Actions.
Environment variable exports are detected by both the Alibaba Cloud SDKs and the Alibaba Cloud CLI for API calls.

[![Test](https://github.com/aliyun/configure-aliyun-credentials-action/actions/workflows/test.yaml/badge.svg)](https://github.com/aliyun/configure-aliyun-credentials-action/actions/workflows/test.yaml)

## Inputs

### `oidc-provider-arn`

**Optional**: The ARN of OIDC provider. format: `acs:ram::USER_Id:oidc-provider/PROVIDER_NAME` .

### `role-to-assume`

**Optional**: The ARN of role to assume. format: `acs:ram::USER_Id:role/ROLE_NAME` .

### `role-session-name`
**Optional**: The role session name. default: `github-action-session`.

### `role-session-expiration`
**Optional**: Role roleSessionExpiration in seconds (default: 1800 seconds).

### `audience`

**Optional**: The audience to use for the OIDC provider. default: `sts.aliyuncs.com`.

### `role-chaining`
**Optional**: Whether to use role chaining. Use existing credentials to assume another role.

## Outputs

### `aliyun-access-key-id`

The alibaba cloud access key ID for the provided credentials.

### `aliyun-access-key-secret`

The alibaba cloud access key secret for the provided credentials.

### `aliyun-security-token`

The alibaba cloud security token for the provided credentials.

## Example usage

### Using with OIDC

#### Using OIDC native RAM Role

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
with:
  role-to-assume: 'acs:ram::USER_Id:role/ROLE_NAME'
  oidc-provider-arn: 'acs:ram::USER_Id:oidc-provider/PROVIDER_NAME'
  role-session-name: 'github-action-session'
  role-session-expiration: 1800
  audience: 'github-actions'
```
In the above example, role-session-name, role-session-expiration and audience are optional.

### Using with ECS RAM role

If you run your GitHub Actions in a [self-hosted runner](https://help.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)
that already has configured with RAM role, such as ECS/ECI instance, then you do not need
to provide any credentials to this action.

#### Using ECS native attached RAM Role

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
```

#### Assuming Specific RAM Role

When you want to assume resource specific RAM role, specify with `role-to-assume` please.

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
with:
  role-to-assume: 'acs:ram::USER_Id:role/ROLENAME'
  role-session-name: 'github-action-session'
  role-session-expiration: 1800
```
In the above example, role-session-name and role-session-expiration are optional.

### Assume role with role previouly assumed

When the credentials from OIDC or ECS RAM role can't meet your requirements, you can assume role with previous credentials in the same workflow.

```yaml
- name: Assume role with ECS RAM role, you can replace it with OIDC
  uses: aliyun/configure-aliyun-credentials-action@v1
- name: Assume role with previous credentials
  uses: aliyun/configure-aliyun-credentials-action@v1
  with:
    role-to-assume: 'acs:ram::USER_Id:role/ROLENAME'
    role-chaining: true # must set to true
    role-session-name: 'github-action-session'
    role-session-expiration: 1800
```
In the above example, role-session-name and role-session-expiration are optional.

## License Summary

This code is made available under the [MIT license](LICENSE).
