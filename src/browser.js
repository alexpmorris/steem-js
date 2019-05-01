const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");
const memo = require("./auth/memo");
const ecc = require("./auth/ecc");

const steem = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils,
  memo,
  ecc,
  buffer: Buffer
};

if (typeof window !== "undefined") {
  window.steem = steem;
}

if (typeof global !== "undefined") {
  global.steem = steem;
}

exports = module.exports = steem;
