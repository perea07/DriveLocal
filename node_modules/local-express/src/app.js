#!/usr/bin/env node

"use strict";

const chalk = require("chalk");
const express = require("express");
const enviourment = require("./changeEnviournment/enviourment.package.json");

// making global variable
const app = express();
const PORT = process.env.PORT || enviourment.PORT;
const expressRouter = require("./router/expressRouter");

// Making use of inbuild application
app.use(express.json());
app.use(expressRouter);

// starting the server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(
      chalk.magenta(`************************************************`)
    );
    console.log(chalk.yellow(`  |>  Server is up and running at ${PORT}`));
  });
};
module.exports = {
  startServer,
};
