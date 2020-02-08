/* eslint-disable no-underscore-dangle */
const { Validator } = require("jsonschema");
const didDoc = require("./didDoc.json");
const publicKey = require("./key.json");
const service = require("./service.json");
const proof = require("./proof.json");

const schemas = {
  didDoc,
  publicKey,
  service,
  proof
};

class SchemaValidator {
  /**
   * Instantiates a SchemaValidator instance
   */
  constructor() {
    this._validator = new Validator();
    Object.keys(schemas).forEach(sk => {
      // eslint-disable-next-line
      const s = schemas[sk];
      if (!s) {
        throw new Error(`No schema found for ${sk}`);
      }
      this._validator.addSchema(s, s.$id);
    });
  }

  /**
   * Add a schema to the validator. All schemas and sub-schemas must be added to
   * the validator before the `validate` and `isValid` methods can be called with
   * instances of that schema.
   * @param s The schema to add
   */
  addSchema(s) {
    this._validator.addSchema(s, s.$id);
  }

  /**
   * Validate the JS object conforms to a specific JSON schema
   * @param instance JS object in question
   * @param s Schema to check against
   * @returns The results of the validation
   */
  validate(instance, s, options) {
    const jsonSchemaCompatibleObject = JSON.parse(JSON.stringify(instance));
    return this._validator.validate(jsonSchemaCompatibleObject, s, options);
  }

  /**
   * Check whether an instance properly adheres to a JSON schema
   * @param instance JS object in question
   * @param s Schema to check against
   * @returns Whether or not the instance adheres to the schema
   */
  isValid(instance, s) {
    const result = this.validate(instance, s);
    return result.errors.length === 0;
  }
}

module.exports = {
  validator: new SchemaValidator(),
  schemas
};
