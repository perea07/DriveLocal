#!/usr/bin/env node

"use strict";

// importing the functionality
const chalk = require("chalk");
const express = require("express");
const enviournment = require("../changeEnviournment/enviourment.package.json");
const router = new express.Router();

// Implementing the custom urls
const routerGetURL = enviournment.routerGET;
const routerPostURL = enviournment.routerPOST;
const routerPutURL = enviournment.routerPUT;
const routerDelete = enviournment.routerDelete;

// defining the router here
router.get("/", (req, res) => {
  console.log(chalk.yellow("  |> Startup page of the application is called"));
  res.status(200).send({
    status: 200,
    response: "Local-Express is successfully up and working",
    supportedHandler: [
      "http://localhost:3000/GET",
      "http://localhost:3000/POST",
      "http://localhost:3000/PUT",
      "http://localhost:3000/DELETE",
    ],
    supportedFunction: {
      _getURL: "Change the get handler in API",
      _postURL: "change the post handler in API",
      _putURL: "Change the put handler in API",
      _deleteURL: "Change the delete handler in API",
      _PORT: "change the port of localhost in API",
    },
    "Running the Project": "npx local-express",
    Author:
      "Created by @Hari to make developer life easy by making a mock server",
  });
});

router.get(`/${routerGetURL}`, (req, res) => {
  console.log(chalk.yellow(`  |> Following router is called ${routerGetURL}`));
  try {
    if (Object.keys(req.body).length == 0) {
      throw new Error("Request body is empty");
    }
    let statuscode = req.body.statusCode || 200;
    let InputData = req.body.InputData;
    let OutputData = req.body.OutputData;
    res.status(statuscode).send({
      ...OutputData,
      OtherInformation: { InputData },
    });
  } catch (e) {
    res.status(200).send({
      Error: "Please Provide the Data in below format",
      format: {
        statusCode: 200,
        InputData: {},
        OutputData: {},
      },
    });
  }
});

router.post(`/${routerPostURL}`, (req, res) => {
  console.log(chalk.yellow(`  |> Following router is called ${routerPostURL}`));
  try {
    if (Object.keys(req.body).length == 0) {
      throw new Error("Request body is empty");
    }
    let statuscode = req.body.statusCode || 200;
    let InputData = req.body.InputData;
    let OutputData = req.body.OutputData;
    res.status(statuscode).send({
      ...OutputData,
      OtherInformation: { InputData },
    });
  } catch (e) {
    res.status(200).send({
      Error: "Please Provide the Data in below format",
      format: {
        statusCode: 200,
        InputData: {},
        OutputData: {},
      },
    });
  }
});

router.put(`/${routerPutURL}`, (req, res) => {
  console.log(chalk.yellow(`  |> Following router is called ${routerPutURL}`));
  try {
    if (Object.keys(req.body).length == 0) {
      throw new Error("Request body is empty");
    }
    let statuscode = req.body.statusCode || 200;
    let InputData = req.body.InputData;
    let OutputData = req.body.OutputData;
    res.status(statuscode).send({
      ...OutputData,
      OtherInformation: { InputData },
    });
  } catch (e) {
    res.status(200).send({
      Error: "Please Provide the Data in below format",
      format: {
        statusCode: 200,
        InputData: {},
        OutputData: {},
      },
    });
  }
});

router.delete(`/${routerDelete}`, (req, res) => {
  console.log(chalk.yellow(`  |> Following router is called ${routerDelete}`));
  try {
    if (Object.keys(req.body).length == 0) {
      throw new Error("Request body is empty");
    }
    let statuscode = req.body.statusCode || 200;
    let InputData = req.body.InputData;
    let OutputData = req.body.OutputData;
    res.status(statuscode).send({
      ...OutputData,
      OtherInformation: { InputData },
    });
  } catch (e) {
    res.status(200).send({
      Error: "Please Provide the Data in below format",
      format: {
        statusCode: 200,
        InputData: {},
        OutputData: {},
      },
    });
  }
});

// exporting the router functionality
module.exports = router;
