const express = require("express");
const router = express.Router();
const User = require("../model/UserModel");
const Address = require("../model/AddressModel");
const security = require("../utils/security");
let currentAddressId;
router.post("/register", async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      birthDate,
      phone,
      country,
      county,
      municipality,
      zipCode,
      city,
      street,
      streetNumber,
      apartmentNumber,
    } = req.body;

    const newAddress = new Address({
      country,
      county,
      municipality,
      zipCode,
      city,
      street,
      streetNumber,
      apartmentNumber,
    });
    await newAddress.save();
    currentAddressId = newAddress.id;

    const salt = security.generateSalt();
    const hashedPassword = security.hashPassword(password, salt);
    const newUser = new User({
      username,
      passEncoded: hashedPassword,
      salt,
      email,
      birthDate,
      phone,
      addressId: newAddress.id,
    });

    await newUser.save();
    // 3. Užregistruoti vartotojo sesiją
    req.session.user = {
      username: newUser.username,
      email: newUser.email,
      id: newUser.id,
    };

    req.session.isLoggedIn = true;

    currentAddressId = undefined;
    res.status(201).send({
      user: newUser.getInstance(),
      address: newAddress.getInstance(),
      status: true,
    });
  } catch (err) {
    console.error(err);
    if (currentAddressId) {
      await Address.deleteById(currentAddressId);
      currentAddressId = undefined;
    }
    if (err.errno === 1062) {
      res
        .status(400)
        .json({ message: "Duomenys yra neunikalūs", status: false });
    } else {
      res.status(500).json({ message: "Serverio klaida", status: false });
    }
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({
        message: "Prašome pateikti pilną prisijungimo informaciją",
        status: false,
      });
    const existingUser = await User.findByUsername(username);
    if (!existingUser)
      return res.status(404).json({
        message: "Vartotojas tokiu pavadinmu buvo nerastas",
        status: false,
      });

    if (
      !security.isValidPassword(
        password,
        existingUser.salt,
        existingUser.passEncoded
      )
    )
      return res.status(400).json({
        message: "Prisijungimo duomenys yra netinkami",
        status: false,
      });
    req.session.user = {
      username: existingUser.username,
      email: existingUser.email,
      id: existingUser.id,
    };

    req.session.isLoggedIn = true;
    res
      .status(200)
      .json({ message: "sekmingai prisijungete prie sistemos", status: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Vidine serverio klaida.", status: false });
  }
});

// Log out route

router.get("/logout", async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy();
    return res
      .status(200)
      .json({ message: "Sekmingai buvote atjungtas", status: true });
  } else {
    return res.status(200).json({
      messsage: "Tam kad atsijungti pirmiausia turite prisijungti",
      status: false,
    });
  }
});

router.get("/check-session", (req, res) => {
  if (req.session.isLoggedIn)
    return res.status(200).json({ isLoggedIn: req.session.isLoggedIn });
  return res.status(200).json({ isLoggedIn: false });
});

module.exports = router;
