const express = require("express");
const router = express.Router();
const CommentModel = require("../models/comment");
const PostModel = require("../models/post");
const UserModel = require("../models/user");

router.get("/", async (req, res) => {
	const comments = await CommentModel.find({});
	res.status(200).json(comments);
});
router.get("/post/:postId", async (req, res) => {
	// Visi komentarai pagal post'ą
	try {
		const comments = await CommentModel.find({ post: req.params.postId });
		res.status(200).json({ comments });
	} catch (err) {
		// res.redirect("/?error=Postas buvo nerastas");
		res.status(400).json({ message: "Postas buvo nerastas" });
	}
});
router.get("/user/:userId", async (req, res) => {
	// Visi komentarai  pagal userId
	try {
		const comments = await CommentModel.find({ author: req.params.userId });
		res.status(200).json({ comments });
	} catch (err) {
		res.status(400).json({ message: "Vartotojas buvo nerastas" });
	}
});
router.post("/:postId", async (req, res) => {
	// 'Naujo komentaro sukurimas'
	// const content = req.body.content;
	try {
		console.log("Veikiu");
		const { content } = req.body;
		console.log(req.params.postId);
		const post = await PostModel.findOne({ _id: req.params.postId });
		if (!req.session.user?.loggedIn) {
			res.redirect(
				"/?error=Turite būti prisijungę prie sistemos norėdami pakomentuoti"
			);
		}

		// Validacija

		const newComment = new CommentModel({
			content,
			author: req.session.user.id,
			post: req.params.postId,
		});
		await newComment.save();

		//Komentarų skaičiaus inkrementas post'e turint dokumentą iš DB
		post.commentsCount++;
		post.lastComment = Date.now() + 1000 * 60 * 60 * 2; // +2 valandos pagal laiko zoną
		post.lastCommentBy = req.session.user.id;
		post.save();
		//Komentarų skaičiaus inkrementas user'yje neturint dokumento iš DB
		// 1. parametras - filtras
		// 2. parametras laukeliai, kuriuos atnaujiname.
		// $inc objektas - inkremento objektas, kuriame nurodome pridedamas prie laukelių reikšmes
		// .exec() - atnaujinimo užklausos išsiuntimas į DB
		UserModel.findOneAndUpdate(
			{ _id: req.session.user.id },
			{ $inc: { commentsCount: 1 } }
		).exec();

		res.redirect(
			`/post/${req.params.postId}?message=Sėkmingai pridėtas komentaras`
		);
	} catch (err) {
		console.log(err);
		res.redirect("/?error=Įrašas buvo nerastas");
	}
});
router.delete("/:id", async (req, res) => {
	// Komentaro istrynimas
});
router.put("/:id", async (req, res) => {
	// Komentaro atnaujinimas
});

module.exports = router;
