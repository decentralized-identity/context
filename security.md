## Security v1 & v2

#### [View on Github](https://github.com/decentralized-identity/context)

### Terminology

<h4 id="EcdsaKoblitzSignature2016"><a href="#EcdsaKoblitzSignature2016">EcdsaKoblitzSignature2016</a></h4>

Deprecated signature suite, do not use.

<h4 id="Ed25519Signature2018"><a href="#Ed25519Signature2018">Ed25519Signature2018</a></h4>

Linked data signature suite for ed25519, useful to working with lib sodium / nacl. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#Ed25519Signature2018).

<h4 id="EncryptedMessage"><a href="#EncryptedMessage">EncryptedMessage</a></h4>

Deprecated, do not use. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#EncryptedMessage).

<h4 id="GraphSignature2012"><a href="#GraphSignature2012">GraphSignature2012</a></h4>

Deprecated, do not use. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#GraphSignature2012).

<h4 id="LinkedDataSignature2015"><a href="#LinkedDataSignature2015">LinkedDataSignature2015</a></h4>

Deprecated, do not use. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#LinkedDataSignature2015).

<h4 id="LinkedDataSignature2016"><a href="#LinkedDataSignature2016">LinkedDataSignature2016</a></h4>

Deprecated, do not use. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#LinkedDataSignature2016).

<h4 id="CryptographicKey"><a href="#CryptographicKey">CryptographicKey</a></h4>

Deprecated, do not use.

<h4 id="authenticationTag"><a href="#authenticationTag">authenticationTag</a></h4>

Deprecated, do not use. See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#EncryptedMessage).

<h4 id="canonicalizationAlgorithm"><a href="#canonicalizationAlgorithm">canonicalizationAlgorithm</a></h4>

The canonicalization algorithm is used to transform the input data into a form that can be passed to a cryptographic digest method. The digest is then digitally signed using a digital signature algorithm. Canonicalization ensures that a piece of software that is generating a digital signature is able to do so on the same set of information in a deterministic manner.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#canonicalizationAlgorithm)

<h4 id="cipherAlgorithm"><a href="#cipherAlgorithm">cipherAlgorithm</a></h4>

The cipher algorithm describes the mechanism used to encrypt a message. It is typically a string expressing the cipher suite, the strength of the cipher, and a block cipher mode.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#cipherAlgorithm)

<h4 id="cipherData"><a href="#cipherData">cipherData</a></h4>

Cipher data is an opaque blob of information that is used to specify an encrypted message.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#cipherData)

<h4 id="cipherKey"><a href="#cipherKey">cipherKey</a></h4>

A cipher key is a symmetric key that is used to encrypt or decrypt a piece of information. The key itself may be expressed in clear text or encrypted.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#cipherKey)

<h4 id="digestAlgorithm"><a href="#digestAlgorithm">digestAlgorithm</a></h4>

The digest algorithm is used to specify the cryptographic function to use when generating the data to be digitally signed. Typically, data that is to be signed goes through three steps: 1) canonicalization, 2) digest, and 3) signature. This property is used to specify the algorithm that should be used for step #2. A signature class typically specifies a default digest method, so this property is typically used to specify information for a signature algorithm.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#digestAlgorithm)

<h4 id="domain"><a href="#domain">domain</a></h4>

Deprecated, do not use.

<h4 id="encryptionKey"><a href="#encryptionKey">encryptionKey</a></h4>

Deprecated, do not use.

<h4 id="expiration"><a href="#expiration">expiration</a></h4>

See [vc-data-model](https://www.w3.org/TR/vc-data-model/#expiration).

<h4 id="expires"><a href="#expires">expires</a></h4>

The expiration time is typically associated with a Key and specifies when the validity of the key will expire. It is considered a best practice to only create keys that have very definite expiration periods. This period is typically set to between six months and two years. An digital signature created using an expired key MUST be marked as invalid by any software attempting to verify the signature.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#expires)

<h4 id="initializationVector"><a href="#initializationVector">initializationVector</a></h4>

The initialization vector (IV) is a byte stream that is typically used to initialize certain block cipher encryption schemes. For a receiving application to be able to decrypt a message, it must know the decryption key and the initialization vector. The value is typically base-64 encoded.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#initializationVector)

<h4 id="iterationCount"><a href="#iterationCount">iterationCount</a></h4>

Deprecated, do not use.

<h4 id="nonce"><a href="#nonce">nonce</a></h4>

This property is used in conjunction with the input to the signature hashing function in order to protect against replay attacks. Typically, receivers need to track all nonce values used within a certain time period in order to ensure that an attacker cannot merely re-send a compromised packet in order to execute a privileged request.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#nonce)

<h4 id="normalizationAlgorithm"><a href="#normalizationAlgorithm">normalizationAlgorithm</a></h4>

Deprecated, do not use.

Also known as canonicalizationAlgorithm.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#canonicalizationAlgorithm)

<h4 id="password"><a href="#password">password</a></h4>

A secret that is used to generate a key that can be used to encrypt or decrypt message. It is typically a string value.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#password)

<h4 id="privateKey"><a href="#privateKey">privateKey</a></h4>

Deprecated, do not use.

<h4 id="privateKeyPem"><a href="#privateKeyPem">privateKeyPem</a></h4>

A private key PEM property is used to specify the PEM-encoded version of the private key. This encoding is compatible with almost every Secure Sockets Layer library implementation and typically plugs directly into functions intializing private keys.

You should use privateKeyJwk when possible.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#privateKeyPem).

<h4 id="publicKey"><a href="#publicKey">publicKey</a></h4>

A public key property is used to specify a URL that contains information about a public key.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#publicKey).

<h4 id="publicKeyBase58"><a href="#publicKeyBase58">publicKeyBase58</a></h4>

You should use publicKeyJwk if possible, because JWK is a valid key format for supported key types.

See [did-core](https://w3c.github.io/did-core/#dfn-publickey).

See [did-core publicKeyBase58 example](https://w3c.github.io/did-core/#example-12-various-public-keys)

<h4 id="publicKeyPem"><a href="#publicKeyPem">publicKeyPem</a></h4>

A public key PEM property is used to specify the PEM-encoded version of the public key. This encoding is compatible with almost every Secure Sockets Layer library implementation and typically plugs directly into functions intializing public keys.

You should use publicKeyJwk when possible.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#publicKeyPem).

<h4 id="publicKeyWif"><a href="#publicKeyWif">publicKeyWif</a></h4>

Deprecated, do not use.

See [lds-koblitz2016](https://w3c-dvcg.github.io/lds-koblitz2016/).

<h4 id="publicKeyService"><a href="#publicKeyService">publicKeyService</a></h4>

The publicKeyService property is used to express the REST URL that provides public key management services.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#publicKeyService).

<h4 id="revoked"><a href="#revoked">revoked</a></h4>

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#revoked).

<h4 id="salt"><a href="#salt">salt</a></h4>

Deprecated, do not use.

<h4 id="signature"><a href="#signature">signature</a></h4>

Deprecated, do not use.

The signature property is used to associate a signature with a graph of information. The signature property is typically not included in the canonicalized graph that is then digested, and digitally signed.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#signature).

<h4 id="signatureAlgorithm"><a href="#signatureAlgorithm">signatureAlgorithm</a></h4>

Deprecated, do not use.

<h4 id="signatureValue"><a href="#signatureValue">signatureValue</a></h4>

The signature algorithm is used to specify the cryptographic signature function to use when digitally signing the digest data. Typically, text to be signed goes through three steps: 1) canonicalization, 2) digest, and 3) signature. This property is used to specify the algorithm that should be used for step #3. A signature class typically specifies a default signature algorithm, so this property rarely needs to be used in practice when specifying digital signatures.

See [w3c-ccg](https://w3c-ccg.github.io/security-vocab/#signatureAlgorithm).

<h4 id="AesKeyWrappingKey2019"><a href="#AesKeyWrappingKey2019">AesKeyWrappingKey2019</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="DeleteKeyOperation"><a href="#DeleteKeyOperation">DeleteKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="DeriveSecretOperation"><a href="#DeriveSecretOperation">DeriveSecretOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="EquihashProof2018"><a href="#EquihashProof2018">EquihashProof2018</a></h4>

See [equihash-signature](https://github.com/digitalbazaar/equihash-signature)

<h4 id="ExportKeyOperation"><a href="#ExportKeyOperation">ExportKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="GenerateKeyOperation"><a href="#GenerateKeyOperation">GenerateKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="KmsOperation"><a href="#KmsOperation">KmsOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="RevokeKeyOperation"><a href="#RevokeKeyOperation">RevokeKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="RsaSignature2018"><a href="#RsaSignature2018">RsaSignature2018</a></h4>

See [lds-rsa2018](https://github.com/w3c-dvcg/lds-rsa2018)

<h4 id="RsaVerificationKey2018"><a href="#RsaVerificationKey2018">RsaVerificationKey2018</a></h4>

See [lds-rsa2018](https://github.com/w3c-dvcg/lds-rsa2018)

<h4 id="Sha256HmacKey2019"><a href="#Sha256HmacKey2019">Sha256HmacKey2019</a></h4>

See [encrypted-data-vaults](https://digitalbazaar.github.io/encrypted-data-vaults/#datavaultconfiguration).

See [edv-client](https://github.com/digitalbazaar/edv-client/blob/master/tests/MockHmac.js#L22)

<h4 id="SignOperation"><a href="#SignOperation">SignOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="UnwrapKeyOperation"><a href="#UnwrapKeyOperation">UnwrapKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="VerifyOperation"><a href="#VerifyOperation">VerifyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="WrapKeyOperation"><a href="#WrapKeyOperation">WrapKeyOperation</a></h4>

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

<h4 id="X25519KeyAgreementKey2019"><a href="#X25519KeyAgreementKey2019">X25519KeyAgreementKey2019</a></h4>

Deprecated, do not use.

See [encrypted-data-vaults](https://digitalbazaar.github.io/encrypted-data-vaults/#datavaultconfiguration).

<h4 id="allowedAction"><a href="#allowedAction">allowedAction</a></h4>

Deprecated, do not use.

<h4 id="assertionMethod"><a href="#assertionMethod">assertionMethod</a></h4>

Used to construct linked data proofs of type "assertionMethod" and Verifiable Credentials.

See [vc-data-model](https://www.w3.org/TR/vc-data-model/#proofs-signatures-0)

<h4 id="authentication"><a href="#authentication">authentication</a></h4>

Used with DIDs to support authentication.

See [did-core](https://w3c.github.io/did-core/#authentication)

<h4 id="capability"><a href="#capability">capability</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#capability).

<h4 id="capabilityAction"><a href="#capabilityAction">capabilityAction</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#capabilityAction).

Used in Veres One: https://w3c-ccg.github.io/did-method-v1/

<h4 id="capabilityChain"><a href="#capabilityChain">capabilityChain</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#capabilityChain).

Used in Veres One: https://w3c-ccg.github.io/did-method-v1/

<h4 id="capabilityDelegation"><a href="#capabilityDelegation">capabilityDelegation</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#capabilityDelegation).

Used in Veres One: https://w3c-ccg.github.io/did-method-v1/

<h4 id="capabilityInvocation"><a href="#capabilityInvocation">capabilityInvocation</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#invocation).

Used in Veres One: https://w3c-ccg.github.io/did-method-v1/

<h4 id="caveat"><a href="#caveat">caveat</a></h4>

Used with object capabilities, see [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#caveats)

<h4 id="challenge"><a href="#challenge">challenge</a></h4>

Used to prove control of a did. See [did-core](https://w3c.github.io/did-core/#proving-control-of-a-public-key).

<h4 id="ciphertext"><a href="#ciphertext">ciphertext</a></h4>

Data that is encrypted. The result of performing an encryption operation on plaintext.

See [wikipedia](https://en.wikipedia.org/wiki/Ciphertext).

<h4 id="controller"><a href="#controller">controller</a></h4>

A URI describing a document used to control an Identitifier.

See [did-core](https://w3c.github.io/did-core/#controller).

See [vc-data-model](https://www.w3.org/TR/vc-data-model/#proofs-signatures-0).

See [webkms](https://digitalbazaar.github.io/webkms/#ecosystem-overview)

See [encrypted-data-vaults](https://digitalbazaar.github.io/encrypted-data-vaults/#datavaultconfiguration)

<h4 id="delegator"><a href="#delegator">delegator</a></h4>

Deprecated, do not use.

<h4 id="equihashParameterK"><a href="#equihashParameterK">equihashParameterK</a></h4>

See [equihash-signature](https://github.com/digitalbazaar/equihash-signature)

<h4 id="equihashParameterN"><a href="#equihashParameterN">equihashParameterN</a></h4>

See [equihash-signature](https://github.com/digitalbazaar/equihash-signature)

<h4 id="invocationTarget"><a href="#invocationTarget">invocationTarget</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#invocation).

<h4 id="invoker"><a href="#invoker">invoker</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#invocation).

<h4 id="jws"><a href="#jws">jws</a></h4>

A JSON Web Signature.

See [rfc7515](https://tools.ietf.org/html/rfc7515).

<h4 id="keyAgreement"><a href="#keyAgreement">keyAgreement</a></h4>

Used with encrypted data vaults.

See [did-key](https://did-key.web.app/)

See [encrypted-data-vaults](https://digitalbazaar.github.io/encrypted-data-vaults/#datavaultconfiguration).

<h4 id="kmsModule"><a href="#kmsModule">kmsModule</a></h4>

Deprecated, do not use.

See [webkms](https://digitalbazaar.github.io/webkms/#use-cases-and-requirements).

<h4 id="parentCapability"><a href="#parentCapability">parentCapability</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#parentCapability).

<h4 id="plaintext"><a href="#plaintext">plaintext</a></h4>

Data that is not encrypted. Either the input to an encryption or the output from a decryption.

See [wikipedia](https://en.wikipedia.org/wiki/Plaintext).

<h4 id="proof"><a href="#proof">proof</a></h4>

See [ld-proofs](https://w3c-dvcg.github.io/ld-proofs/).

<h4 id="proofPurpose"><a href="#proofPurpose">proofPurpose</a></h4>

See [ld-proofs](https://w3c-dvcg.github.io/ld-proofs/#linked-data-proof-overview)

<h4 id="proofValue"><a href="#proofValue">proofValue</a></h4>

Deprecated, do not use.

<h4 id="referenceId"><a href="#referenceId">referenceId</a></h4>

Used to express an application-specific reference identifier. The value is optional and, if present MUST be a string.

See [encrypted-data-vaults](https://digitalbazaar.github.io/encrypted-data-vaults/#datavaultconfiguration)

<h4 id="unwrappedKey"><a href="#unwrappedKey">unwrappedKey</a></h4>

Deprecated, do not use.

See [webkms](https://digitalbazaar.github.io/webkms/)

<h4 id="verifyData"><a href="#verifyData">verifyData</a></h4>

The input to a linked data signature signer method. This is the result of cannonicalization and hashing according to the linked data proof algorithm.

See [ld-signatures](https://w3c-dvcg.github.io/ld-signatures/#create-verify-hash-algorithm).

<h4 id="wrappedKey"><a href="#wrappedKey">wrappedKey</a></h4>

Deprecated, do not use.

See [webkms](https://digitalbazaar.github.io/webkms/#use-cases-and-requirements)

<h4 id="EcdsaSecp256k1Signature2019"><a href="#EcdsaSecp256k1Signature2019">EcdsaSecp256k1Signature2019</a></h4>

See [lds-ecdsa-secp256k1-2019](https://w3c-dvcg.github.io/lds-ecdsa-secp256k1-2019/).

See [lds-ecdsa-secp256k1-2019](https://github.com/decentralized-identity/lds-ecdsa-secp256k1-2019.js).

<h4 id="EcdsaSecp256k1VerificationKey2019"><a href="#EcdsaSecp256k1VerificationKey2019">EcdsaSecp256k1VerificationKey2019</a></h4>

See [lds-ecdsa-secp256k1-2019](https://w3c-dvcg.github.io/lds-ecdsa-secp256k1-2019/).

See [lds-ecdsa-secp256k1-2019](https://github.com/decentralized-identity/lds-ecdsa-secp256k1-2019.js).

<h4 id="Ed25519VerificationKey2018"><a href="#Ed25519VerificationKey2018">Ed25519VerificationKey2018</a></h4>

See [lds-ed25519-2018](https://w3c-ccg.github.io/lds-ed25519-2018/)

<h4 id="RsaSignature2018"><a href="#RsaSignature2018">RsaSignature2018</a></h4>

See [lds-rsa2018](https://w3c-dvcg.github.io/lds-rsa2018/)

<h4 id="RsaVerificationKey2018"><a href="#RsaVerificationKey2018">RsaVerificationKey2018</a></h4>

See [lds-rsa2018](https://w3c-dvcg.github.io/lds-rsa2018/)

<h4 id="SchnorrSecp256k1Signature2019"><a href="#SchnorrSecp256k1Signature2019">SchnorrSecp256k1Signature2019</a></h4>

Deprecated, do not use.

<h4 id="SchnorrSecp256k1VerificationKey2019"><a href="#SchnorrSecp256k1VerificationKey2019">SchnorrSecp256k1VerificationKey2019</a></h4>

Deprecated, do not use.

<h4 id="ServiceEndpointProxyService"><a href="#ServiceEndpointProxyService">ServiceEndpointProxyService</a></h4>

Deprecated, do not use.

<h4 id="capabilityStatusList"><a href="#capabilityStatusList">capabilityStatusList</a></h4>

Deprecated, do not use.

<h4 id="created"><a href="#created">created</a></h4>

See [ld-proofs](https://w3c-dvcg.github.io/ld-proofs/#dfn-created)

<h4 id="creator"><a href="#creator">creator</a></h4>

Deprecated, do not use.

See [ld-proofs](https://w3c-dvcg.github.io/ld-proofs/#dfn-verificationmethod)

<h4 id="expirationDate"><a href="#expirationDate">expirationDate</a></h4>

See [expirationDate](https://www.w3.org/TR/vc-data-model/#expiration)

<h4 id="invocationTarget"><a href="#invocationTarget">invocationTarget</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#invocation)

<h4 id="invoker"><a href="#invoker">invoker</a></h4>

See [zcap-ld](https://w3c-ccg.github.io/zcap-ld/#capabilities)

<h4 id="owner"><a href="#owner">owner</a></h4>

Deprecated, do not use.

See [web-payments.org](https://web-payments.org/vocabs/security#owner).

<h4 id="service"><a href="#service">service</a></h4>

See [did-core](https://w3c.github.io/did-core/#service-endpoints)

<h4 id="serviceEndpoint"><a href="#serviceEndpoint">serviceEndpoint</a></h4>

See [did-core](https://w3c.github.io/did-core/#service-endpoints)

<h4 id="verificationMethod"><a href="#verificationMethod">verificationMethod</a></h4>

See [ld-proofs](https://w3c-dvcg.github.io/ld-proofs/#dfn-verificationmethod)
