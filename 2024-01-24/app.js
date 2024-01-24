const express = require("express");
const mongoose = require('mongoose');
const app = express();

mongoose.connect(`mongodb+srv://Justelio19:xLHDNnNygV9woSRN@forum.jrfji5c.mongodb.net/forumhub`)
const db = mongoose.connection;

//DB listeneriai, kurie nusako ar prie DB  buvo prisijungta sėkmingai ar ne
db.on('error', (error)=>{
	console.error('erroras: ' + error);
})
db.once('open', ()=>{
	console.info('Prie duomenų bazės buvo sėkmingai prisijungta')
})

// Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");

const publicRouter = express.Router();
publicRouter.use(express.static("public"));
app.use("/public", publicRouter);

app.get("/", (req, res) => {
	res.render("index", {
		title: "Forumo aplikacija",
		username: "Justelio19",
		list: ['Product1', 'Product2', 'Milk', 'Choclate']
	});
});

app.get('/register', (req,res)=>{
	res.render('register');
})

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});
