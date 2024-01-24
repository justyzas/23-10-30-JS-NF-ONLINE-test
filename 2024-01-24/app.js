const express = require("express");
const mongoose = require('mongoose');
const app = express();

//Prisijungimas prie duomenų bazės pasinaudojant URL
mongoose.connect(`mongodb+srv://vartotojas:slaptazodis@forum.jrfji5c.mongodb.net/forumhub`);
const db = mongoose.connection;

//DB listeneriai, kurie nusako ar prie DB  buvo prisijungta sėkmingai ar ne
db.on('error', (error)=>{//ERROR listeneris
	console.error('erroras: ' + error);
})
db.once('open', ()=>{//PRISIJUNGIMO listeneris
	console.info('Prie duomenų bazės buvo sėkmingai prisijungta')
})

// Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");

// Tarpinio routo sukūrimas
const publicRouter = express.Router();
//Statinių failų atvaizdavimas per /public aplanką
publicRouter.use(express.static("public")); 
//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
app.use("/public", publicRouter); 

app.get("/", (req, res) => {
	//index.ejs failo atvaizdavimas iš views aplanko
	res.render("index", {
		title: "Forumo aplikacija",
		username: "Justelio19",
		list: ['Product1', 'Product2', 'Milk', 'Choclate']
	});
	//Kartu paduodami ir parametrai EJS failui
});

app.get('/register', (req,res)=>{
	res.render('register');
	//Register rout'as skirtas registracijai
})

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});
