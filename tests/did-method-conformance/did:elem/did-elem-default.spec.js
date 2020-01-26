const documentLoader = require("../../__fixtures__/documentLoader");
const canSignAndVerify = require("../../__fixtures__/canSignAndVerify");

jest.setTimeout(10 * 1000);

describe("did:elem", () => {
  it("works with default security context", async () => {
    const { document } = await documentLoader(
      "did:elem:EiCcfb9tKepw7aCRlAp7mTHebJ4VNbTkMnVx78tyLNPY-A"
    );
    expect(document["@context"]).toEqual([
      "https://www.w3.org/ns/did/v1",
      "https://docs.element-did.com/contexts/sidetree/sidetree-v0.1.jsonld"
    ]);
    await canSignAndVerify(document, "default");
  });
});
