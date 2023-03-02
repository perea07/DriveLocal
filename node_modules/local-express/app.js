#!/usr/bin/env node

"use strict";

const app = require("./src/app");
const envChange = require("./src/changeEnviournment/env");

// for making change to work with local
module.exports = {
  ...app,
  ...envChange,
};
