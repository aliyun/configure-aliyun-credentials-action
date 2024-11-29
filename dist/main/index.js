require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4914:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 7484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(4914);
const file_command_1 = __nccwpck_require__(4753);
const utils_1 = __nccwpck_require__(302);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
const oidc_utils_1 = __nccwpck_require__(5306);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1847);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1847);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(1976);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(8968));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 4753:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(6982));
const fs = __importStar(__nccwpck_require__(9896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(4844);
const auth_1 = __nccwpck_require__(4552);
const core_1 = __nccwpck_require__(7484);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 1976:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(6928));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 8968:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(5236));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 1847:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(9896);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(3193);
const tr = __importStar(__nccwpck_require__(6665));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 6665:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(4434));
const child = __importStar(__nccwpck_require__(5317));
const path = __importStar(__nccwpck_require__(6928));
const io = __importStar(__nccwpck_require__(4994));
const ioUtil = __importStar(__nccwpck_require__(5207));
const timers_1 = __nccwpck_require__(3557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 4552:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 4844:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8611));
const https = __importStar(__nccwpck_require__(5692));
const pm = __importStar(__nccwpck_require__(4988));
const tunnel = __importStar(__nccwpck_require__(770));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
    readBodyBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const chunks = [];
                this.message.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                this.message.on('end', () => {
                    resolve(Buffer.concat(chunks));
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4988:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        try {
            return new URL(proxyVar);
        }
        catch (_a) {
            if (!proxyVar.startsWith('http://') && !proxyVar.startsWith('https://'))
                return new URL(`http://${proxyVar}`);
        }
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const reqHost = reqUrl.hostname;
    if (isLoopbackAddress(reqHost)) {
        return true;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperNoProxyItem === '*' ||
            upperReqHosts.some(x => x === upperNoProxyItem ||
                x.endsWith(`.${upperNoProxyItem}`) ||
                (upperNoProxyItem.startsWith('.') &&
                    x.endsWith(`${upperNoProxyItem}`)))) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
function isLoopbackAddress(host) {
    const hostLower = host.toLowerCase();
    return (hostLower === 'localhost' ||
        hostLower.startsWith('127.') ||
        hostLower.startsWith('[::1]') ||
        hostLower.startsWith('[0:0:0:0:0:0:0:1]'));
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 5207:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 4994:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(2613);
const path = __importStar(__nccwpck_require__(6928));
const ioUtil = __importStar(__nccwpck_require__(5207));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 8197:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(961));
const config_1 = __importDefault(__nccwpck_require__(4056));
class BearerTokenCredential extends default_credential_1.default {
    constructor(bearerToken) {
        if (!bearerToken) {
            throw new Error('Missing required bearerToken option in config for bearer');
        }
        const conf = new config_1.default({
            type: 'bearer'
        });
        super(conf);
        this.bearerToken = bearerToken;
    }
}
exports["default"] = BearerTokenCredential;
//# sourceMappingURL=bearer_token_credential.js.map

/***/ }),

/***/ 477:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
const rsa_key_pair_credential_1 = __importDefault(__nccwpck_require__(509));
const bearer_token_credential_1 = __importDefault(__nccwpck_require__(8197));
const config_1 = __importDefault(__nccwpck_require__(4056));
exports.Config = config_1.default;
const uri_credential_1 = __importDefault(__nccwpck_require__(2716));
const credential_model_1 = __importDefault(__nccwpck_require__(241));
const static_ak_1 = __importDefault(__nccwpck_require__(174));
const static_sts_1 = __importDefault(__nccwpck_require__(6416));
const ram_role_arn_1 = __importDefault(__nccwpck_require__(5056));
const oidc_role_arn_1 = __importDefault(__nccwpck_require__(2847));
const ecs_ram_role_1 = __importDefault(__nccwpck_require__(3630));
const default_1 = __importDefault(__nccwpck_require__(4164));
class InnerCredentialsClient {
    constructor(type, provider) {
        this.type = type;
        this.provider = provider;
    }
    /**
     * @deprecated use getCredential() instead of
     * @returns the access key id of credentials
     */
    async getAccessKeyId() {
        const credentials = await this.provider.getCredentials();
        return credentials.accessKeyId;
    }
    /**
     * @deprecated use getCredential() instead of
     * @returns the access key secret of credentials
     */
    async getAccessKeySecret() {
        const credentials = await this.provider.getCredentials();
        return credentials.accessKeySecret;
    }
    /**
     * @deprecated use getCredential() instead of
     * @returns the security token of credentials
     */
    async getSecurityToken() {
        const credentials = await this.provider.getCredentials();
        return credentials.securityToken;
    }
    getBearerToken() {
        return;
    }
    getType() {
        return this.type;
    }
    async getCredential() {
        const credentials = await this.provider.getCredentials();
        return new credential_model_1.default({
            accessKeyId: credentials.accessKeyId,
            accessKeySecret: credentials.accessKeySecret,
            securityToken: credentials.securityToken,
            bearerToken: undefined,
            type: this.getType(),
        });
    }
}
class Credential {
    constructor(config = null, runtime = {}) {
        this.load(config, runtime);
    }
    /**
     * @deprecated Use getCredential() instead of
     */
    getAccessKeyId() {
        return this.credential.getAccessKeyId();
    }
    /**
     * @deprecated Use getCredential() instead of
     */
    getAccessKeySecret() {
        return this.credential.getAccessKeySecret();
    }
    /**
     * @deprecated Use getCredential() instead of
     */
    getSecurityToken() {
        return this.credential.getSecurityToken();
    }
    getBearerToken() {
        return this.credential.getBearerToken();
    }
    getType() {
        return this.credential.getType();
    }
    getCredential() {
        return this.credential.getCredential();
    }
    load(config, runtime) {
        if (!config) {
            this.credential = new InnerCredentialsClient('default', default_1.default.builder().build());
            return;
        }
        if (!config.type) {
            throw new Error('Missing required type option');
        }
        switch (config.type) {
            case 'access_key':
                this.credential = new InnerCredentialsClient('access_key', static_ak_1.default.builder()
                    .withAccessKeyId(config.accessKeyId)
                    .withAccessKeySecret(config.accessKeySecret)
                    .build());
                break;
            case 'sts':
                this.credential = new InnerCredentialsClient('sts', static_sts_1.default.builder()
                    .withAccessKeyId(config.accessKeyId)
                    .withAccessKeySecret(config.accessKeySecret)
                    .withSecurityToken(config.securityToken)
                    .build());
                break;
            case 'ecs_ram_role':
                this.credential = new InnerCredentialsClient('ecs_ram_role', ecs_ram_role_1.default.builder()
                    .withRoleName(config.roleName)
                    .withDisableIMDSv1(config.disableIMDSv1)
                    .build());
                break;
            case 'ram_role_arn':
                {
                    let credentialsProvider;
                    if (config.securityToken) {
                        credentialsProvider = static_sts_1.default.builder()
                            .withAccessKeyId(config.accessKeyId)
                            .withAccessKeySecret(config.accessKeySecret)
                            .withSecurityToken(config.securityToken)
                            .build();
                    }
                    else {
                        credentialsProvider = static_ak_1.default.builder()
                            .withAccessKeyId(config.accessKeyId)
                            .withAccessKeySecret(config.accessKeySecret)
                            .build();
                    }
                    this.credential = new InnerCredentialsClient('ram_role_arn', ram_role_arn_1.default.builder()
                        .withCredentialsProvider(credentialsProvider)
                        .withRoleArn(config.roleArn)
                        .withPolicy(config.policy)
                        .withDurationSeconds(config.roleSessionExpiration)
                        .withRoleSessionName(config.roleSessionName)
                        // .withHttpOptions(runtime)
                        .build());
                }
                break;
            case 'oidc_role_arn':
                this.credential = new InnerCredentialsClient('oidc_role_arn', oidc_role_arn_1.default.builder()
                    .withRoleArn(config.roleArn)
                    .withOIDCProviderArn(config.oidcProviderArn)
                    .withOIDCTokenFilePath(config.oidcTokenFilePath)
                    .withRoleSessionName(config.roleSessionName)
                    .withPolicy(config.policy)
                    .withDurationSeconds(config.roleSessionExpiration)
                    .build());
                break;
            case 'rsa_key_pair':
                this.credential = new rsa_key_pair_credential_1.default(config.publicKeyId, config.privateKeyFile);
                break;
            case 'bearer':
                this.credential = new bearer_token_credential_1.default(config.bearerToken);
                break;
            case 'credentials_uri':
                this.credential = new uri_credential_1.default(config.credentialsURI);
                break;
            default:
                throw new Error('Invalid type option, support: access_key, sts, ecs_ram_role, ram_role_arn, rsa_key_pair, credentials_uri');
        }
    }
}
exports["default"] = Credential;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 4056:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const $tea = __importStar(__nccwpck_require__(4671));
class Config extends $tea.Model {
    constructor(config) {
        super(config);
    }
    static names() {
        return {
            accessKeyId: 'accessKeyId',
            accessKeySecret: 'accessKeySecret',
            securityToken: 'securityToken',
            bearerToken: 'bearerToken',
            durationSeconds: 'durationSeconds',
            roleArn: 'roleArn',
            policy: 'policy',
            roleSessionExpiration: 'roleSessionExpiration',
            roleSessionName: 'roleSessionName',
            publicKeyId: 'publicKeyId',
            privateKeyFile: 'privateKeyFile',
            roleName: 'roleName',
            enableIMDSv2: 'enableIMDSv2',
            disableIMDSv1: 'disableIMDSv1',
            metadataTokenDuration: 'metadataTokenDuration',
            credentialsURI: 'credentialsURI',
            oidcProviderArn: 'oidcProviderArn',
            oidcTokenFilePath: 'oidcTokenFilePath',
            type: 'type',
        };
    }
    static types() {
        return {
            accessKeyId: 'string',
            accessKeySecret: 'string',
            securityToken: 'string',
            bearerToken: 'string',
            durationSeconds: 'number',
            roleArn: 'string',
            policy: 'string',
            roleSessionExpiration: 'number',
            roleSessionName: 'string',
            publicKeyId: 'string',
            privateKeyFile: 'string',
            roleName: 'string',
            enableIMDSv2: 'boolean',
            disableIMDSv1: 'boolean',
            metadataTokenDuration: 'number',
            credentialsURI: 'string',
            oidcProviderArn: 'string',
            oidcTokenFilePath: 'string',
            type: 'string',
        };
    }
}
exports["default"] = Config;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 241:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const $tea = __importStar(__nccwpck_require__(4671));
class CredentialModel extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            accessKeyId: 'accessKeyId',
            accessKeySecret: 'accessKeySecret',
            securityToken: 'securityToken',
            bearerToken: 'bearerToken',
            type: 'type',
        };
    }
    static types() {
        return {
            accessKeyId: 'string',
            accessKeySecret: 'string',
            securityToken: 'string',
            bearerToken: 'string',
            type: 'string',
        };
    }
}
exports["default"] = CredentialModel;
//# sourceMappingURL=credential_model.js.map

/***/ }),

/***/ 8606:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CredentialsBuilder = void 0;
class Credentials {
    constructor(builder) {
        this.accessKeyId = builder.accessKeyId;
        this.accessKeySecret = builder.accessKeySecret;
        this.securityToken = builder.securityToken;
        this.providerName = builder.providerName;
    }
    static builder() {
        return new CredentialsBuilder();
    }
}
exports["default"] = Credentials;
class CredentialsBuilder {
    withAccessKeyId(value) {
        this.accessKeyId = value;
        return this;
    }
    withAccessKeySecret(value) {
        this.accessKeySecret = value;
        return this;
    }
    withSecurityToken(value) {
        this.securityToken = value;
        return this;
    }
    withProviderName(value) {
        this.providerName = value;
        return this;
    }
    build() {
        return new Credentials(this);
    }
}
exports.CredentialsBuilder = CredentialsBuilder;
//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ 961:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const credential_model_1 = __importDefault(__nccwpck_require__(241));
class DefaultCredential {
    constructor(config) {
        this.accessKeyId = config.accessKeyId || '';
        this.accessKeySecret = config.accessKeySecret || '';
        this.securityToken = config.securityToken || '';
        this.bearerToken = config.bearerToken || '';
        this.type = config.type || '';
    }
    async getAccessKeyId() {
        return this.accessKeyId;
    }
    async getAccessKeySecret() {
        return this.accessKeySecret;
    }
    async getSecurityToken() {
        return this.securityToken;
    }
    getBearerToken() {
        return this.bearerToken;
    }
    getType() {
        return this.type;
    }
    async getCredential() {
        return new credential_model_1.default({
            accessKeyId: this.accessKeyId,
            accessKeySecret: this.accessKeySecret,
            securityToken: this.securityToken,
            bearerToken: this.bearerToken,
            type: this.type,
        });
    }
}
exports["default"] = DefaultCredential;
//# sourceMappingURL=default_credential.js.map

/***/ }),

/***/ 5333:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProfile = exports.getConfiguration = void 0;
const fs_1 = __nccwpck_require__(9896);
const util_1 = __nccwpck_require__(9023);
const path_1 = __importDefault(__nccwpck_require__(6928));
const os_1 = __importDefault(__nccwpck_require__(857));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const static_ak_1 = __importDefault(__nccwpck_require__(174));
const ram_role_arn_1 = __importDefault(__nccwpck_require__(5056));
const oidc_role_arn_1 = __importDefault(__nccwpck_require__(2847));
const ecs_ram_role_1 = __importDefault(__nccwpck_require__(3630));
const readFileAsync = util_1.promisify(fs_1.readFile);
class CLIProfileCredentialsProviderBuilder {
    build() {
        // 优先级：
        // 1. 使用显示指定的 profileName
        // 2. 使用环境变量（ALIBABA_CLOUD_PROFILE）制定的 profileName
        // 3. 使用 CLI 配置中的当前 profileName
        if (!this.profileName) {
            this.profileName = process.env.ALIBABA_CLOUD_PROFILE;
        }
        if (process.env.ALIBABA_CLOUD_CLI_PROFILE_DISABLED === 'true') {
            throw new Error('the CLI profile is disabled');
        }
        return new CLIProfileCredentialsProvider(this);
    }
    withProfileName(profileName) {
        this.profileName = profileName;
        return this;
    }
}
class Configuration {
}
async function getConfiguration(cfgPath) {
    let content;
    try {
        content = await readFileAsync(cfgPath, 'utf8');
    }
    catch (ex) {
        throw new Error(`reading aliyun cli config from '${cfgPath}' failed.`);
    }
    let conf;
    try {
        conf = JSON.parse(content);
    }
    catch (ex) {
        throw new Error(`parse aliyun cli config from '${cfgPath}' failed: ${content}`);
    }
    if (!conf || !conf.profiles || conf.profiles.length === 0) {
        throw new Error(`no any configured profiles in '${cfgPath}'`);
    }
    return conf;
}
exports.getConfiguration = getConfiguration;
function getProfile(conf, profileName) {
    for (const p of conf.profiles) {
        if (p.name === profileName) {
            return p;
        }
    }
    throw new Error(`unable to get profile with '${profileName}'`);
}
exports.getProfile = getProfile;
class CLIProfileCredentialsProvider {
    constructor(builder) {
        // used for mock
        this.homedir = os_1.default.homedir();
        this.profileName = builder.profileName;
    }
    static builder() {
        return new CLIProfileCredentialsProviderBuilder();
    }
    getCredentialsProvider(conf, profileName) {
        const p = getProfile(conf, profileName);
        switch (p.mode) {
            case 'AK':
                return static_ak_1.default.builder()
                    .withAccessKeyId(p.access_key_id)
                    .withAccessKeySecret(p.access_key_secret)
                    .build();
            case 'RamRoleArn': {
                const previousProvider = static_ak_1.default.builder()
                    .withAccessKeyId(p.access_key_id)
                    .withAccessKeySecret(p.access_key_secret)
                    .build();
                return ram_role_arn_1.default.builder()
                    .withCredentialsProvider(previousProvider)
                    .withRoleArn(p.ram_role_arn)
                    .withRoleSessionName(p.ram_session_name)
                    .withDurationSeconds(p.expired_seconds)
                    .withStsRegionId(p.sts_region)
                    .build();
            }
            case 'EcsRamRole':
                return ecs_ram_role_1.default.builder().withRoleName(p.ram_role_name).build();
            case 'OIDC':
                return oidc_role_arn_1.default.builder()
                    .withOIDCTokenFilePath(p.oidc_token_file)
                    .withOIDCProviderArn(p.oidc_provider_arn)
                    .withRoleArn(p.ram_role_arn)
                    .withStsRegionId(p.sts_region)
                    .withDurationSeconds(p.expired_seconds)
                    .withRoleSessionName(p.ram_session_name)
                    .build();
            case 'ChainableRamRoleArn': {
                const previousProvider = this.getCredentialsProvider(conf, p.source_profile);
                return ram_role_arn_1.default.builder()
                    .withCredentialsProvider(previousProvider)
                    .withRoleArn(p.ram_role_arn)
                    .withRoleSessionName(p.ram_session_name)
                    .withDurationSeconds(p.expired_seconds)
                    .withStsRegionId(p.sts_region)
                    .build();
            }
            default:
                throw new Error(`unsupported profile mode '${p.mode}'`);
        }
    }
    async getCredentials() {
        if (!this.innerProvider) {
            if (!this.homedir) {
                throw new Error('cannot found home dir');
            }
            const cfgPath = path_1.default.join(this.homedir, '.aliyun/config.json');
            const conf = await getConfiguration(cfgPath);
            const profileName = this.profileName || conf.current;
            this.innerProvider = this.getCredentialsProvider(conf, profileName);
        }
        const credentials = await this.innerProvider.getCredentials();
        return credentials_1.default.builder()
            .withAccessKeyId(credentials.accessKeyId)
            .withAccessKeySecret(credentials.accessKeySecret)
            .withSecurityToken(credentials.securityToken)
            .withProviderName(`${this.getProviderName()}/${this.innerProvider.getProviderName()}`)
            .build();
    }
    getProviderName() {
        return 'cli_profile';
    }
}
exports["default"] = CLIProfileCredentialsProvider;
//# sourceMappingURL=cli_profile.js.map

/***/ }),

/***/ 4164:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const cli_profile_1 = __importDefault(__nccwpck_require__(5333));
const ecs_ram_role_1 = __importDefault(__nccwpck_require__(3630));
const env_1 = __importDefault(__nccwpck_require__(6566));
const oidc_role_arn_1 = __importDefault(__nccwpck_require__(2847));
const profile_1 = __importDefault(__nccwpck_require__(9588));
class DefaultCredentialsProvider {
    constructor(builder) {
        this.providers = [];
        // Add static ak or sts credentials provider from env
        try {
            const envProvider = env_1.default.builder().build();
            this.providers.push(envProvider);
        }
        catch (ex) {
            // ignore
        }
        // oidc check
        try {
            const oidcProvider = oidc_role_arn_1.default.builder().build();
            this.providers.push(oidcProvider);
        }
        catch (ex) {
            // ignore
        }
        // cli credentials provider
        try {
            const cliProfileProvider = cli_profile_1.default.builder().build();
            this.providers.push(cliProfileProvider);
        }
        catch (ex) {
            // ignore
        }
        // profile credentials provider
        try {
            const profileProvider = profile_1.default.builder().build();
            this.providers.push(profileProvider);
        }
        catch (ex) {
            // ignore
        }
        // Add IMDS
        if (process.env.ALIBABA_CLOUD_ECS_METADATA) {
            try {
                const ecsRamRoleProvider = ecs_ram_role_1.default.builder().withRoleName(process.env.ALIBABA_CLOUD_ECS_METADATA).build();
                this.providers.push(ecsRamRoleProvider);
            }
            catch (ex) {
                // ignore
            }
        }
        // TODO: ALIBABA_CLOUD_CREDENTIALS_URI check
    }
    static builder() {
        return new DefaultCredentialsProviderBuilder();
    }
    async getCredentials() {
        if (this.lastUsedProvider) {
            const inner = await this.lastUsedProvider.getCredentials();
            return credentials_1.default.builder()
                .withAccessKeyId(inner.accessKeyId)
                .withAccessKeySecret(inner.accessKeySecret)
                .withSecurityToken(inner.securityToken)
                .withProviderName(`${this.getProviderName()}/${this.lastUsedProvider.getProviderName()}`)
                .build();
        }
        const errors = [];
        for (const provider of this.providers) {
            this.lastUsedProvider = provider;
            let inner;
            try {
                inner = await provider.getCredentials();
            }
            catch (ex) {
                errors.push(ex);
                continue;
            }
            if (inner) {
                return credentials_1.default.builder()
                    .withAccessKeyId(inner.accessKeyId)
                    .withAccessKeySecret(inner.accessKeySecret)
                    .withSecurityToken(inner.securityToken)
                    .withProviderName(`${this.getProviderName()}/${this.lastUsedProvider.getProviderName()}`)
                    .build();
            }
        }
        throw new Error(`unable to get credentials from any of the providers in the chain: ${errors.map((e) => {
            return e.message;
        }).join(', ')}`);
    }
    getProviderName() {
        return 'default';
    }
}
exports["default"] = DefaultCredentialsProvider;
class DefaultCredentialsProviderBuilder {
    build() {
        return new DefaultCredentialsProvider(this);
    }
}
//# sourceMappingURL=default.js.map

/***/ }),

/***/ 3630:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const http_1 = __nccwpck_require__(1629);
const session_1 = __importDefault(__nccwpck_require__(321));
const time_1 = __nccwpck_require__(4544);
const defaultMetadataTokenDuration = 21600; // 6 hours
class ECSRAMRoleCredentialsProvider {
    constructor(builder) {
        // for mock
        this.doRequest = http_1.doRequest;
        this.roleName = builder.roleName;
        this.disableIMDSv1 = builder.disableIMDSv1;
    }
    static builder() {
        return new ECSRAMRoleCredentialsProviderBuilder();
    }
    async getCredentials() {
        if (!this.session || this.needUpdateCredential()) {
            const session = await this.getCredentialsInternal();
            const expirationTime = time_1.parseUTC(session.expiration);
            this.session = session;
            this.expirationTimestamp = expirationTime / 1000;
        }
        return credentials_1.default.builder()
            .withAccessKeyId(this.session.accessKeyId)
            .withAccessKeySecret(this.session.accessKeySecret)
            .withSecurityToken(this.session.securityToken)
            .withProviderName(this.getProviderName())
            .build();
    }
    needUpdateCredential() {
        if (!this.expirationTimestamp) {
            return true;
        }
        return this.expirationTimestamp - (Date.now() / 1000) <= 180;
    }
    async getMetadataToken() {
        // PUT http://100.100.100.200/latest/api/token
        const request = http_1.Request.builder()
            .withMethod('PUT')
            .withProtocol('http')
            .withHost('100.100.100.200')
            .withPath('/latest/api/token')
            .withHeaders({
            'x-aliyun-ecs-metadata-token-ttl-seconds': `${defaultMetadataTokenDuration}`
        })
            .build();
        // ConnectTimeout: 5 * time.Second,
        //   ReadTimeout: 5 * time.Second,
        try {
            const response = await this.doRequest(request);
            if (response.statusCode !== 200) {
                throw new Error(`get metadata token failed with ${response.statusCode}`);
            }
            return response.body.toString('utf8');
        }
        catch (error) {
            if (this.disableIMDSv1) {
                throw error;
            }
            return null;
        }
    }
    async getRoleName() {
        const builder = http_1.Request.builder()
            .withMethod('GET')
            .withProtocol('http')
            .withHost('100.100.100.200')
            .withPath('/latest/meta-data/ram/security-credentials/');
        const metadataToken = await this.getMetadataToken();
        if (metadataToken !== null) {
            builder.withHeaders({
                'x-aliyun-ecs-metadata-token': metadataToken
            });
        }
        // ConnectTimeout: 5 * time.Second,
        // ReadTimeout: 5 * time.Second,
        const request = builder.build();
        const response = await this.doRequest(request);
        if (response.statusCode !== 200) {
            throw new Error(`get role name failed: ${request.method} ${request.toRequestURL()} ${response.statusCode}`);
        }
        return response.body.toString().trim();
    }
    async getCredentialsInternal() {
        let roleName = this.roleName;
        if (!roleName) {
            roleName = await this.getRoleName();
        }
        const builder = http_1.Request.builder()
            .withMethod('GET')
            .withProtocol('http')
            .withHost('100.100.100.200')
            .withPath(`/latest/meta-data/ram/security-credentials/${roleName}`);
        // ConnectTimeout: 5 * time.Second,
        //   ReadTimeout: 5 * time.Second,
        //     Headers: map[string]string{ },
        const metadataToken = await this.getMetadataToken();
        if (metadataToken !== null) {
            builder.withHeaders({
                'x-aliyun-ecs-metadata-token': metadataToken
            });
        }
        const request = builder.build();
        const response = await this.doRequest(request);
        if (response.statusCode !== 200) {
            throw new Error(`get sts token failed, httpStatus: ${response.statusCode}, message = ${response.body.toString()}`);
        }
        let data;
        try {
            data = JSON.parse(response.body.toString());
        }
        catch (ex) {
            throw new Error(`get sts token failed, json parse failed: ${ex.message}`);
        }
        if (!data || !data.AccessKeyId || !data.AccessKeySecret || !data.SecurityToken) {
            throw new Error('get sts token failed');
        }
        if (data.Code !== 'Success') {
            throw new Error('refresh Ecs sts token err, Code is not Success');
        }
        return new session_1.default(data.AccessKeyId, data.AccessKeySecret, data.SecurityToken, data.Expiration);
    }
    getProviderName() {
        return 'ecs_ram_role';
    }
}
exports["default"] = ECSRAMRoleCredentialsProvider;
class ECSRAMRoleCredentialsProviderBuilder {
    constructor() {
        this.disableIMDSv1 = false;
    }
    withRoleName(roleName) {
        this.roleName = roleName;
        return this;
    }
    withDisableIMDSv1(disableIMDSv1) {
        this.disableIMDSv1 = disableIMDSv1;
        return this;
    }
    build() {
        // 设置 roleName 默认值
        if (!this.roleName) {
            this.roleName = process.env.ALIBABA_CLOUD_ECS_METADATA;
        }
        // 允许通过环境变量强制关闭 V1
        if (process.env.ALIBABA_CLOUD_IMDSV1_DISABLED === 'true') {
            this.disableIMDSv1 = true;
        }
        return new ECSRAMRoleCredentialsProvider(this);
    }
}
//# sourceMappingURL=ecs_ram_role.js.map

/***/ }),

/***/ 6566:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
class EnvironmentVariableCredentialsProvider {
    static builder() {
        return new EnvironmentVariableCredentialsProviderBuilder();
    }
    async getCredentials() {
        const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
        if (!accessKeyId) {
            throw new Error('unable to get credentials from enviroment variables, Access key ID must be specified via environment variable (ALIBABA_CLOUD_ACCESS_KEY_ID)');
        }
        const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
        if (!accessKeySecret) {
            throw new Error('unable to get credentials from enviroment variables, Access key secret must be specified via environment variable (ALIBABA_CLOUD_ACCESS_KEY_SECRET)');
        }
        const securityToken = process.env.ALIBABA_CLOUD_SECURITY_TOKEN;
        return credentials_1.default.builder()
            .withAccessKeyId(accessKeyId)
            .withAccessKeySecret(accessKeySecret)
            .withSecurityToken(securityToken)
            .withProviderName(this.getProviderName())
            .build();
    }
    getProviderName() {
        return 'env';
    }
    constructor(builder) {
    }
}
exports["default"] = EnvironmentVariableCredentialsProvider;
class EnvironmentVariableCredentialsProviderBuilder {
    build() {
        return new EnvironmentVariableCredentialsProvider(this);
    }
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 1629:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.doRequest = exports.Response = exports.RequestBuilder = exports.Request = void 0;
const httpx_1 = __importDefault(__nccwpck_require__(6584));
class Request {
    constructor(builder) {
        this.method = builder.method;
        this.protocol = builder.protocol;
        this.host = builder.host;
        this.path = builder.path;
        this.queries = builder.queries;
        this.headers = builder.headers;
        this.bodyForm = builder.bodyForm;
        this.bodyBytes = builder.bodyBytes;
    }
    static builder() {
        return new RequestBuilder();
    }
    toRequestURL() {
        let url = `${this.protocol}://${this.host}${this.path}`;
        if (this.queries && Object.keys(this.queries).length > 0) {
            url += `?` + querystringify(this.queries);
        }
        return url;
    }
}
exports.Request = Request;
class RequestBuilder {
    build() {
        // set default values
        if (!this.protocol) {
            this.protocol = 'https';
        }
        if (!this.path) {
            this.path = '/';
        }
        if (!this.headers) {
            this.headers = {};
        }
        if (!this.queries) {
            this.queries = {};
        }
        return new Request(this);
    }
    withMethod(method) {
        this.method = method;
        return this;
    }
    withProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }
    withHost(host) {
        this.host = host;
        return this;
    }
    withPath(path) {
        this.path = path;
        return this;
    }
    withQueries(queries) {
        this.queries = queries;
        return this;
    }
    withHeaders(headers) {
        this.headers = headers;
        return this;
    }
    withBodyForm(bodyForm) {
        this.bodyForm = bodyForm;
        return this;
    }
}
exports.RequestBuilder = RequestBuilder;
class Response {
    constructor(builder) {
        this.statusCode = builder.statusCode;
        this.headers = builder.headers;
        this.body = builder.body;
    }
    static builder() {
        return new ResponseBuilder();
    }
}
exports.Response = Response;
class ResponseBuilder {
    constructor() {
        this.headers = {};
    }
    withStatusCode(statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    withHeaders(headers) {
        this.headers = headers;
        return this;
    }
    withBody(body) {
        this.body = body;
        return this;
    }
    build() {
        return new Response(this);
    }
}
function querystringify(queries) {
    const fields = [];
    for (const [key, value] of Object.entries(queries)) {
        fields.push(key + '=' + encodeURIComponent(value));
    }
    return fields.join('&');
}
async function doRequest(req) {
    const url = req.toRequestURL();
    let body;
    if (req.bodyForm && Object.keys(req.bodyForm).length > 0) {
        body = querystringify(req.bodyForm);
        if (!req.headers['Content-Type']) {
            req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
    }
    const response = await httpx_1.default.request(url, {
        method: req.method,
        data: body,
        headers: req.headers
    });
    const responseBody = await httpx_1.default.read(response, '');
    return Response.builder()
        .withStatusCode(response.statusCode)
        .withHeaders(response.headers)
        .withBody(responseBody)
        .build();
}
exports.doRequest = doRequest;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 2847:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(9896);
const util_1 = __nccwpck_require__(9023);
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const session_1 = __importDefault(__nccwpck_require__(321));
const utils = __importStar(__nccwpck_require__(1712));
const http_1 = __nccwpck_require__(1629);
const time_1 = __nccwpck_require__(4544);
const readFileAsync = util_1.promisify(fs_1.readFile);
class OIDCRoleArnCredentialsProviderBuilder {
    withOIDCProviderArn(oidcProviderArn) {
        this.oidcProviderArn = oidcProviderArn;
        return this;
    }
    withOIDCTokenFilePath(path) {
        this.oidcTokenFilePath = path;
        return this;
    }
    withRoleArn(roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    withRoleSessionName(roleSessionName) {
        this.roleSessionName = roleSessionName;
        return this;
    }
    withDurationSeconds(durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    withStsEndpoint(stsEndpoint) {
        this.stsEndpoint = stsEndpoint;
        return this;
    }
    withStsRegionId(regionId) {
        this.stsRegionId = regionId;
        return this;
    }
    withPolicy(policy) {
        this.policy = policy;
        return this;
    }
    build() {
        // set default values
        if (!this.oidcProviderArn) {
            this.oidcProviderArn = process.env.ALIBABA_CLOUD_OIDC_PROVIDER_ARN;
        }
        if (!this.oidcTokenFilePath) {
            this.oidcTokenFilePath = process.env.ALIBABA_CLOUD_OIDC_TOKEN_FILE;
        }
        if (!this.roleSessionName) {
            this.roleSessionName = process.env.ALIBABA_CLOUD_ROLE_SESSION_NAME;
        }
        if (!this.durationSeconds) {
            this.durationSeconds = 3600;
        }
        if (!this.roleArn) {
            this.roleArn = process.env.ALIBABA_CLOUD_ROLE_ARN;
        }
        if (!this.roleArn) {
            throw new Error('roleArn does not exist and env ALIBABA_CLOUD_ROLE_ARN is null.');
        }
        if (!this.oidcProviderArn) {
            throw new Error('oidcProviderArn does not exist and env ALIBABA_CLOUD_OIDC_PROVIDER_ARN is null.');
        }
        if (!this.oidcTokenFilePath) {
            throw new Error('oidcTokenFilePath is not exists and env ALIBABA_CLOUD_OIDC_TOKEN_FILE is null.');
        }
        if (!this.roleSessionName) {
            this.roleSessionName = 'credentials-nodejs-' + Date.now();
        }
        if (this.durationSeconds < 900) {
            throw new Error('session duration should be in the range of 900s - max session duration');
        }
        // sts endpoint
        if (!this.stsEndpoint) {
            if (this.stsRegionId) {
                this.stsEndpoint = `sts.${this.stsRegionId}.aliyuncs.com`;
            }
            else {
                this.stsEndpoint = 'sts.aliyuncs.com';
            }
        }
        return new OIDCRoleArnCredentialsProvider(this);
    }
}
class OIDCRoleArnCredentialsProvider {
    constructor(builder) {
        this.doRequest = http_1.doRequest;
        this.roleArn = builder.roleArn;
        this.oidcProviderArn = builder.oidcProviderArn;
        this.oidcTokenFilePath = builder.oidcTokenFilePath;
        this.policy = builder.policy;
        this.durationSeconds = builder.durationSeconds;
        this.roleSessionName = builder.roleSessionName;
        this.stsEndpoint = builder.stsEndpoint;
        // used for mock
        this.doRequest = http_1.doRequest;
    }
    static builder() {
        return new OIDCRoleArnCredentialsProviderBuilder();
    }
    async getCredentials() {
        if (!this.session || this.needUpdateCredential()) {
            const session = await this.getCredentialsInternal();
            // UTC time: 2015-04-09T11:52:19Z
            const expirationTime = time_1.parseUTC(session.expiration);
            this.expirationTimestamp = Math.floor(expirationTime / 1000);
            this.lastUpdateTimestamp = Date.now();
            this.session = session;
        }
        return credentials_1.default.builder()
            .withAccessKeyId(this.session.accessKeyId)
            .withAccessKeySecret(this.session.accessKeySecret)
            .withSecurityToken(this.session.securityToken)
            .withProviderName(this.getProviderName())
            .build();
    }
    getProviderName() {
        return 'oidc_role_arn';
    }
    async getCredentialsInternal() {
        const oidcToken = await readFileAsync(this.oidcTokenFilePath, 'utf8');
        const builder = http_1.Request.builder().withMethod('POST').withProtocol('https').withHost(this.stsEndpoint);
        const queries = Object.create(null);
        queries['Version'] = '2015-04-01';
        queries['Action'] = 'AssumeRoleWithOIDC';
        queries['Format'] = 'JSON';
        queries['Timestamp'] = utils.timestamp();
        builder.withQueries(queries);
        const bodyForm = Object.create(null);
        bodyForm['OIDCProviderArn'] = this.oidcProviderArn;
        bodyForm['OIDCToken'] = oidcToken;
        bodyForm['RoleArn'] = this.roleArn;
        if (this.policy) {
            bodyForm['Policy'] = this.policy;
        }
        bodyForm['RoleSessionName'] = this.roleSessionName;
        bodyForm['DurationSeconds'] = `${this.durationSeconds}`;
        builder.withBodyForm(bodyForm);
        const headers = Object.create(null);
        // set headers
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        builder.withHeaders(headers);
        const request = builder.build();
        const response = await this.doRequest(request);
        if (response.statusCode !== 200) {
            throw new Error(`get sts token failed with OIDC: ${response.body.toString('utf8')}`);
        }
        let data;
        try {
            data = JSON.parse(response.body.toString('utf8'));
        }
        catch (ex) {
            throw new Error(`get sts token failed with OIDC, unmarshal fail: ${response.body.toString('utf8')}`);
        }
        if (!data || !data.Credentials) {
            throw new Error(`get sts token failed with OIDC`);
        }
        const { AccessKeyId, AccessKeySecret, SecurityToken, Expiration } = data.Credentials;
        if (!AccessKeyId || !AccessKeySecret || !SecurityToken) {
            throw new Error('get sts token failed with OIDC');
        }
        return new session_1.default(AccessKeyId, AccessKeySecret, SecurityToken, Expiration);
    }
    needUpdateCredential() {
        if (!this.expirationTimestamp) {
            return true;
        }
        return this.expirationTimestamp - Date.now() / 1000 <= 180;
    }
}
exports["default"] = OIDCRoleArnCredentialsProvider;
//# sourceMappingURL=oidc_role_arn.js.map

/***/ }),

/***/ 9588:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_1 = __importDefault(__nccwpck_require__(6928));
const os_1 = __importDefault(__nccwpck_require__(857));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const utils_1 = __nccwpck_require__(1712);
const static_ak_1 = __importDefault(__nccwpck_require__(174));
const ecs_ram_role_1 = __importDefault(__nccwpck_require__(3630));
const ram_role_arn_1 = __importDefault(__nccwpck_require__(5056));
class ProfileCredentialsProvider {
    constructor(builder) {
        // used for mock
        this.homedir = os_1.default.homedir();
        this.profileName = builder.profileName;
    }
    async getCredentials() {
        if (!this.innerProvider) {
            let sharedCfgPath = process.env.ALIBABA_CLOUD_CREDENTIALS_FILE;
            if (!sharedCfgPath) {
                if (!this.homedir) {
                    throw new Error('cannot found home dir');
                }
                sharedCfgPath = path_1.default.join(this.homedir, '.alibabacloud/credentials');
            }
            const ini = await utils_1.loadIni(sharedCfgPath);
            this.innerProvider = this.getCredentialsProvider(ini);
        }
        const credentials = await this.innerProvider.getCredentials();
        return credentials_1.default.builder()
            .withAccessKeyId(credentials.accessKeyId)
            .withAccessKeySecret(credentials.accessKeySecret)
            .withSecurityToken(credentials.securityToken)
            .withProviderName(`${this.getProviderName()}/${this.innerProvider.getProviderName()}`)
            .build();
    }
    getCredentialsProvider(ini) {
        const config = ini[this.profileName] || {};
        if (!config.type) {
            throw new Error(`Can not find credential type for "${this.profileName}"`);
        }
        switch (config.type) {
            case 'access_key':
                return static_ak_1.default.builder()
                    .withAccessKeyId(config.access_key_id)
                    .withAccessKeySecret(config.access_key_secret)
                    .build();
            case 'ecs_ram_role':
                return ecs_ram_role_1.default.builder()
                    .withRoleName(config.role_name)
                    .build();
            case 'ram_role_arn': {
                const previous = static_ak_1.default.builder()
                    .withAccessKeyId(config.access_key_id)
                    .withAccessKeySecret(config.access_key_secret)
                    .build();
                return ram_role_arn_1.default.builder()
                    .withCredentialsProvider(previous)
                    .withRoleArn(config.role_arn)
                    .build();
            }
            default:
                throw new Error('Invalid type option, support: access_key, ecs_ram_role, ram_role_arn');
        }
    }
    getProviderName() {
        return 'profile';
    }
    static builder() {
        return new ProfileCredentialsProviderBuilder();
    }
}
exports["default"] = ProfileCredentialsProvider;
class ProfileCredentialsProviderBuilder {
    withProfileName(profileName) {
        this.profileName = profileName;
        return this;
    }
    build() {
        // 优先级：
        // 1. 使用显示指定的 profileName
        // 2. 使用环境变量（ALIBABA_CLOUD_PROFILE）指定的 profileName
        // 3. 兜底使用 default 作为 profileName
        if (!this.profileName) {
            this.profileName = process.env.ALIBABA_CLOUD_PROFILE || 'default';
        }
        return new ProfileCredentialsProvider(this);
    }
}
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 5056:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const kitx = __importStar(__nccwpck_require__(4108));
const debug_1 = __importDefault(__nccwpck_require__(2830));
const utils = __importStar(__nccwpck_require__(1712));
const credentials_1 = __importDefault(__nccwpck_require__(8606));
const http_1 = __nccwpck_require__(1629);
const time_1 = __nccwpck_require__(4544);
const session_1 = __importDefault(__nccwpck_require__(321));
const log = debug_1.default('sign');
// type HttpOptions struct {
// 	Proxy         : string
// 	ConnectTimeout int
// 	ReadTimeout    int
// }
class RAMRoleARNCredentialsProviderBuilder {
    build() {
        if (!this.credentialsProvider) {
            throw new Error('must specify a previous credentials provider to asssume role');
        }
        if (!this.roleArn) {
            throw new Error('the RoleArn is empty');
        }
        if (!this.roleSessionName) {
            this.roleSessionName = 'credentials-nodejs-' + Date.now();
        }
        // duration seconds
        if (!this.durationSeconds) {
            // default to 3600
            this.durationSeconds = 3600;
        }
        if (this.durationSeconds < 900) {
            throw new Error('session duration should be in the range of 900s - max session duration');
        }
        // sts endpoint
        if (!this.stsEndpoint) {
            if (this.stsRegionId) {
                this.stsEndpoint = `sts.${this.stsRegionId}.aliyuncs.com`;
            }
            else {
                this.stsEndpoint = 'sts.aliyuncs.com';
            }
        }
        return new RAMRoleARNCredentialsProvider(this);
    }
    withCredentialsProvider(credentialsProvider) {
        this.credentialsProvider = credentialsProvider;
        return this;
    }
    withRoleArn(roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    withStsRegionId(regionId) {
        this.stsRegionId = regionId;
        return this;
    }
    withStsEndpoint(endpoint) {
        this.stsEndpoint = endpoint;
        return this;
    }
    withRoleSessionName(roleSessionName) {
        this.roleSessionName = roleSessionName;
        return this;
    }
    withPolicy(policy) {
        this.policy = policy;
        return this;
    }
    withExternalId(externalId) {
        this.externalId = externalId;
        return this;
    }
    withDurationSeconds(durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
}
function encode(str) {
    const result = encodeURIComponent(str);
    return result.replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}
class RAMRoleARNCredentialsProvider {
    constructor(builder) {
        // used for mock
        this.doRequest = http_1.doRequest;
        this.credentialsProvider = builder.credentialsProvider;
        this.stsEndpoint = builder.stsEndpoint;
        this.roleSessionName = builder.roleSessionName;
        this.policy = builder.policy;
        this.durationSeconds = builder.durationSeconds;
        this.roleArn = builder.roleArn;
        this.externalId = builder.externalId;
    }
    static builder() {
        return new RAMRoleARNCredentialsProviderBuilder();
    }
    async getCredentialsInternal(credentials) {
        const method = 'POST';
        const builder = http_1.Request.builder().withMethod(method).withProtocol('https').withHost(this.stsEndpoint);
        const queries = Object.create(null);
        queries['Version'] = '2015-04-01';
        queries['Action'] = 'AssumeRole';
        queries['Format'] = 'JSON';
        queries['Timestamp'] = utils.timestamp();
        queries['SignatureMethod'] = 'HMAC-SHA1';
        queries['SignatureVersion'] = '1.0';
        queries['SignatureNonce'] = kitx.makeNonce();
        queries['AccessKeyId'] = credentials.accessKeyId;
        if (credentials.securityToken) {
            queries['SecurityToken'] = credentials.securityToken;
        }
        const bodyForm = Object.create(null);
        bodyForm['RoleArn'] = this.roleArn;
        if (this.policy) {
            bodyForm['Policy'] = this.policy;
        }
        if (this.externalId) {
            bodyForm['ExternalId'] = this.externalId;
        }
        bodyForm['RoleSessionName'] = this.roleSessionName;
        bodyForm['DurationSeconds'] = `${this.durationSeconds}`;
        builder.withBodyForm(bodyForm);
        // caculate signature
        const signParams = Object.create(null);
        for (const [key, value] of Object.entries(queries)) {
            signParams[key] = value;
        }
        for (const [key, value] of Object.entries(bodyForm)) {
            signParams[key] = value;
        }
        const keys = Object.keys(signParams).sort();
        const stringToSign = `${method}&${encode('/')}&${encode(keys.map((key) => {
            return `${encode(key)}=${encode(signParams[key])}`;
        }).join('&'))}`;
        log('stringToSign[Client]:');
        log(stringToSign);
        const secret = credentials.accessKeySecret + '&';
        const signature = kitx.sha1(stringToSign, secret, 'base64');
        queries['Signature'] = signature;
        builder.withQueries(queries);
        const headers = Object.create(null);
        // set headers
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        headers['x-acs-credentials-provider'] = credentials.providerName;
        builder.withHeaders(headers);
        // 	if (this.httpOptions) {
        // 		req.connectTimeout = this.httpOptions.connectTimeout;
        // 		req.readTimeout = this.httpOptions.readTimeout;
        // 		req.proxy = this.httpOptions.proxy;
        // 	}
        const request = builder.build();
        const response = await this.doRequest(request);
        if (response.statusCode != 200) {
            if (response.headers['content-type'] && response.headers['content-type'].startsWith('application/json')) {
                const body = JSON.parse(response.body.toString('utf8'));
                const serverStringToSign = body.Message.slice('Specified signature is not matched with our calculation. server string to sign is:'.length);
                log('stringToSign[Server]:');
                log(stringToSign);
                if (body.Code === 'SignatureDoesNotMatch' && serverStringToSign === stringToSign) {
                    throw new Error(`the access key secret is invalid`);
                }
            }
            throw new Error(`refresh session token failed: ${response.body.toString('utf8')}`);
        }
        let data;
        try {
            data = JSON.parse(response.body.toString('utf8'));
        }
        catch (ex) {
            throw new Error(`refresh RoleArn sts token err, unmarshal fail: ${response.body.toString('utf8')}`);
        }
        if (!data || !data.Credentials) {
            throw new Error(`refresh RoleArn sts token err, fail to get credentials`);
        }
        if (!data.Credentials.AccessKeyId || !data.Credentials.AccessKeySecret || !data.Credentials.SecurityToken) {
            throw new Error('refresh RoleArn sts token err, fail to get credentials');
        }
        const { AccessKeyId, AccessKeySecret, SecurityToken, Expiration } = data.Credentials;
        return new session_1.default(AccessKeyId, AccessKeySecret, SecurityToken, Expiration);
    }
    async getCredentials() {
        if (!this.session || this.needUpdateCredential()) {
            // 获取前置凭证
            const previousCredentials = await this.credentialsProvider.getCredentials();
            const session = await this.getCredentialsInternal(previousCredentials);
            // UTC time: 2015-04-09T11:52:19Z
            const expirationTime = time_1.parseUTC(session.expiration);
            this.expirationTimestamp = Math.floor(expirationTime / 1000);
            this.lastUpdateTimestamp = Date.now();
            this.session = session;
        }
        return credentials_1.default.builder()
            .withAccessKeyId(this.session.accessKeyId)
            .withAccessKeySecret(this.session.accessKeySecret)
            .withSecurityToken(this.session.securityToken)
            .withProviderName(`${this.getProviderName()}/${this.credentialsProvider.getProviderName()}`)
            .build();
    }
    needUpdateCredential() {
        if (!this.expirationTimestamp) {
            return true;
        }
        return this.expirationTimestamp - Date.now() / 1000 <= 180;
    }
    getProviderName() {
        return 'ram_role_arn';
    }
}
exports["default"] = RAMRoleARNCredentialsProvider;
//# sourceMappingURL=ram_role_arn.js.map

/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Session {
    constructor(accessKeyId, accessKeySecret, securityToken, expiration) {
        this.accessKeyId = accessKeyId;
        this.accessKeySecret = accessKeySecret;
        this.securityToken = securityToken;
        this.expiration = expiration;
    }
}
exports["default"] = Session;
//# sourceMappingURL=session.js.map

/***/ }),

/***/ 174:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticAKCredentialsProviderBuilder = void 0;
const credentials_1 = __importDefault(__nccwpck_require__(8606));
/**
 * @internal
 */
class StaticAKCredentialsProviderBuilder {
    withAccessKeyId(accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    withAccessKeySecret(accessKeySecret) {
        this.accessKeySecret = accessKeySecret;
        return this;
    }
    build() {
        if (!this.accessKeyId) {
            this.accessKeyId = process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'];
        }
        if (!this.accessKeyId) {
            throw new Error('the access key id is empty');
        }
        if (!this.accessKeySecret) {
            this.accessKeySecret = process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'];
        }
        if (!this.accessKeySecret) {
            throw new Error('the access key secret is empty');
        }
        return new StaticAKCredentialsProvider(this);
    }
}
exports.StaticAKCredentialsProviderBuilder = StaticAKCredentialsProviderBuilder;
/**
 * @internal
 */
class StaticAKCredentialsProvider {
    constructor(builder) {
        this.accessKeyId = builder.accessKeyId;
        this.accessKeySecret = builder.accessKeySecret;
    }
    static builder() {
        return new StaticAKCredentialsProviderBuilder();
    }
    getProviderName() {
        return 'static_ak';
    }
    async getCredentials() {
        const credentials = credentials_1.default
            .builder()
            .withAccessKeyId(this.accessKeyId).withAccessKeySecret(this.accessKeySecret)
            .withProviderName('static_ak')
            .build();
        return credentials;
    }
}
exports["default"] = StaticAKCredentialsProvider;
//# sourceMappingURL=static_ak.js.map

/***/ }),

/***/ 6416:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticSTSCredentialsProviderBuilder = void 0;
const credentials_1 = __importDefault(__nccwpck_require__(8606));
/**
 * @internal
 */
class StaticSTSCredentialsProviderBuilder {
    withAccessKeyId(accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    withAccessKeySecret(accessKeySecret) {
        this.accessKeySecret = accessKeySecret;
        return this;
    }
    withSecurityToken(securityToken) {
        this.securityToken = securityToken;
        return this;
    }
    build() {
        if (!this.accessKeyId) {
            this.accessKeyId = process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'];
        }
        if (!this.accessKeyId) {
            throw new Error('the access key id is empty');
        }
        if (!this.accessKeySecret) {
            this.accessKeySecret = process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'];
        }
        if (!this.accessKeySecret) {
            throw new Error('the access key secret is empty');
        }
        if (!this.securityToken) {
            this.securityToken = process.env['ALIBABA_CLOUD_SECURITY_TOKEN'];
        }
        if (!this.securityToken) {
            throw new Error('the security token is empty');
        }
        return new StaticSTSCredentialsProvider(this);
    }
}
exports.StaticSTSCredentialsProviderBuilder = StaticSTSCredentialsProviderBuilder;
/**
 * @internal
 */
class StaticSTSCredentialsProvider {
    constructor(builder) {
        this.accessKeyId = builder.accessKeyId;
        this.accessKeySecret = builder.accessKeySecret;
        this.securityToken = builder.securityToken;
    }
    static builder() {
        return new StaticSTSCredentialsProviderBuilder();
    }
    getProviderName() {
        return 'static_sts';
    }
    async getCredentials() {
        return credentials_1.default.builder()
            .withAccessKeyId(this.accessKeyId)
            .withAccessKeySecret(this.accessKeySecret)
            .withSecurityToken(this.securityToken)
            .withProviderName(this.getProviderName())
            .build();
    }
}
exports["default"] = StaticSTSCredentialsProvider;
//# sourceMappingURL=static_sts.js.map

/***/ }),

/***/ 4544:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseUTC = void 0;
/**
 * Parses a UTC format date time string and returns the number of milliseconds between midnight,
 * January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
 * @param value A UTC format date time string. For example: 2015-04-09T11:52:19Z
 * @returns The number of milliseconds between 1970.01.01 to the specified date.
 */
function parseUTC(value) {
    if (!value) {
        throw new Error('invalid UTC format time string');
    }
    if (value.length === 20) {
        // 2024-08-30T07:03:06Z
        if (value[4] !== '-' || value[7] !== '-' || value[10] !== 'T' || value[13] !== ':' || value[16] !== ':' || value[19] !== 'Z') {
            throw new Error('invalid UTC format date string');
        }
    }
    else if (value.length === 24) {
        // 2024-08-30T07:03:06.117Z
        if (value[4] !== '-' || value[7] !== '-' || value[10] !== 'T' || value[13] !== ':' || value[16] !== ':' || value[19] !== '.' || value[23] !== 'Z') {
            throw new Error('invalid UTC format date string');
        }
    }
    else {
        throw new Error('invalid UTC format time string');
    }
    const yearStr = value.slice(0, 4);
    const year = Number.parseInt(yearStr, 10);
    if (isNaN(year)) {
        throw new Error('invalid year string');
    }
    const monthStr = value.slice(5, 7);
    const month = Number.parseInt(monthStr, 10);
    if (isNaN(month)) {
        throw new Error('invalid month string');
    }
    if (month < 1 || month > 12) {
        throw new Error('invalid month value');
    }
    const dateStr = value.slice(8, 10);
    const date = Number.parseInt(dateStr, 10);
    if (isNaN(date)) {
        throw new Error('invalid date string');
    }
    if (date < 1 || date > 31) {
        throw new Error('invalid date value');
    }
    const hoursStr = value.slice(11, 13);
    const hours = Number.parseInt(hoursStr, 10);
    if (isNaN(hours)) {
        throw new Error('invalid hours string');
    }
    if (hours < 0 || hours > 24) {
        throw new Error('invalid hours value');
    }
    const minutesStr = value.slice(14, 16);
    const minutes = Number.parseInt(minutesStr, 10);
    if (isNaN(minutes)) {
        throw new Error('invalid minutes string');
    }
    if (minutes < 0 || minutes > 60) {
        throw new Error('invalid minutes value');
    }
    const secondsStr = value.slice(17, 19);
    const seconds = Number.parseInt(secondsStr, 10);
    if (isNaN(seconds)) {
        throw new Error('invalid seconds string');
    }
    if (seconds < 0 || seconds > 60) {
        throw new Error('invalid seconds value');
    }
    if (value.length === 24) {
        const msStr = value.slice(20, 23);
        const ms = Number.parseInt(msStr, 10);
        if (isNaN(ms)) {
            throw new Error('invalid ms string');
        }
        return Date.UTC(year, month - 1, date, hours, minutes, seconds, ms);
    }
    return Date.UTC(year, month - 1, date, hours, minutes, seconds);
}
exports.parseUTC = parseUTC;
//# sourceMappingURL=time.js.map

/***/ }),

/***/ 509:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __importDefault(__nccwpck_require__(9896));
const session_credential_1 = __importDefault(__nccwpck_require__(7286));
const utils = __importStar(__nccwpck_require__(1712));
const http_1 = __nccwpck_require__(8065);
const config_1 = __importDefault(__nccwpck_require__(4056));
const SECURITY_CRED_URL = 'http://100.100.100.200/latest/meta-data/ram/security-credentials/';
class RsaKeyPairCredential extends session_credential_1.default {
    constructor(publicKeyId, privateKeyFile) {
        if (!publicKeyId) {
            throw new Error('Missing required publicKeyId option in config for rsa_key_pair');
        }
        if (!privateKeyFile) {
            throw new Error('Missing required privateKeyFile option in config for rsa_key_pair');
        }
        if (!fs_1.default.existsSync(privateKeyFile)) {
            throw new Error(`privateKeyFile ${privateKeyFile} cannot be empty`);
        }
        const conf = new config_1.default({
            type: 'rsa_key_pair'
        });
        super(conf);
        this.privateKey = utils.parseFile(privateKeyFile);
        this.publicKeyId = publicKeyId;
    }
    async updateCredential() {
        const url = SECURITY_CRED_URL + this.roleName;
        const json = await http_1.request(url, {
            accessKeyId: this.publicKeyId,
            action: 'GenerateSessionAccessKey',
            durationSeconds: 3600,
            signatureMethod: 'SHA256withRSA',
            signatureType: 'PRIVATEKEY',
        }, {}, this.privateKey);
        this.sessionCredential = json.Credentials;
    }
}
exports["default"] = RsaKeyPairCredential;
//# sourceMappingURL=rsa_key_pair_credential.js.map

/***/ }),

/***/ 7286:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const default_credential_1 = __importDefault(__nccwpck_require__(961));
const utils = __importStar(__nccwpck_require__(1712));
const config_1 = __importDefault(__nccwpck_require__(4056));
const credential_model_1 = __importDefault(__nccwpck_require__(241));
class SessionCredential extends default_credential_1.default {
    constructor(config) {
        const conf = new config_1.default({
            type: config.type,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            securityToken: config.securityToken
        });
        super(conf);
        this.sessionCredential = null;
        this.durationSeconds = config.durationSeconds || 3600;
    }
    async updateCredential() {
        throw new Error('need implemented in sub-class');
    }
    async ensureCredential() {
        const needUpdate = this.needUpdateCredential();
        if (needUpdate) {
            await this.updateCredential();
        }
    }
    async getAccessKeyId() {
        await this.ensureCredential();
        return this.sessionCredential.AccessKeyId;
    }
    async getAccessKeySecret() {
        await this.ensureCredential();
        return this.sessionCredential.AccessKeySecret;
    }
    async getSecurityToken() {
        await this.ensureCredential();
        return this.sessionCredential.SecurityToken;
    }
    needUpdateCredential() {
        if (!this.sessionCredential || !this.sessionCredential.Expiration || !this.sessionCredential.AccessKeyId || !this.sessionCredential.AccessKeySecret || !this.sessionCredential.SecurityToken) {
            return true;
        }
        const expireTime = utils.timestamp(new Date(), this.durationSeconds * 0.05 * 1000);
        if (this.sessionCredential.Expiration < expireTime) {
            return true;
        }
        return false;
    }
    async getCredential() {
        await this.ensureCredential();
        return new credential_model_1.default({
            accessKeyId: this.sessionCredential.AccessKeyId,
            accessKeySecret: this.sessionCredential.AccessKeySecret,
            securityToken: this.sessionCredential.SecurityToken,
            bearerToken: this.bearerToken,
            type: this.type,
        });
    }
}
exports["default"] = SessionCredential;
//# sourceMappingURL=session_credential.js.map

/***/ }),

/***/ 2716:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const httpx_1 = __importDefault(__nccwpck_require__(6584));
const config_1 = __importDefault(__nccwpck_require__(4056));
const session_credential_1 = __importDefault(__nccwpck_require__(7286));
class URICredential extends session_credential_1.default {
    constructor(uri) {
        const conf = new config_1.default({
            type: 'credentials_uri',
            credentialsURI: uri
        });
        super(conf);
        if (!uri) {
            this.credentialsURI = process.env['ALIBABA_CLOUD_CREDENTIALS_URI'];
        }
        else {
            this.credentialsURI = uri;
        }
        if (!this.credentialsURI) {
            throw new Error('Missing required credentialsURI option in config or environment variable for credentials_uri');
        }
    }
    async updateCredential() {
        const url = this.credentialsURI;
        const response = await httpx_1.default.request(url, {});
        if (response.statusCode !== 200) {
            throw new Error(`Get credentials from ${url} failed, status code is ${response.statusCode}`);
        }
        const body = (await httpx_1.default.read(response, 'utf8'));
        let json;
        try {
            json = JSON.parse(body);
        }
        catch (ex) {
            throw new Error(`Get credentials from ${url} failed, unmarshal response failed, JSON is: ${body}`);
        }
        if (json.Code !== 'Success') {
            throw new Error(`Get credentials from ${url} failed, Code is ${json.Code}`);
        }
        this.sessionCredential = {
            AccessKeyId: json.AccessKeyId,
            AccessKeySecret: json.AccessKeySecret,
            Expiration: json.Expiration,
            SecurityToken: json.SecurityToken,
        };
    }
}
exports["default"] = URICredential;
//# sourceMappingURL=uri_credential.js.map

/***/ }),

/***/ 2773:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CLIENT = exports.DEFAULT_UA = void 0;
const os = __importStar(__nccwpck_require__(857));
const package_json_1 = __importDefault(__nccwpck_require__(8395));
exports.DEFAULT_UA = `AlibabaCloud (${os.platform()}; ${os.arch()}) ` +
    `Node.js/${process.version} Core/${package_json_1.default.version}`;
exports.DEFAULT_CLIENT = `Node.js(${process.version}), ${package_json_1.default.name}: ${package_json_1.default.version}`;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 8065:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = void 0;
const httpx_1 = __importDefault(__nccwpck_require__(6584));
const kitx = __importStar(__nccwpck_require__(4108));
const helper = __importStar(__nccwpck_require__(2773));
const utils = __importStar(__nccwpck_require__(1712));
const STATUS_CODE = new Set([200, '200', 'OK', 'Success']);
function firstLetterUpper(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
function formatParams(params) {
    const keys = Object.keys(params);
    const newParams = {};
    for (const key of keys) {
        newParams[firstLetterUpper(key)] = params[key];
    }
    return newParams;
}
function encode(str) {
    const result = encodeURIComponent(str);
    return result.replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}
function replaceRepeatList(target, key, repeat) {
    for (let i = 0; i < repeat.length; i++) {
        const item = repeat[i];
        if (item && typeof item === 'object') {
            const keys = Object.keys(item);
            for (const itemKey of keys) {
                target[`${key}.${i + 1}.${itemKey}`] = item[itemKey];
            }
        }
        else {
            target[`${key}.${i + 1}`] = item;
        }
    }
}
function flatParams(params) {
    const target = {};
    const keys = Object.keys(params);
    for (const key of keys) {
        const value = params[key];
        if (Array.isArray(value)) {
            replaceRepeatList(target, key, value);
        }
        else {
            target[key] = value;
        }
    }
    return target;
}
function normalize(params) {
    const list = [];
    const flated = flatParams(params);
    const keys = Object.keys(flated).sort();
    for (const key of keys) {
        const value = flated[key];
        list.push([encode(key), encode(value)]); // push []
    }
    return list;
}
function canonicalize(normalized) {
    const fields = [];
    for (const [key, value] of normalized) {
        fields.push(key + '=' + value);
    }
    return fields.join('&');
}
function _buildParams() {
    const defaultParams = {
        Format: 'JSON',
        SignatureMethod: 'HMAC-SHA1',
        SignatureNonce: kitx.makeNonce(),
        SignatureVersion: '1.0',
        Timestamp: utils.timestamp(),
        Version: '2015-04-01',
        RegionId: 'cn-hangzhou'
    };
    return defaultParams;
}
async function request(host, params = {}, opts = {}, accessKeySecret) {
    // 1. compose params and opts
    let options = Object.assign({ headers: {
            'x-sdk-client': helper.DEFAULT_CLIENT,
            'user-agent': helper.DEFAULT_UA
        } }, opts);
    // format params until formatParams is false
    if (options.formatParams !== false) {
        params = formatParams(params);
    }
    params = Object.assign(Object.assign({}, _buildParams()), params);
    // 2. calculate signature
    const method = (opts.method || 'GET').toUpperCase();
    const normalized = normalize(params);
    if (!options.anonymous) {
        const canonicalized = canonicalize(normalized);
        // 2.1 get string to sign
        const stringToSign = `${method}&${encode('/')}&${encode(canonicalized)}`;
        // 2.2 get signature
        const key = accessKeySecret + '&';
        const signature = kitx.sha1(stringToSign, key, 'base64');
        // add signature
        normalized.push(['Signature', encode(signature)]);
    }
    // 3. generate final url
    const url = opts.method === 'POST' ? `${host}/` : `${host}/?${canonicalize(normalized)}`;
    // 4. send request
    if (opts.method === 'POST') {
        opts.headers = opts.headers || {};
        opts.headers['content-type'] = 'application/x-www-form-urlencoded';
        opts.data = canonicalize(normalized);
    }
    const response = await httpx_1.default.request(url, opts);
    const buffer = await httpx_1.default.read(response, 'utf8');
    const json = JSON.parse(buffer);
    if (json.Code && !STATUS_CODE.has(json.Code)) {
        const err = new Error(`${json.Message}`);
        err.name = json.Code + 'Error';
        err.data = json;
        err.code = json.Code;
        err.url = url;
        throw err;
    }
    return json;
}
exports.request = request;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 1712:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadIni = exports.parseFile = exports.timestamp = void 0;
const ini = __importStar(__nccwpck_require__(2616));
const kitx = __importStar(__nccwpck_require__(4108));
const fs_1 = __importDefault(__nccwpck_require__(9896));
const util_1 = __nccwpck_require__(9023);
const readFileAsync = util_1.promisify(fs_1.default.readFile);
const accessAsync = util_1.promisify(fs_1.default.access);
function timestamp(dateStr, timeChange) {
    let date = new Date(dateStr);
    if (!dateStr || isNaN(date.getTime())) {
        date = new Date();
    }
    if (timeChange) {
        date.setTime(date.getTime() + timeChange);
    }
    const YYYY = date.getUTCFullYear();
    const MM = kitx.pad2(date.getUTCMonth() + 1);
    const DD = kitx.pad2(date.getUTCDate());
    const HH = kitx.pad2(date.getUTCHours());
    const mm = kitx.pad2(date.getUTCMinutes());
    const ss = kitx.pad2(date.getUTCSeconds());
    // 删除掉毫秒部分
    return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
}
exports.timestamp = timestamp;
function parseFile(file, ignoreErr = false) {
    // check read permission
    try {
        fs_1.default.accessSync(file, fs_1.default.constants.R_OK);
    }
    catch (e) {
        if (ignoreErr) {
            return null;
        }
        throw new Error('Has no read permission to credentials file');
    }
    return ini.parse(fs_1.default.readFileSync(file, 'utf-8'));
}
exports.parseFile = parseFile;
async function loadIni(filePath) {
    await accessAsync(filePath, fs_1.default.constants.R_OK);
    const content = await readFileAsync(filePath, 'utf-8');
    return ini.parse(content);
}
exports.loadIni = loadIni;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4671:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isRetryable = exports.retryError = exports.newUnretryableError = exports.getBackoffTime = exports.allowRetry = exports.sleep = exports.cast = exports.Model = exports.toMap = exports.newError = exports.doAction = exports.Response = exports.Request = exports.BytesReadable = void 0;
var querystring = __importStar(__nccwpck_require__(3480));
var http_1 = __nccwpck_require__(8611);
var https_1 = __nccwpck_require__(5692);
var stream_1 = __nccwpck_require__(2203);
var httpx = __importStar(__nccwpck_require__(6584));
var url_1 = __nccwpck_require__(7016);
var BytesReadable = /** @class */ (function (_super) {
    __extends(BytesReadable, _super);
    function BytesReadable(value) {
        var _this = _super.call(this) || this;
        if (typeof value === 'string') {
            _this.value = Buffer.from(value);
        }
        else if (Buffer.isBuffer(value)) {
            _this.value = value;
        }
        return _this;
    }
    BytesReadable.prototype._read = function () {
        this.push(this.value);
        this.push(null);
    };
    return BytesReadable;
}(stream_1.Readable));
exports.BytesReadable = BytesReadable;
var Request = /** @class */ (function () {
    function Request() {
        this.headers = {};
        this.query = {};
    }
    return Request;
}());
exports.Request = Request;
var Response = /** @class */ (function () {
    function Response(httpResponse) {
        this.statusCode = httpResponse.statusCode;
        this.statusMessage = httpResponse.statusMessage;
        this.headers = this.convertHeaders(httpResponse.headers);
        this.body = httpResponse;
    }
    Response.prototype.convertHeaders = function (headers) {
        var results = {};
        var keys = Object.keys(headers);
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            results[key] = headers[key];
        }
        return results;
    };
    Response.prototype.readBytes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpx.read(this.body, '')];
                    case 1:
                        buff = _a.sent();
                        return [2 /*return*/, buff];
                }
            });
        });
    };
    return Response;
}());
exports.Response = Response;
function buildURL(request) {
    var url = request.protocol + "://" + request.headers['host'];
    if (request.port) {
        url += ":" + request.port;
    }
    url += "" + request.pathname;
    var urlInfo = url_1.parse(url);
    if (request.query && Object.keys(request.query).length > 0) {
        if (urlInfo.query) {
            url += "&" + querystring.stringify(request.query);
        }
        else {
            url += "?" + querystring.stringify(request.query);
        }
    }
    return url;
}
function isModelClass(t) {
    if (!t) {
        return false;
    }
    return typeof t.types === 'function' && typeof t.names === 'function';
}
function doAction(request, runtime) {
    if (runtime === void 0) { runtime = null; }
    return __awaiter(this, void 0, void 0, function () {
        var url, method, options, agentOptions, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = buildURL(request);
                    method = (request.method || 'GET').toUpperCase();
                    options = {
                        method: method,
                        headers: request.headers
                    };
                    if (method !== 'GET' && method !== 'HEAD') {
                        options.data = request.body;
                    }
                    if (runtime) {
                        if (typeof runtime.timeout !== 'undefined') {
                            options.timeout = Number(runtime.timeout);
                        }
                        if (typeof runtime.readTimeout !== 'undefined') {
                            options.readTimeout = Number(runtime.readTimeout);
                        }
                        if (typeof runtime.connectTimeout !== 'undefined') {
                            options.connectTimeout = Number(runtime.connectTimeout);
                        }
                        if (typeof runtime.ignoreSSL !== 'undefined') {
                            options.rejectUnauthorized = !runtime.ignoreSSL;
                        }
                        if (typeof runtime.key !== 'undefined') {
                            options.key = String(runtime.key);
                        }
                        if (typeof runtime.cert !== 'undefined') {
                            options.cert = String(runtime.cert);
                        }
                        if (typeof runtime.ca !== 'undefined') {
                            options.ca = String(runtime.ca);
                        }
                        agentOptions = {
                            keepAlive: true,
                        };
                        if (typeof runtime.keepAlive !== 'undefined') {
                            agentOptions.keepAlive = runtime.keepAlive;
                            if (request.protocol && request.protocol.toLowerCase() === 'https') {
                                options.agent = new https_1.Agent(agentOptions);
                            }
                            else {
                                options.agent = new http_1.Agent(agentOptions);
                            }
                        }
                    }
                    return [4 /*yield*/, httpx.request(url, options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, new Response(response)];
            }
        });
    });
}
exports.doAction = doAction;
var ResponseError = /** @class */ (function (_super) {
    __extends(ResponseError, _super);
    function ResponseError(map) {
        var _this = _super.call(this, map.code + ": " + map.message) || this;
        _this.code = map.code;
        _this.data = map.data;
        _this.description = map.description;
        _this.accessDeniedDetail = map.accessDeniedDetail;
        if (_this.data && _this.data.statusCode) {
            _this.statusCode = Number(_this.data.statusCode);
        }
        return _this;
    }
    return ResponseError;
}(Error));
function newError(data) {
    return new ResponseError(data);
}
exports.newError = newError;
function getValue(type, value) {
    if (typeof type === 'string') {
        // basic type
        return value;
    }
    if (type.type === 'array') {
        if (!Array.isArray(value)) {
            throw new Error("expect: array, actual: " + typeof value);
        }
        return value.map(function (item) {
            return getValue(type.itemType, item);
        });
    }
    if (typeof type === 'function') {
        if (isModelClass(type)) {
            return new type(value);
        }
        return value;
    }
    return value;
}
function toMap(value) {
    if (value === void 0) { value = undefined; }
    if (typeof value === 'undefined' || value == null) {
        return null;
    }
    if (value instanceof Model) {
        return value.toMap();
    }
    // 如果是另一个版本的 tea-typescript 创建的 model，instanceof 会判断不通过
    // 这里做一下处理
    if (typeof value.toMap === 'function') {
        return value.toMap();
    }
    if (Array.isArray(value)) {
        return value.map(function (item) {
            return toMap(item);
        });
    }
    return value;
}
exports.toMap = toMap;
var Model = /** @class */ (function () {
    function Model(map) {
        var _this = this;
        if (map == null) {
            return;
        }
        var clz = this.constructor;
        var names = clz.names();
        var types = clz.types();
        Object.keys(names).forEach((function (name) {
            var value = map[name];
            if (value === undefined || value === null) {
                return;
            }
            var type = types[name];
            _this[name] = getValue(type, value);
        }));
    }
    Model.prototype.toMap = function () {
        var _this = this;
        var map = {};
        var clz = this.constructor;
        var names = clz.names();
        Object.keys(names).forEach((function (name) {
            var originName = names[name];
            var value = _this[name];
            if (typeof value === 'undefined' || value == null) {
                return;
            }
            map[originName] = toMap(value);
        }));
        return map;
    };
    return Model;
}());
exports.Model = Model;
function cast(obj, t) {
    if (!obj) {
        throw new Error('can not cast to Map');
    }
    if (typeof obj !== 'object') {
        throw new Error('can not cast to Map');
    }
    var map = obj;
    var clz = t.constructor;
    var names = clz.names();
    var types = clz.types();
    Object.keys(names).forEach(function (key) {
        var originName = names[key];
        var value = map[originName];
        var type = types[key];
        if (typeof value === 'undefined' || value == null) {
            return;
        }
        if (typeof type === 'string') {
            if (type === 'Readable' ||
                type === 'map' ||
                type === 'Buffer' ||
                type === 'any' ||
                typeof value === type) {
                t[key] = value;
                return;
            }
            if (type === 'string' &&
                (typeof value === 'number' ||
                    typeof value === 'boolean')) {
                t[key] = value.toString();
                return;
            }
            if (type === 'boolean') {
                if (value === 1 || value === 0) {
                    t[key] = !!value;
                    return;
                }
                if (value === 'true' || value === 'false') {
                    t[key] = value === 'true';
                    return;
                }
            }
            if (type === 'number' && typeof value === 'string') {
                if (value.match(/^\d*$/)) {
                    t[key] = parseInt(value);
                    return;
                }
                if (value.match(/^[\.\d]*$/)) {
                    t[key] = parseFloat(value);
                    return;
                }
            }
            throw new Error("type of " + key + " is mismatch, expect " + type + ", but " + typeof value);
        }
        else if (type.type === 'map') {
            if (!(value instanceof Object)) {
                throw new Error("type of " + key + " is mismatch, expect object, but " + typeof value);
            }
            t[key] = value;
        }
        else if (type.type === 'array') {
            if (!Array.isArray(value)) {
                throw new Error("type of " + key + " is mismatch, expect array, but " + typeof value);
            }
            if (typeof type.itemType === 'function') {
                t[key] = value.map(function (d) {
                    if (isModelClass(type.itemType)) {
                        return cast(d, new type.itemType({}));
                    }
                    return d;
                });
            }
            else {
                t[key] = value;
            }
        }
        else if (typeof type === 'function') {
            if (!(value instanceof Object)) {
                throw new Error("type of " + key + " is mismatch, expect object, but " + typeof value);
            }
            if (isModelClass(type)) {
                t[key] = cast(value, new type({}));
                return;
            }
            t[key] = value;
        }
        else {
        }
    });
    return t;
}
exports.cast = cast;
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
function allowRetry(retry, retryTimes, startTime) {
    // 还未重试
    if (retryTimes === 0) {
        return true;
    }
    if (retry.retryable !== true) {
        return false;
    }
    if (retry.policy === 'never') {
        return false;
    }
    if (retry.policy === 'always') {
        return true;
    }
    if (retry.policy === 'simple') {
        return (retryTimes < retry['maxAttempts']);
    }
    if (retry.policy === 'timeout') {
        return Date.now() - startTime < retry.timeout;
    }
    if (retry.maxAttempts && typeof retry.maxAttempts === 'number') {
        return retry.maxAttempts >= retryTimes;
    }
    // 默认不重试
    return false;
}
exports.allowRetry = allowRetry;
function getBackoffTime(backoff, retryTimes) {
    if (retryTimes === 0) {
        // 首次调用，不使用退避策略
        return 0;
    }
    if (backoff.policy === 'no') {
        // 不退避
        return 0;
    }
    if (backoff.policy === 'fixed') {
        // 固定退避
        return backoff.period;
    }
    if (backoff.policy === 'random') {
        // 随机退避
        var min = backoff['minPeriod'];
        var max = backoff['maxPeriod'];
        return min + (max - min) * Math.random();
    }
    if (backoff.policy === 'exponential') {
        // 指数退避
        var init = backoff.initial;
        var multiplier = backoff.multiplier;
        var time = init * Math.pow(1 + multiplier, retryTimes - 1);
        var max = backoff.max;
        return Math.min(time, max);
    }
    if (backoff.policy === 'exponential_random') {
        // 指数随机退避
        var init = backoff.initial;
        var multiplier = backoff.multiplier;
        var time = init * Math.pow(1 + multiplier, retryTimes - 1);
        var max = backoff.max;
        return Math.min(time * (0.5 + Math.random()), max);
    }
    return 0;
}
exports.getBackoffTime = getBackoffTime;
var UnretryableError = /** @class */ (function (_super) {
    __extends(UnretryableError, _super);
    function UnretryableError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'UnretryableError';
        return _this;
    }
    return UnretryableError;
}(Error));
function newUnretryableError(request) {
    var e = new UnretryableError('');
    e.data = {
        lastRequest: request
    };
    return e;
}
exports.newUnretryableError = newUnretryableError;
var RetryError = /** @class */ (function (_super) {
    __extends(RetryError, _super);
    function RetryError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'RetryError';
        return _this;
    }
    return RetryError;
}(Error));
function retryError(request, response) {
    var e = new RetryError('');
    e.data = {
        request: request,
        response: response
    };
    return e;
}
exports.retryError = retryError;
function isRetryable(err) {
    if (typeof err === 'undefined' || err === null) {
        return false;
    }
    return err.name === 'RetryError';
}
exports.isRetryable = isRetryable;
//# sourceMappingURL=tea.js.map

/***/ }),

/***/ 6110:
/***/ ((module, exports, __nccwpck_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 897:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nccwpck_require__(744);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 2830:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __nccwpck_require__(6110);
} else {
	module.exports = __nccwpck_require__(5108);
}


/***/ }),

/***/ 5108:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

const tty = __nccwpck_require__(2018);
const util = __nccwpck_require__(9023);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __nccwpck_require__(75);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 6584:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const zlib = __nccwpck_require__(3106);
const http = __nccwpck_require__(8611);
const https = __nccwpck_require__(5692);
const parse = (__nccwpck_require__(7016).parse);
const format = (__nccwpck_require__(7016).format);

const debugBody = __nccwpck_require__(2830)('httpx:body');
const debugHeader = __nccwpck_require__(2830)('httpx:header');

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

const TIMEOUT = 3000; // 3s

const READ_TIMER = Symbol('TIMER::READ_TIMER');
const READ_TIME_OUT = Symbol('TIMER::READ_TIME_OUT');
const READ_TIMER_START_AT = Symbol('TIMER::READ_TIMER_START_AT');

var append = function (err, name, message) {
  err.name = name + err.name;
  err.message = `${message}. ${err.message}`;
  return err;
};

const isNumber = function (num) {
  return num !== null && !isNaN(num);
};

exports.request = function (url, opts) {
  // request(url)
  opts || (opts = {});

  const parsed = typeof url === 'string' ? parse(url) : url;

  let readTimeout, connectTimeout;
  if (isNumber(opts.readTimeout) || isNumber(opts.connectTimeout)) {
    readTimeout = isNumber(opts.readTimeout) ? Number(opts.readTimeout) : TIMEOUT;
    connectTimeout = isNumber(opts.connectTimeout) ? Number(opts.connectTimeout) : TIMEOUT;
  } else if (isNumber(opts.timeout)) {
    readTimeout = connectTimeout = Number(opts.timeout);
  } else {
    readTimeout = connectTimeout = TIMEOUT;
  }

  const isHttps = parsed.protocol === 'https:';
  const method = (opts.method || 'GET').toUpperCase();
  const defaultAgent = isHttps ? httpsAgent : httpAgent;
  const agent = opts.agent || defaultAgent;

  var options = {
    host: parsed.hostname || 'localhost',
    path: parsed.path || '/',
    method: method,
    port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
    agent: agent,
    headers: opts.headers || {},
    // ssl config
    key: opts.key || '',
    cert: opts.cert || '',
    ca: opts.ca || '',
    // connect timerout
    timeout: connectTimeout
  };

  if (isHttps && typeof opts.rejectUnauthorized !== 'undefined') {
    options.rejectUnauthorized = opts.rejectUnauthorized;
  }

  if (opts.compression) {
    options.headers['accept-encoding'] = 'gzip,deflate';
  }

  const httplib = isHttps ? https : http;

  if (typeof opts.beforeRequest === 'function') {
    options = opts.beforeRequest(options);
  }

  return new Promise((resolve, reject) => {
    const request = httplib.request(options);
    const body = opts.data;

    var fulfilled = (response) => {
      if (debugHeader.enabled) {
        const requestHeaders = response.req._header;
        requestHeaders.split('\r\n').forEach((line) => {
          debugHeader('> %s', line);
        });

        debugHeader('< HTTP/%s %s %s', response.httpVersion, response.statusCode, response.statusMessage);
        Object.keys(response.headers).forEach((key) => {
          debugHeader('< %s: %s', key, response.headers[key]);
        });
      }
      resolve(response);
    };

    var rejected = (err) => {
      err.message += `${method} ${format(parsed)} failed.`;
      // clear response timer when error
      if (request.socket && request.socket[READ_TIMER]) {
        clearTimeout(request.socket[READ_TIMER]);
      }
      reject(err);
    };

    var abort = (err) => {
      request.abort();
      rejected(err);
    };

    const startResponseTimer = function (socket) {
      const timer = setTimeout(() => {
        if (socket[READ_TIMER]) {
          clearTimeout(socket[READ_TIMER]);
          socket[READ_TIMER] = null;
        }
        var err = new Error();
        var message = `ReadTimeout(${readTimeout})`;
        abort(append(err, 'RequestTimeout', message));
      }, readTimeout);
      // start read-timer
      socket[READ_TIME_OUT] = readTimeout;
      socket[READ_TIMER] = timer;
      socket[READ_TIMER_START_AT] = Date.now();
    };

    // string
    if (!body || 'string' === typeof body || body instanceof Buffer) {
      if (debugBody.enabled) {
        if (!body) {
          debugBody('<no request body>');
        } else if ('string' === typeof body) {
          debugBody(body);
        } else {
          debugBody(`Buffer <ignored>, Buffer length: ${body.length}`);
        }
      }
      request.end(body);
    } else if ('function' === typeof body.pipe) { // stream
      body.pipe(request);
      if (debugBody.enabled) {
        debugBody('<request body is a stream>');
      }
      body.once('error', (err) => {
        abort(append(err, 'HttpX', 'Stream occor error'));
      });
    }

    request.on('response', fulfilled);
    request.on('error', rejected);
    request.once('socket', function (socket) {
      // reuse socket
      if (socket.readyState === 'opening') {
        socket.once('connect', function () {
          startResponseTimer(socket);
        });
      } else {
        startResponseTimer(socket);
      }
    });
  });
};

exports.read = function (response, encoding) {
  var readable = response;
  switch (response.headers['content-encoding']) {
  // or, just use zlib.createUnzip() to handle both cases
  case 'gzip':
    readable = response.pipe(zlib.createGunzip());
    break;
  case 'deflate':
    readable = response.pipe(zlib.createInflate());
    break;
  default:
    break;
  }

  return new Promise((resolve, reject) => {
    // node.js 14 use response.client
    const socket = response.socket || response.client;

    const makeReadTimeoutError = () => {
      const req = response.req;
      var err = new Error();
      err.name = 'RequestTimeoutError';
      err.message = `ReadTimeout: ${socket[READ_TIME_OUT]}. ${req.method} ${req.path} failed.`;
      return err;
    };
    // check read-timer
    let readTimer;
    const oldReadTimer = socket[READ_TIMER];
    if (!oldReadTimer) {
      reject(makeReadTimeoutError());
      return;
    }
    const remainTime = socket[READ_TIME_OUT] - (Date.now() - socket[READ_TIMER_START_AT]);
    clearTimeout(oldReadTimer);
    if (remainTime <= 0) {
      reject(makeReadTimeoutError());
      return;
    }
    readTimer = setTimeout(function () {
      reject(makeReadTimeoutError());
    }, remainTime);

    // start reading data
    var onError, onData, onEnd;
    var cleanup = function () {
      // cleanup
      readable.removeListener('error', onError);
      readable.removeListener('data', onData);
      readable.removeListener('end', onEnd);
      // clear read timer
      if (readTimer) {
        clearTimeout(readTimer);
      }
    };

    const bufs = [];
    var size = 0;

    onData = function (buf) {
      bufs.push(buf);
      size += buf.length;
    };

    onError = function (err) {
      cleanup();
      reject(err);
    };

    onEnd = function () {
      cleanup();
      var buff = Buffer.concat(bufs, size);

      debugBody('');
      if (encoding) {
        const result = buff.toString(encoding);
        debugBody(result);
        return resolve(result);
      }

      if (debugBody.enabled) {
        debugBody(buff.toString());
      }
      resolve(buff);
    };

    readable.on('error', onError);
    readable.on('data', onData);
    readable.on('end', onEnd);
  });
};


/***/ }),

/***/ 2616:
/***/ ((__unused_webpack_module, exports) => {

exports.parse = exports.decode = decode

exports.stringify = exports.encode = encode

exports.safe = safe
exports.unsafe = unsafe

var eol = typeof process !== 'undefined' &&
  process.platform === 'win32' ? '\r\n' : '\n'

function encode (obj, opt) {
  var children = []
  var out = ''

  if (typeof opt === 'string') {
    opt = {
      section: opt,
      whitespace: false,
    }
  } else {
    opt = opt || {}
    opt.whitespace = opt.whitespace === true
  }

  var separator = opt.whitespace ? ' = ' : '='

  Object.keys(obj).forEach(function (k, _, __) {
    var val = obj[k]
    if (val && Array.isArray(val)) {
      val.forEach(function (item) {
        out += safe(k + '[]') + separator + safe(item) + '\n'
      })
    } else if (val && typeof val === 'object')
      children.push(k)
    else
      out += safe(k) + separator + safe(val) + eol
  })

  if (opt.section && out.length)
    out = '[' + safe(opt.section) + ']' + eol + out

  children.forEach(function (k, _, __) {
    var nk = dotSplit(k).join('\\.')
    var section = (opt.section ? opt.section + '.' : '') + nk
    var child = encode(obj[k], {
      section: section,
      whitespace: opt.whitespace,
    })
    if (out.length && child.length)
      out += eol

    out += child
  })

  return out
}

function dotSplit (str) {
  return str.replace(/\1/g, '\u0002LITERAL\\1LITERAL\u0002')
    .replace(/\\\./g, '\u0001')
    .split(/\./).map(function (part) {
      return part.replace(/\1/g, '\\.')
        .replace(/\2LITERAL\\1LITERAL\2/g, '\u0001')
    })
}

function decode (str) {
  var out = {}
  var p = out
  var section = null
  //          section     |key      = value
  var re = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i
  var lines = str.split(/[\r\n]+/g)

  lines.forEach(function (line, _, __) {
    if (!line || line.match(/^\s*[;#]/))
      return
    var match = line.match(re)
    if (!match)
      return
    if (match[1] !== undefined) {
      section = unsafe(match[1])
      if (section === '__proto__') {
        // not allowed
        // keep parsing the section, but don't attach it.
        p = {}
        return
      }
      p = out[section] = out[section] || {}
      return
    }
    var key = unsafe(match[2])
    if (key === '__proto__')
      return
    var value = match[3] ? unsafe(match[4]) : true
    switch (value) {
      case 'true':
      case 'false':
      case 'null': value = JSON.parse(value)
    }

    // Convert keys with '[]' suffix to an array
    if (key.length > 2 && key.slice(-2) === '[]') {
      key = key.substring(0, key.length - 2)
      if (key === '__proto__')
        return
      if (!p[key])
        p[key] = []
      else if (!Array.isArray(p[key]))
        p[key] = [p[key]]
    }

    // safeguard against resetting a previously defined
    // array by accidentally forgetting the brackets
    if (Array.isArray(p[key]))
      p[key].push(value)
    else
      p[key] = value
  })

  // {a:{y:1},"a.b":{x:2}} --> {a:{y:1,b:{x:2}}}
  // use a filter to return the keys that have to be deleted.
  Object.keys(out).filter(function (k, _, __) {
    if (!out[k] ||
      typeof out[k] !== 'object' ||
      Array.isArray(out[k]))
      return false

    // see if the parent section is also an object.
    // if so, add it to that, and mark this one for deletion
    var parts = dotSplit(k)
    var p = out
    var l = parts.pop()
    var nl = l.replace(/\\\./g, '.')
    parts.forEach(function (part, _, __) {
      if (part === '__proto__')
        return
      if (!p[part] || typeof p[part] !== 'object')
        p[part] = {}
      p = p[part]
    })
    if (p === out && nl === l)
      return false

    p[nl] = out[k]
    return true
  }).forEach(function (del, _, __) {
    delete out[del]
  })

  return out
}

function isQuoted (val) {
  return (val.charAt(0) === '"' && val.slice(-1) === '"') ||
    (val.charAt(0) === "'" && val.slice(-1) === "'")
}

function safe (val) {
  return (typeof val !== 'string' ||
    val.match(/[=\r\n]/) ||
    val.match(/^\[/) ||
    (val.length > 1 &&
     isQuoted(val)) ||
    val !== val.trim())
    ? JSON.stringify(val)
    : val.replace(/;/g, '\\;').replace(/#/g, '\\#')
}

function unsafe (val, doUnesc) {
  val = (val || '').trim()
  if (isQuoted(val)) {
    // remove the single quotes before calling JSON.parse
    if (val.charAt(0) === "'")
      val = val.substr(1, val.length - 2)

    try {
      val = JSON.parse(val)
    } catch (_) {}
  } else {
    // walk the val to find the first not-escaped ; character
    var esc = false
    var unesc = ''
    for (var i = 0, l = val.length; i < l; i++) {
      var c = val.charAt(i)
      if (esc) {
        if ('\\;#'.indexOf(c) !== -1)
          unesc += c
        else
          unesc += '\\' + c

        esc = false
      } else if (';#'.indexOf(c) !== -1)
        break
      else if (c === '\\')
        esc = true
      else
        unesc += c
    }
    if (esc)
      unesc += '\\'

    return unesc.trim()
  }
  return val
}


/***/ }),

/***/ 4108:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const fs = __nccwpck_require__(9896);
const os = __nccwpck_require__(857);
const crypto = __nccwpck_require__(6982);

/**
 * Load *.json file synchronous. Don't use require('*.json')
 * to load *.json files, it will cached in process.
 * @param {String} filename absolute file path
 * @return {Object} a parsed object
 */
exports.loadJSONSync = function (filename) {
  // strip BOM
  var content = fs.readFileSync(filename, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  try {
    return JSON.parse(content);
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};

/**
 * Encoding a string to Buffer safely
 * @param {String} str string.
 * @param {String} encoding. optional.
 * @return {Buffer} encoded buffer
 */
exports.encode = function (str, encoding) {
  if (typeof str !== 'string') {
    str = '' + str;
  }

  return Buffer.from(str, encoding);
};

/**
 * Generate a haser with specfied algorithm
 * @param {String} algorithm can be md5, etc.
 * @return {Function} a haser with specfied algorithm
 */
exports.makeHasher = function (algorithm) {
  return function (data, encoding) {
    var shasum = crypto.createHash(algorithm);
    shasum.update(data);
    return shasum.digest(encoding);
  };
};

exports.createHash = exports.makeHasher;

/**
 * Get md5 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} encoding optional. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.md5 = exports.makeHasher('md5');

/**
 * Get sha1 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} key the key.
 * @param {String} encoding optionnal. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.createHmac = function (algorithm) {
  return function (data, key, encoding) {
    return crypto.createHmac(algorithm, key).update(data).digest(encoding);
  };
};

/**
 * Get sha1 hash digests of data
 * @param {String|Buffer} data data.
 * @param {String} key the key.
 * @param {String} encoding optionnal. can be 'hex', 'binary', 'base64'.
 * @return {String|Buffer} if no encoding is provided, a buffer is returned.
 */
exports.sha1 = exports.createHmac('sha1');

/**
 * Get a random value in a range
 * @param {Number} min range start.
 * @param {Number} max range end.
 */
exports.random = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

/**
 * Generate a nonce string
 * @return {String} a nonce string.
 */
exports.makeNonce = (function () {
  var counter = 0;
  var last;
  const machine = os.hostname();
  const pid = process.pid;

  return function () {
    var val = Math.floor(Math.random() * 1000000000000);
    if (val === last) {
      counter++;
    } else {
      counter = 0;
    }

    last = val;

    var uid = `${machine}${pid}${val}${counter}`;
    return exports.md5(uid, 'hex');
  };
}());

/**
 * Pad a number as \d\d format
 * @param {Number} num a number that less than 100.
 * @return {String} if number less than 10, pad with 0,
 *  otherwise, returns string of number.
 */
exports.pad2 = function (num) {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};

/**
 * Pad a number as \d\d\d format
 * @param {Number} num a number that less than 1000.
 * @return {String} if number less than 100, pad with 0,
 *  otherwise, returns string of number.
 */
exports.pad3 = function (num) {
  if (num < 10) {
    return '00' + num;
  } else if (num < 100) {
    return '0' + num;
  }
  return '' + num;
};

/**
 * Return the YYYYMMDD format of a date.
 * @param {Date} date a Date object.
 * @return {String} the YYYYMMDD format.
 */
exports.getYYYYMMDD = function (date) {
  var YYYY = date.getFullYear();
  var MM = exports.pad2(date.getMonth() + 1);
  var DD = exports.pad2(date.getDate());
  return '' + YYYY + MM + DD;
};

/**
 * sleep a while.
 * @param {Number} in milliseconds
 * @return {Promise} a Promise
 */
exports.sleep = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * Get the IPv4 address
 * @return {String} the IPv4 address, or empty string
 */
exports.getIPv4 = function () {
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var addresses = interfaces[key];
    for (var j = 0; j < addresses.length; j++) {
      var item = addresses[j];
      if (!item.internal && item.family === 'IPv4') {
        return item.address;
      }
    }
  }

  // without non-internal address
  return '';
};

/**
 * Get the Mac address
 * @return {String} the Mac address
 */
exports.getMac = function () {
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var addresses = interfaces[key];
    for (var j = 0; j < addresses.length; j++) {
      var item = addresses[j];
      if (!item.internal && item.family === 'IPv4') {
        return item.mac;
      }
    }
  }

  // without non-internal address
  return '00:00:00:00:00:00';
};

/**
 * Read all bytes from a readable
 * @return {Readable} the readable stream
 * @return {Promise} a Promise with all bytes
 */
exports.readAll = function (readable) {
  return new Promise((resolve, reject) => {
    var onError, onData, onEnd;
    var cleanup = function (err) {
      // cleanup
      readable.removeListener('error', onError);
      readable.removeListener('data', onData);
      readable.removeListener('end', onEnd);
    };

    var bufs = [];
    var size = 0;

    onData = function (buf) {
      bufs.push(buf);
      size += buf.length;
    };

    onError = function (err) {
      cleanup();
      reject(err);
    };

    onEnd = function () {
      cleanup();
      resolve(Buffer.concat(bufs, size));
    };

    readable.on('error', onError);
    readable.on('data', onData);
    readable.on('end', onEnd);
  });
};


/***/ }),

/***/ 744:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(218);


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(9278);
var tls = __nccwpck_require__(4756);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var events = __nccwpck_require__(4434);
var assert = __nccwpck_require__(2613);
var util = __nccwpck_require__(9023);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 75:
/***/ ((module) => {

module.exports = eval("require")("supports-color");


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1943:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 3480:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 3193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 2018:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7016:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 3106:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 8395:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@alicloud/credentials","version":"2.4.0","description":"alibaba cloud node.js sdk credentials","main":"dist/src/client.js","scripts":{"prepublishOnly":"tsc","build":"tsc","lint":"eslint --fix ./src --ext .ts","test":"mocha -b -r ts-node/register test/**/*.test.ts test/*.test.ts --timeout 15000","test-dev":"nyc -e .ts -r=html -r=text -r=lcov mocha -b -r ts-node/register","cov":"nyc -e .ts -r=html -r=text -r=lcov npm run test","ci":"npm run cov","integration":"mocha -b -r ts-node/register -R spec integration/*.test.ts","clean":"rm -rf coverage"},"repository":{"type":"git","url":"git+https://github.com/aliyun/nodejs-credentials.git"},"keywords":["alibaba cloud","sdk","credentials"],"author":"Alibaba Cloud SDK","license":"MIT","devDependencies":{"@types/debug":"^4.1.12","@types/expect.js":"^0.3.29","@types/ini":"^1.3.30","@types/mocha":"^10.0.6","@types/rewire":"^2.5.28","@typescript-eslint/eslint-plugin":"^6.18.1","@typescript-eslint/parser":"^6.18.1","eslint":"^8.56.0","expect.js":"^0.3.1","mm":"^2.4.1","mocha":"^10.1.0","nyc":"^15.1.0","rewire":"^7.0.0","ts-node":"^10.9.2","typescript":"^3.7.5"},"dependencies":{"@alicloud/tea-typescript":"^1.5.3","httpx":"^2.2.0","ini":"^1.3.5","kitx":"^2.0.0"},"bugs":{"url":"https://github.com/aliyun/nodejs-credentials/issues"},"homepage":"https://github.com/aliyun/nodejs-credentials#readme","files":["src","dist"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;


const os = __nccwpck_require__(857);
const path = __nccwpck_require__(6928);
const fsx = __nccwpck_require__(1943);

const core = __nccwpck_require__(7484);
const acc = __nccwpck_require__(477);

const CredentialClient = acc.default;
const Config = acc.Config;

const ROLE_SESSION_NAME = 'github-action-session';

function setOutput(accessKeyId, accessKeySecret, securityToken) {
  core.setSecret(accessKeyId);
  core.setSecret(accessKeySecret);
  core.setSecret(securityToken);
  core.setOutput('aliyun-access-key-id', accessKeyId);
  core.setOutput('aliyun-access-key-secret', accessKeySecret);
  core.setOutput('aliyun-security-token', securityToken);
  // use standard environment variables
  core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_ID', accessKeyId);
  core.exportVariable('ALIBABA_CLOUD_ACCESS_KEY_SECRET', accessKeySecret);
  core.exportVariable('ALIBABA_CLOUD_SECURITY_TOKEN', securityToken);
  // keep it for compatibility
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_ID', accessKeyId);
  core.exportVariable('ALIBABACLOUD_ACCESS_KEY_SECRET', accessKeySecret);
  core.exportVariable('ALIBABACLOUD_SECURITY_TOKEN', securityToken);
}

async function run() {
  const roleToAssume = core.getInput('role-to-assume');
  const oidcProviderArn = core.getInput('oidc-provider-arn');
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
      roleSessionName: ROLE_SESSION_NAME
    });
    const client = new CredentialClient(config);
    const { accessKeyId, accessKeySecret, securityToken } = await client.getCredential();
    setOutput(accessKeyId, accessKeySecret, securityToken);
    return;
  }

  const config = new Config({
    type: 'ecs_ram_role'
  });
  const client = new CredentialClient(config);
  const { accessKeyId, accessKeySecret, securityToken } = await client.getCredential();

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
      const { accessKeyId, accessKeySecret, securityToken } = await cred.getCredential();
      setOutput(accessKeyId, accessKeySecret, securityToken);
    }

    return;
  }

  setOutput(accessKeyId, accessKeySecret, securityToken);

  return;
}

if (require.main === require.cache[eval('__filename')]) {
  run().catch((err) => {
    console.log(err.stack);
    core.setFailed(err.message);
  });
}

exports.run = run;
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map