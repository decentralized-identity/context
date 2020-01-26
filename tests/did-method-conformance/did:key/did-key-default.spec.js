const documentLoader = require("../../__fixtures__/documentLoader");
const canSignAndVerify = require("../../__fixtures__/canSignAndVerify");

jest.setTimeout(10 * 1000);

describe("did:key", () => {
  it("works with default security context", async () => {
    const { document } = await documentLoader(
      "did:key:z6MkfBth5EfE8HgwtA9YfGgBCqqerTaeSKPPjy5aFHumngqj"
    );
    await canSignAndVerify(document, "default");
  });
});
