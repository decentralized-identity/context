### Security Contexts and Documentation for Linked Data

This repo allows DIF members to easily correct documentation associated with DIDs and VCs.

### Terminology

<h4 id="usage"><a href="#usage">usage</a></h4>

The use for which a public key is listed according to the sidetree protocol.

<h4 id="publicKeyJwk"><a href="#publicKeyJwk">publicKeyJwk</a></h4>

A secp256k1 public key in JWK format. A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. Read [RFC7517](https://tools.ietf.org/html/rfc7517).

#### Example:

```json
{
  "@context": "https://identity.foundation/context/did-latest.jsonld",
  "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
  "type": "EcdsaSecp256k1VerificationKey2019",
  "publicKeyJwk": {
    "crv": "secp256k1",
    "kid": "JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "kty": "EC",
    "x": "dWCvM4fTdeM0KmloF57zxtBPXTOythHPMm1HCLrdd3A",
    "y": "36uMVGM7hnw-N6GnjFcihWE3SkrhMLzzLCdPMXPEXlA"
  }
}
```

<h4 id="publicKeyHex"><a href="#publicKeyHex">publicKeyHex</a></h4>

A hex encoded secp256k1 compressed public key.

#### Example:

```json
{
  "@context": "https://identity.foundation/context/did-latest.jsonld",
  "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
  "type": "EcdsaSecp256k1VerificationKey2019",
  "publicKeyHex": "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
}
```

<h4 id="EcdsaSecp256k1VerificationKey2019"><a href="#EcdsaSecp256k1VerificationKey2019">EcdsaSecp256k1VerificationKey2019</a></h4>

A secp256k1 public key. If the key is embedded in a controller with property name publicKeyJwk (preffered), the key must be a valid JWK. If the key is embeded as publicKeyHex, it must be a compressed public key, and must be converted to JWK before being used to verify signatures according to JWS.

#### Example:

```json
[
  {
    "@context": "https://identity.foundation/context/did-latest.jsonld",
    "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "type": "EcdsaSecp256k1VerificationKey2019",
    "publicKeyJwk": {
      "crv": "secp256k1",
      "kid": "JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
      "kty": "EC",
      "x": "dWCvM4fTdeM0KmloF57zxtBPXTOythHPMm1HCLrdd3A",
      "y": "36uMVGM7hnw-N6GnjFcihWE3SkrhMLzzLCdPMXPEXlA"
    }
  },
  {
    "@context": "https://identity.foundation/context/did-latest.jsonld",
    "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "type": "EcdsaSecp256k1VerificationKey2019",
    "publicKeyHex": "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
  }
]
```

<h4 id="EcdsaSecp256k1Signature2019"><a href="#EcdsaSecp256k1Signature2019">EcdsaSecp256k1Signature2019</a></h4>

A JSON-LD Document has been signed with EcdsaSecp256k1Signature2019,
when it contains a proof field with type `EcdsaSecp256k1Signature2019`. The proof must contain a key `jws` with value defined by the signing algorithm described here.

#### Example:

```json
{
  "@context": "https://w3id.org/security/v2",
  "http://schema.org/action": "AuthenticateMe",
  "proof": {
    "challenge": "abc",
    "created": "2019-01-16T20:13:10Z",
    "domain": "example.com",
    "proofPurpose": "authentication",
    "verificationMethod": "https://example.com/i/alice/keys/2",
    "type": "EcdsaSecp256k1Signature2019",
    "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..QgbRWT8w1LJet_KFofNfz_TVs27z4pwdPwUHhXYUaFlKicBQp6U1H5Kx-mST6uFvIyOqrYTJifDijZbtAfi0MA"
  }
}
```

<h4 id="OpenPgpVerificationKey2019"><a href="#OpenPgpVerificationKey2019">OpenPgpVerificationKey2019</a></h4>

The name of the public key type used by OpenPgpSignature2019. This value will be present in a controller.

#### Example:

```json
{
  "type": "OpenPgpVerificationKey2019",
  "id": "did:btcr:xxcl-lzpq-q83a-0d5#yubikey",
  "controller": "did:btcr:xxcl-lzpq-q83a-0d5",
  "publicKeyPgp": "\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: GPGTools - https://gpgtools.org\n\nmQENBF1N1CwBCADaCb/PSbxcxNf8baK6J2h1sKIAOX+Yoq4yOx+bCvrzYXV5/Noz\nVCTaVvZUNQa745K6VSW/tQl9FtJ7zFi7D/5w8ZBAzdBeYkNWhWSZ6vTgUplAxtUp\nOnzijDIvEXDYk8Ab...\n-----END PGP PUBLIC KEY BLOCK-----"
}
```

<h4 id="OpenPgpSignature2019"><a href="#OpenPgpSignature2019">OpenPgpSignature2019</a></h4>

A JSON-LD Document has been signed with OpenPgpSignature2019,
when it contains a proof field with type `OpenPgpSignature2019`.

#### Example:

```json
{
  "@context": "https://w3id.org/security/v2",
  "http://schema.org/action": "AuthenticateMe",
  "proof": {
    "type": "OpenPgpSignature2019",
    "verificationMethod": "did:btcr:xxcl-lzpq-q83a-0d5#yubikey",
    "proofPurpose": "assertionMethod",
    "created": "2019-08-11T03:54:13.310Z",
    "signatureValue": "-----BEGIN PGP SIGNATURE-----\nComment: GPGTools - https://gpgtools.org\n\niQEzBAABCgAdFiEE8b0S9xIG+...\n-----END PGP SIGNATURE-----\n"
  }
}
```
