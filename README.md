#### [View GitHub](https://github.com/decentralized-identity/context)

![](https://github.com/decentralized-identity/context/workflows/DIF%20JSON-LD/badge.svg)

![](https://github.com/decentralized-identity/context/workflows/DIF%20JSON%20Schema/badge.svg)

![](https://github.com/decentralized-identity/context/workflows/W3C%20JSON-LD/badge.svg)

![](https://github.com/decentralized-identity/context/workflows/Default%20JSON-LD/badge.svg)

This repo and website are designed to enable the most frictionless experience for developing software that relies on JSON-LD and JSON-Schema.

By default, any undocumented property will be labled as deprecated, do not use.

We are aiming to cover 100% of the vocabulary used by:

- https://www.w3.org/ns/did/v1
- https://www.w3.org/2018/credentials/v1

### Contexts

#### [Security v1 & v2](https://identity.foundation/context/security)

#### [DID v1 & Latest](https://identity.foundation/context/did-latest)

This context defines all vocabularly used with decentralized identifiers. This includes terms used by verifiable credentials.

### Testing Interoperability

You can test interoperability for a single did method like this:

```
DID_METHOD='key' npm run test
```
