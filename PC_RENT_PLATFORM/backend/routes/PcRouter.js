const express = require("express");
const router = express.Router();
const PcModel = require("../model/PcModel");
const upload = require("../utils/multerConfig");

router.post("/", upload.array("files", 2), async (req, res) => {
	try {
		const { cpu, gpu, pcType, ramAmount, ramSpeed, ramType, pc_name } =
			req.body;
		console.log(req.body);
		const newPc = new PcModel({
			ownerId: req.session.user.id,
			cpu,
			gpu,
			ramType,
			ramSpeed,
			ramAmount,
			pcType,
			pcName: pc_name,
		});
		await newPc.save();

		res.status(201).json({
			message: "PC saved to the database sucessfully",
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

router.get("/:id", async (req, res) => {
	try {
		const pc = await PcModel.findById(req.params.id);
		if (!pc)
			return res.status(404).json({ message: "pc not found", status: false });
		return res.status(200).json({ pc: pc.getInstance(), status: true });
	} catch (err) {
		return res.status(400).json({ message: "Bad Id", status: false });
	}
});
router.get("/my-pcs", async (req, res) => {
	//prisijungusio vartotojo kompiuteriai grazinami
	// 1. patikrinti ar vartotojas prisijunges
	// 2. gauti prisijungusio vartotojo ID
	// 3. Su modeliu PcModel gauti visus kompiuterius pagal vartotojo ID  |  SELECT * from pcs WHERE owner_id = userId
});
module.exports = router;
