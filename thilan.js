const express = require("express");
const mongoose = require("mongoose");

//schema
const testmodel = new mongoose.Schema(
  {
    test1: {
      type: String,
      required: [true, "test name required"],
    },
    test2: {
      type: String,
    },
    test3: {
      type: String,
    },
  },
  { timestamps: true }
);

const testmod = mongoose.model("canteen", testmodel);

module.exports = testmod;
