jest.setTimeout(20 * 1000);

const useSecurityContext = require("../use-security-context");
const documentLoader = require("./__fixtures__/documentLoader");
const getMethodsForTest = require("./__fixtures__/getMethodsForTest");

let focusedMethods = [];
focusedMethods = ["key", "ethr"];
const methodsForTest = getMethodsForTest(focusedMethods);

beforeEach(() => {
  jest.resetModules();
  useSecurityContext("default");
  canSignAndVerify = require("./__fixtures__/canSignAndVerify");
});

const makeW3TestJsonLd = methodsForTest => {
  describe("W3 JSON-LD", () => {
    Object.keys(methodsForTest).map(method => {
      describe(method, () => {
        methodsForTest[method].forEach(did => {
          it(did, async () => {
            const { document } = await documentLoader(did, {
              overwrite_did_context: "https://www.w3.org/ns/did/v1"
            });
            expect(document["@context"]).toEqual(
              "https://www.w3.org/ns/did/v1"
            );
            await canSignAndVerify(document, "default");
          });
        });
      });
    });
  });
};

makeW3TestJsonLd(methodsForTest);
