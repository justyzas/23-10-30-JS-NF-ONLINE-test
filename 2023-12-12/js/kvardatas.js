// Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

let n = 15;

for (let i = 0; i < n; i++) {
	for (let ii = 0; ii < n; ii++) {
		if (i === ii || i + ii + 1 === n)
			document.write('<span style="color: red">*</span>');
		else document.write("<span>*</span>");
	}
	document.write("<br>");
}
