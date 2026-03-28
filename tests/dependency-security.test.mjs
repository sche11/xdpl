import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('serialize-javascript is patched for CVE-2026-34043', async () => {
  const packageJson = JSON.parse(
    await readFile(new URL('../node_modules/serialize-javascript/package.json', import.meta.url), 'utf8'),
  );

  assert.equal(
    packageJson.version,
    '7.0.5',
    'serialize-javascript must be upgraded to 7.0.5 or later',
  );
});
