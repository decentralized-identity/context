const useSecurityContext = require("../../../use-security-context");

const documentLoader = require("../../__fixtures__/documentLoader");

let canSignAndVerify;

jest.setTimeout(10 * 1000);

const examples = require("./example-dids.json");

beforeEach(() => {
  jest.resetModules();
  useSecurityContext("default");
  canSignAndVerify = require("../../__fixtures__/canSignAndVerify");
});

describe("did:btcr", () => {
  describe("Default Context", () => {
    examples.forEach(did => {
      it(did, async () => {
        const { document } = await documentLoader(did);
        await canSignAndVerify(document, "default");
      });
    });
  });

  describe("DIF Context", () => {
    examples.forEach(did => {
      it(did, async () => {
        const { document } = await documentLoader(did, {
          overwrite_did_context:
            "https://identity.foundation/context/did-latest.jsonld"
        });
        await canSignAndVerify(document, "dif");
      });
    });
  });

  describe("W3 Context", () => {
    examples.forEach(did => {
      it(did, async () => {
        const { document } = await documentLoader(did, {
          overwrite_did_context: "https://www.w3.org/ns/did/v1"
        });
        expect(document["@context"]).toEqual("https://www.w3.org/ns/did/v1");
        await canSignAndVerify(document, "default");
      });
    });
  });
});
