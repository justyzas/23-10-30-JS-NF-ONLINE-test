const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Veikia pc routeris");
});
router.get("/kazkoks", (req, res) => {
	res.send("Veikia kazkoks pc routeris");
});

module.exports = router;
