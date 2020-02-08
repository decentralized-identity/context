jest.setTimeout(20 * 1000);

const useSecurityContext = require("../use-security-context");
const documentLoader = require("./__fixtures__/documentLoader");
const getMethodsForTest = require("./__fixtures__/getMethodsForTest");

let focusedMethods = [];
// focusedMethods = ["key", "ethr"];
const methodsForTest = getMethodsForTest(focusedMethods);

beforeEach(() => {
  jest.resetModules();
  useSecurityContext("default");
  canSignAndVerify = require("./__fixtures__/canSignAndVerify");
});

const makeDifTestJsonLd = methodsForTest => {
  describe("DIF JSON-LD", () => {
    Object.keys(methodsForTest).map(method => {
      describe(method, () => {
        methodsForTest[method].forEach(did => {
          it(did, async () => {
            const { document } = await documentLoader(did, {
              overwrite_did_context:
                "https://identity.foundation/context/did-latest.jsonld"
            });
            await canSignAndVerify(document, "dif");
          });
        });
      });
    });
  });
};

makeDifTestJsonLd(methodsForTest);
