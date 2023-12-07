const masyvas = [6, 2, 9, 5, 12];

// filter - gražina tuos elementus kurie praeina testą.
const filterArray = masyvas.filter((num) => num > 7);

// gražins [9, 12] nes tik jie didesni už 7
console.log(filterArray);

// map - pakeist elemento value taip kaip jūs norit.
const mapArray = masyvas.map((num) => num * 2);

// Gražins [12, 4, 18, 10, 24] nes perėjom per visus elementus ir padauginom iš 2
console.log(mapArray);

// reduce - sudės arba atims visus elementus vienas iš kito. Galim padaryt kad dalintusi ar daugintusi iš bendro varijanto bet bent aš tam tuo nenaudoju.
const reduceArray = masyvas.reduce((tot, num) => num + tot);

// Gražins 34 nes visus skaičius [6, 2, 9, 5, 12] sudėjus bus 34
console.log(reduceArray);

// Some - tikrins ar bent kažkuris elementas praėjo testą.
const someArray = masyvas.some((num) => num < 6);

// Gražins true kadangi 2 elementai praėjo testą. Nes 2 skaičiai yra mažesni už 6 (2, 5)
console.log(someArray);

// every = tikrins ar visi elementai praėjo testą.
const everyArray = masyvas.every((num) => num < 12);

// Gražins false kadangi vienas elementas (12) nėra mažesnis už 12 ir jis testo nepraeina.
console.log(everyArray);

// find - Gražins primą elementą kuris praėjo testą.
const findArray = masyvas.find((num) => num > 8);

// Gražins 9 nes jis yra pirmas elementas kuris yra didesnis už 8.
console.log(findArray);

// findIndex - Gražins pirmo elemento indeksą masyve kuris praeis testą.
const findIndexArray = masyvas.findIndex((num) => num > 8);

// Gražins 2 nes 9 yra 3 elementas masyve (antras indexas nes pradedama skaičiuoti nuo 0)
console.log(findIndexArray);

// Sort - išdėstys masyvo eiliškumą pagal tai kaip norit.
const sortArray = masyvas.sort((a, b) => a - b);

// Gražins nuo mažiausio iki didžiausio. Bet galim apkeist į b - a ir gražins nuo didžiausio iki mažiausio. P.S updeitins originalu masyvą.
console.log(sortArray);
console.log(masyvas);
