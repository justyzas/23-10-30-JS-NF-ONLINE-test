const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Veikia country routas");
});

module.exports = router;
