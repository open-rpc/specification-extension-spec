import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import draft07MetaSchema from "ajv/dist/refs/json-schema-draft-07.json" with { type: "json" };

const rootDir = path.resolve(import.meta.dirname, "..");
const metaSchemaPath = path.join(rootDir, "src/meta-schema.json");
const examplesDir = path.join(rootDir, "src/examples");

const metaSchema = JSON.parse(await readFile(metaSchemaPath, "utf8"));

const ajv = new Ajv({
  allErrors: true,
  strict: false,
});
addFormats(ajv);

ajv.addSchema(draft07MetaSchema, "https://meta.json-schema.tools");
ajv.addSchema(draft07MetaSchema, "https://meta.json-schema.tools/");

const validate = ajv.compile(metaSchema);
const exampleFiles = (await readdir(examplesDir)).filter((entry) => entry.endsWith(".json")).sort();

test("all example extensions validate against the meta schema", async (t) => {
  for (const fileName of exampleFiles) {
    await t.test(fileName, async () => {
      const filePath = path.join(examplesDir, fileName);
      const example = JSON.parse(await readFile(filePath, "utf8"));

      const isValid = validate(example);
      assert.equal(
        isValid,
        true,
        `${fileName} failed validation:\n${ajv.errorsText(validate.errors, { separator: "\n" })}`,
      );
    });
  }
});
