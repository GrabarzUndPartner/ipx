'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const middleware = require('./chunks/middleware.cjs');
require('defu');
require('image-meta');
require('ufo');
require('fs');
require('pathe');
require('is-valid-path');
require('http');
require('https');
require('node:http');
require('node:https');
require('node:zlib');
require('node:stream');
require('node:buffer');
require('node:util');
require('node:url');
require('node:net');
require('node:fs');
require('node:path');
require('destr');
require('etag');
require('xss');



exports.createIPX = middleware.createIPX;
exports.createIPXMiddleware = middleware.createIPXMiddleware;
exports.handleRequest = middleware.handleRequest;
