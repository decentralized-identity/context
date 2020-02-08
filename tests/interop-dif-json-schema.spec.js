jest.setTimeout(20 * 1000);

const useSecurityContext = require("../use-security-context");
const documentLoader = require("./__fixtures__/documentLoader");
const getMethodsForTest = require("./__fixtures__/getMethodsForTest");
const schema = require("../schemas");

let focusedMethods = [];
focusedMethods = ["key", "ethr"];
const methodsForTest = getMethodsForTest(focusedMethods);

beforeEach(() => {
  jest.resetModules();
  useSecurityContext("default");
});

const makeDifJsonSchemaTest = methodsForTest => {
  describe("DIF JSON Schema", () => {
    Object.keys(methodsForTest).map(method => {
      describe(method, () => {
        methodsForTest[method].forEach(did => {
          it(did, async () => {
            const { document } = await documentLoader(did, "default");
            schema.validator.validate(document, schema.schemas.didDoc, {
              throwError: true
            });
          });
        });
      });
    });
  });
};

makeDifJsonSchemaTest(methodsForTest);
