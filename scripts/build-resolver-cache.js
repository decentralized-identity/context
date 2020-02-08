const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const getMethodsForTest = require("../tests/__fixtures__/getMethodsForTest");

let focusedMethods = require("../tests/__fixtures__/focusedMethods");
// build cache for all..
focusedMethods = [];
const methodsForTest = getMethodsForTest(focusedMethods);

// Run locally before push to decrease build time.
const buildResolverCache = methodsForTest => {
  Object.keys(methodsForTest).map(method => {
    methodsForTest[method].forEach(did => {
      const exists = fs.existsSync(
        path.resolve(__dirname, `../dids/${did}.json`)
      );
      if (!exists) {
        console.info("downloading: ", did);
        const cmd = `
        curl -s https://uniresolver.io/1.0/identifiers/${did} | jq ".didDocument" > ./dids/${did}.json;
      `;
        shell.config.silent = false;
        shell.exec(cmd);
      } else {
        console.info("skipping: ", did);
      }
    });
  });
};

buildResolverCache(methodsForTest);
