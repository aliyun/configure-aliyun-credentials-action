# Configure Alibaba Cloud Credentials for GitHub Actions

Configure your Alibaba Cloud credentials environment variables for use in other GitHub Actions.
Environment variable exports are detected by both the Alibaba Cloud SDKs and the Alibaba Cloud CLI for API calls.

[![Test](https://github.com/aliyun/configure-aliyun-credentials-action/actions/workflows/test.yaml/badge.svg)](https://github.com/aliyun/configure-aliyun-credentials-action/actions/workflows/test.yaml)

## Inputs

### `oidc-provider-arn`

**Optional**: The ARN of OIDC provider. format: `acs:ram::USER_Id:oidc-provider/PROVIDER_NAME` .

### `role-to-assume`

**Optional**: The ARN of role to assume. format: `acs:ram::USER_Id:role/ROLE_NAME` .

### `audience`:

**Optional**: The audience to use for the OIDC provider. default: `github-actions`.

## Outputs

### `aliyun-access-key-id`

The alibaba cloud access key ID for the provided credentials.

### `aliyun-access-key-secret`

The alibaba cloud access key secret for the provided credentials.

### `aliyun-security-token`

The alibaba cloud security token for the provided credentials.

## Example usage

### Using with OIDC

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
with:
  role-to-assume: 'acs:ram::USER_Id:role/ROLE_NAME'
  oidc-provider-arn: 'acs:ram::USER_Id:oidc-provider/PROVIDER_NAME'
```

### Using with ECS RAM role

If you run your GitHub Actions in a [self-hosted runner](https://help.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)
that already has configured with RAM role, such as ECS/ECI instance, then you do not need
to provide any credentials to this action.

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
```

When you want to assume another role, use `role-to-assume` please.

```yaml
uses: aliyun/configure-aliyun-credentials-action@v1
with:
  role-to-assume: 'acs:ram::USER_Id:role/ROLENAME'
```

## License Summary

This code is made available under the [MIT license](LICENSE).
