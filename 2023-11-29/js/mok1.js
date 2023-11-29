//komentaras vienos eilutes

/*
Čia yra multiline komentaras
https://www.javatpoint.com/javascript-special-characters
atvirkščias pasvirasis brūkšnys: \ nurodo "escape" simbolį javascript sintaksėje. 
juo pasinaudoję string'e galime įterpti kabutes, tokiose pačiose kabutėse, 
įterpti tabuliacijos simbolį: \t
*/

let imone1 = "UAB\t\"Artaleka\"";
let imone2 = "MB\t\"Softo fabrikas\"";

console.log(imone1);
console.log(imone2);

//  \n - New line symbol

let imoniuSarasas = imone1 + '\n' + imone2;

console.log(imoniuSarasas);

imoniuSarasas = `${imone1}\n${imone2}`;

//--------------------------------

//Duomenu tipo keitimas

let skaiciausTekstas = '-12.7';

//parseInt(skaiciausTekstas) funkcija, gauna tik sveikuosius skaicius
let skaicius = parseInt(skaiciausTekstas);
console.log(skaicius);

//unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius);

//Number funkcija:
skaicius = Number(skaiciausTekstas);
console.log(skaicius);//-12.7


//Math

skaicius = 12.7;
//Apvalinimas i artimesne puse
let roundedSkaicius = Math.round(skaicius);
console.log('suapvalinta reiksme: ' + roundedSkaicius);

//Apvalinimas i mazaja puse
roundedSkaicius = Math.floor(skaicius);
console.log('suapvalinta reiksme i mazaja puse: ' + roundedSkaicius);

//Apvalinimas didziaja puse
roundedSkaicius = Math.ceil(skaicius);
console.log('suapvalinta reiksme i didziaja puse: ' + roundedSkaicius);

//Skaiciaus konvertavimas i string duomenu tipa:

//12.7
let valiuta = skaicius.toFixed(2);
console.log(valiuta);
let tekstasSkaicius = skaicius + '';
console.log(typeof tekstasSkaicius + ', jo reiksme: ' + tekstasSkaicius);
tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);