const documentLoader = require("../../__fixtures__/documentLoader");
const canSignAndVerify = require("../../__fixtures__/canSignAndVerify");

jest.setTimeout(10 * 1000);

describe("did:key", () => {
  it("works with dif security context", async () => {
    const { document } = await documentLoader(
      "did:key:z6MkfBth5EfE8HgwtA9YfGgBCqqerTaeSKPPjy5aFHumngqj",
      {
        overwrite_did_context:
          "https://identity.foundation/context/did-latest.jsonld"
      }
    );
    await canSignAndVerify(document, "dif");
  });
});
