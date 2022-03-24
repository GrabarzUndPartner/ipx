'use strict';

const consola = require('consola');
const listhen = require('listhen');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);

async function main() {
  const ipx = middleware.createIPX({});
  const middleware$1 = middleware.createIPXMiddleware(ipx);
  await listhen.listen(middleware$1, {
    clipboard: false
  });
}
main().catch((err) => {
  consola__default.error(err);
  process.exit(1);
});
