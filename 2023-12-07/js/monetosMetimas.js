function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let metimuSkaicius = 0;
let metimas = rand(0, 1); //0 - herbas, 1 - skaicius
if (metimas === 0) console.log("H");
else console.log("S");
while (metimas === 1) {
	// metimas = rand(0, 1);
	if (metimas === 0) console.log("H");
	else console.log("S");
}
