#!/usr/bin/env node

"use strict";

const app = require("./src/app");
const envChange = require("./src/changeEnviournment/env");

// for working with npx
const open = require("open");
const env = require("./src/changeEnviournment/enviourment.package.json");
open(`http://localhost:${env.PORT}`, { app: "chrome" });
app.startServer();
