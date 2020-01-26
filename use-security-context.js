const fs = require("fs");
const path = require("path");

const loadContext = relativePath => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, relativePath)).toString()
  );
};

let securityConstants = require("security-context");

const DEFAULT_SECURITY_CONTEXT_V1_URL = "https://w3id.org/security/v1";
const DEFAULT_SECURITY_CONTEXT_V1_DOCUMENT = {
  ...securityConstants.contexts.get(DEFAULT_SECURITY_CONTEXT_V1_URL)
};
const DEFAULT_SECURITY_CONTEXT_V2_URL = "https://w3id.org/security/v2";
const DEFAULT_SECURITY_CONTEXT_V2_DOCUMENT = {
  ...securityConstants.contexts.get(DEFAULT_SECURITY_CONTEXT_V2_URL)
};

const DIF_SECURITY_CONTEXT_V1_URL =
  "https://identity.foundation/context/security-v1.jsonld";
const DIF_SECURITY_CONTEXT_V1_DOCUMENT = loadContext("./security-v1.jsonld");

const DIF_SECURITY_CONTEXT_V2_URL =
  "https://identity.foundation/context/security-v2.jsonld";
const DIF_SECURITY_CONTEXT_V2_DOCUMENT = loadContext("./security-v2.jsonld");

module.exports = contextName => {
  if (contextName === "dif") {
    securityConstants.constants = {
      SECURITY_CONTEXT_V1_URL: DIF_SECURITY_CONTEXT_V1_URL,
      SECURITY_CONTEXT_V2_URL: DIF_SECURITY_CONTEXT_V2_URL
    };
    securityConstants.contexts.set(
      DIF_SECURITY_CONTEXT_V1_URL,
      DIF_SECURITY_CONTEXT_V1_DOCUMENT
    );
    securityConstants.contexts.set(
      DIF_SECURITY_CONTEXT_V2_URL,
      DIF_SECURITY_CONTEXT_V2_DOCUMENT
    );
  } else {
    securityConstants.constants = {
      SECURITY_CONTEXT_V1_URL: DEFAULT_SECURITY_CONTEXT_V1_URL,
      SECURITY_CONTEXT_V2_URL: DEFAULT_SECURITY_CONTEXT_V2_URL
    };
    securityConstants.contexts.set(
      DEFAULT_SECURITY_CONTEXT_V1_URL,
      DEFAULT_SECURITY_CONTEXT_V1_DOCUMENT
    );
    securityConstants.contexts.set(
      DEFAULT_SECURITY_CONTEXT_V2_URL,
      DEFAULT_SECURITY_CONTEXT_V2_DOCUMENT
    );
  }
};
