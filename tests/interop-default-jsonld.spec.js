jest.setTimeout(20 * 1000);

const useSecurityContext = require("../use-security-context");
const documentLoader = require("./__fixtures__/documentLoader");
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

const makeDefaultTestJsonld = methodsForTest => {
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

makeDefaultTestJsonld(methodsForTest);
