import consola from 'consola';
import { listen } from 'listhen';
import { c as createIPX, a as createIPXMiddleware } from './chunks/middleware.mjs';
import 'defu';
import 'image-meta';
import 'ufo';
import 'fs';
import 'pathe';
import 'is-valid-path';
import 'http';
import 'https';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'destr';
import 'etag';
import 'xss';

async function main() {
  const ipx = createIPX({});
  const middleware = createIPXMiddleware(ipx);
  await listen(middleware, {
    clipboard: false
  });
}
main().catch((err) => {
  consola.error(err);
  process.exit(1);
});
