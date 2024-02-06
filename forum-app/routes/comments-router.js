const express = require("express");
const router = express.Router();
const CommentModel = require("../models/comment");

router.get("/", async (req, res) => {
	const comment = await CommentModel.find({});
	res.status(200).json(comment);
});
router.get("/post/:postId", async (req, res) => {
	// Visi komentarai pagal post'ą
});
router.get("/user/:userId", async (req, res) => {
	// Visi komentarai  pagal userId
});
router.post("/", async (req, res) => {
	// 'Naujo komentaro sukurimas'
});
router.delete("/:id", async (req, res) => {
	// Komentaro istrynimas
});
router.put("/:id", async (req, res) => {
	// Komentaro atnaujinimas
});

module.exports = router;
