const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const usermodel = require("../models/usermodel");
const canteenmodel = require("../models/canteenmodel");
const adminmiddleware = require("../middlewears/adminmiddleware");
const appliedmiddleware = require("../middlewears/appliedadminmiddleware");
const bsadminmiddleware = require("../middlewears/bsadminmiddleware");
const boyshostelmiddleware = require("../middlewears/boysadminmiddleware");
const ordermodel = require("../models/ordermodel");
const paymentmodel = require("../models/paymentmodel");

router.get("/studentdetails", adminmiddleware, async (req, res) => {
  try {
    const details = await usermodel.aggregate([
      { $match: { usertype: "student" } },
    ]);
    if (!details) {
      return res
        .status(404)
        .send({ success: false, message: "Error in fine details" });
    }
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ success: false, message: "Error in find details" });
  }
});
