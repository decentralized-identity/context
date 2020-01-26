const documentLoader = require("../../__fixtures__/documentLoader");
const canSignAndVerify = require("../../__fixtures__/canSignAndVerify");

jest.setTimeout(10 * 1000);

describe("did:elem", () => {
  it("works with only https://www.w3.org/ns/did/v1", async () => {
    const { document } = await documentLoader(
      "did:key:z6MkfBth5EfE8HgwtA9YfGgBCqqerTaeSKPPjy5aFHumngqj",
      {
        overwrite_did_context: "https://www.w3.org/ns/did/v1"
      }
    );
    expect(document["@context"]).toEqual("https://www.w3.org/ns/did/v1");
    await canSignAndVerify(document, "default");
  });
});
