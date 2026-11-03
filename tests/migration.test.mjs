import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

async function loadSite() {
  const source = await readFile(new URL("../src/lib/site.ts", import.meta.url), "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}#${Math.random()}`);
}

test("canonical origin stays on current host until configured for apex trainlyfe; member login uses Chalk It Pro", async () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    assert.equal((await loadSite()).SITE_URL, "https://www.daneff.com");
    process.env.NEXT_PUBLIC_SITE_URL = "https://trainlyfe.com/";
    const site = await loadSite();
    assert.equal(site.SITE_URL, "https://trainlyfe.com");
    assert.equal(site.NAV_ITEMS.find(item => item.label === "Member Login").href, "https://app.chalkitpro.com");
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = previous;
  }
});
