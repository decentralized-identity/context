const focusedMethods = [];
if (process.env.DID_METHOD) {
  focusedMethods.push(process.env.DID_METHOD);
}

module.exports = focusedMethods;
