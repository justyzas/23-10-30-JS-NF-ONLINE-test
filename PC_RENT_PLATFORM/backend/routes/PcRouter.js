const express = require("express");
const router = express.Router();
const PcModel = require("../model/PcModel");

router.post("/", async (req, res) => {
  try {
    const { cpu, gpu, pcType, ramAmount, ramSpeed, ramType } = req.body;

    const newPc = new PcModel({
      ownerId: req.session.user.id,
      cpu,
      gpu,
      ramType,
      ramSpeed,
      ramAmount,
      pcType,
    });
    await newPc.save();

    res.status(201).json({
      message: "PC saveed to the database sucessfully",
      newPc: newPc.getInstance(),
      status: true,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", status: false });
  }
});

router.get("/", async (req, res) => {
  const allPcs = await PcModel.findAll();
  res.status(200).json(allPcs.map((pcObj) => pcObj.getInstance()));
});
module.exports = router;
