const fetch = require("node-fetch");
const didKeyDriver = require("did-method-key").driver();

const convertFragmentsToURIs = require("./convertFragmentsToURIs");

const getJson = async url =>
  fetch(url, {
    headers: {
      Accept: "application/ld+json"
    },
    method: "get"
  }).then(data => data.json());

const normalizeDocument = res => {
  const didDoc =
    res.id && res.id.indexOf("did:") === 0 ? res : { ...res.didDocument };
  // hack for BTCR.
  if (res.methodMetadata && res.methodMetadata.continuation) {
    if (res.methodMetadata.continuation.publicKey) {
      didDoc.publicKey = res.methodMetadata.continuation.publicKey;
    }
    if (res.methodMetadata.continuation.assertionMethod) {
      didDoc.assertionMethod = res.methodMetadata.continuation.assertionMethod;
    }

    if (res.methodMetadata.continuation.authentication) {
      didDoc.authentication = res.methodMetadata.continuation.authentication;
    }

    if (res.methodMetadata.continuation.capabilityInvocation) {
      didDoc.capabilityInvocation =
        res.methodMetadata.continuation.capabilityInvocation;
    }

    if (res.methodMetadata.continuation.capabilityDelegation) {
      didDoc.capabilityDelegation =
        res.methodMetadata.continuation.capabilityDelegation;
    }

    if (res.methodMetadata.continuation.keyAgreement) {
      didDoc.keyAgreement = res.methodMetadata.continuation.keyAgreement;
    }
  }

  return didDoc;
};

const resolver = {
  resolve: async (didUri, options) => {
    try {
      const didMethod = didUri
        .split(":")
        .splice(0, 2)
        .join(":");

      let res;
      // this avoids jsonld parsing done the universal resolver,
      // which sometimes breaks things.
      switch (didMethod) {
        case "did:key": {
          res = await didKeyDriver.get({
            did: didUri
          });
          // hack for: https://github.com/digitalbazaar/did-method-key-js/issues/9
          // res["@context"] = "https://www.w3.org/ns/did/v1";
          break;
        }
        case "did:elem":
          res = await getJson(
            "https://element-did.com/api/v1/sidetree/" + didUri
          );
          break;
        default:
          res = await getJson(
            "https://uniresolver.io/1.0/identifiers/" + didUri
          );
      }

      const normalizedDoc = await normalizeDocument(res);
      const deFragmented = convertFragmentsToURIs(normalizedDoc);

      const finalDoc = deFragmented;

      if (options) {
        if (options.overwrite_did_context) {
          finalDoc["@context"] = options.overwrite_did_context;
        }
      }

      return finalDoc;
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.error("Could not resolve: " + didUri);
      throw new Error(e);
    }
  }
};

module.exports = resolver;
