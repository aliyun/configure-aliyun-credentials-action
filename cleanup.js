'use strict';

const core = require('@actions/core');

// use standard environment variables
core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_ID', '');
core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '');
core.exportVariable('ALIBABA_CLOUD_SECURITY_TOKEN', '');
// keep it for compatibility
core.exportVariable('ALIBABACLOUD_ACCESS_KEY_ID', '');
core.exportVariable('ALIBABACLOUD_ACCESS_KEY_SECRET', '');
core.exportVariable('ALIBABACLOUD_SECURITY_TOKEN', '');
// keep it for terraform oss backend support https://developer.hashicorp.com/terraform/language/backend/oss
core.exportVariable('ALICLOUD_ACCESS_KEY', '');
core.exportVariable('ALICLOUD_SECRET_KEY', '');
core.exportVariable('ALICLOUD_SECURITY_TOKEN', '');