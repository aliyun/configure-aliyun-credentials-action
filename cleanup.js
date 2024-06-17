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