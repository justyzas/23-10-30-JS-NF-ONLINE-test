const express = require("express");
const router = express.Router();
const PostModel = require("../models/post");

router.get("/", async (req, res) => {
	//Visu irasu gavimas
	const allPosts = await PostModel.find({});
	res.status(200).json(allPosts);
});

router.get("/:id", async (req, res) => {
	//Vieno konkretaus įrašo gavimas
	const post = await PostModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
	if (!post) {
		return res.status(404).json({ message: "įrašas buvo nerastas" });
	}
	res.status(200).json(post);
});

router.delete("/:id", async (req, res) => {
	const post = await PostModel.findOne({ _id: req.params.id }); //Jei neatrandamas, reiksme tampa undefined
	if (!post) {
		return res.status(404).json({ message: "įrašas buvo nerastas" });
	}

	//Jei autorius yra prisijunges vartotojas arba prisijunges vartotojas yra admin, tada leidžiame ištrinti įrašą
	if (post.author === req.session.user.id || req.session.user.admin) {
		await PostModel.findOneAndDelete({ _id: req.params.id });
		return res.status(200).json({ message: "Įrašas sėkmingai buvo ištrintas" });
	}
	return res
		.status(403)
		.json({ message: "Jūs neturite teisės ištrinti šio įrašo" });

	//Įrašo ištrynimas
});

router.post("/", async (req, res) => {
	const { title, content } = req.body;
	const author = req.session.user.id;

	// Validacija

	// Išsaugojimas duombazėje
	const newPost = new PostModel({
		title,
		content,
		author,
	});

	await newPost.save();
	res.redirect("/?message=Naujas postas buvo sėkmingai sukurtas");
});

router.put("/", async (req, res) => {
	//Įrašo atnaujinimas
});

module.exports = router;
