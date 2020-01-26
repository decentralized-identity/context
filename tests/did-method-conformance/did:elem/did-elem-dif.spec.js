const documentLoader = require("../../__fixtures__/documentLoader");
const canSignAndVerify = require("../../__fixtures__/canSignAndVerify");

jest.setTimeout(10 * 1000);

describe("did:elem", () => {
  // only when I hack node_modules...
  // see https://github.com/digitalbazaar/jsonld-signatures/issues/86
  it("works with only https://identity.foundation/context/did-latest.jsonld", async () => {
    const { document } = await documentLoader(
      "did:elem:EiChaglAoJaBq7bGWp6bA5PAQKaOTzVHVXIlJqyQbljfmg",
      {
        overwrite_did_context:
          "https://identity.foundation/context/did-latest.jsonld"
      }
    );
    expect(document["@context"]).toEqual(
      "https://identity.foundation/context/did-latest.jsonld"
    );
    await canSignAndVerify(document, "dif");
  });
});
