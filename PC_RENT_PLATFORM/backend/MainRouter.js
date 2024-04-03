const express = require("express");
const router = express.Router();
const userRouter = require("./routes/UserRouter");
// const pcRouter = require("./routes/PcRouter");
const countryRouter = require("./routes/CountryRouter");

router.use("/user", userRouter);
// router.use("/pc", pcRouter);
router.use("/country", countryRouter);

router.use("/uploads", express.static("uploads"));
module.exports = router;
