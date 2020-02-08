jest.setTimeout(20 * 1000);

const useSecurityContext = require("../use-security-context");
const documentLoader = require("./__fixtures__/documentLoader");
const schema = require("../schemas");
let canSignAndVerify;

const urConfig = require("./__fixtures__/universal-resolver/config.json");

const methodsForTest = {};

const focusedMethods = ["key", "ethr"];

urConfig.drivers.forEach(driver => {
  if (driver.image !== "universalresolver/driver-dns") {
    const methodName = driver.pattern.split(":")[1];
    if (focusedMethods.indexOf(methodName) !== -1) {
      methodsForTest[methodName] = driver.testIdentifiers;
    }
  }
});

beforeEach(() => {
  jest.resetModules();
  useSecurityContext("default");
  canSignAndVerify = require("./__fixtures__/canSignAndVerify");
});

const makeDifTest = methodsForTest => {
  describe("DIF Context", () => {
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

const makeDefaultTest = methodsForTest => {
  describe("Default Context", () => {
    Object.keys(methodsForTest).map(method => {
      describe(method, () => {
        methodsForTest[method].forEach(did => {
          it(did, async () => {
            const { document } = await documentLoader(did);
            await canSignAndVerify(document, "default");
          });
        });
      });
    });
  });
};

const makeW3Test = methodsForTest => {
  describe("W3", () => {
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

// makeDefaultTest(methodsForTest);
// makeW3Test(methodsForTest);
// makeDifTest(methodsForTest);
