//sudarysime programą, kuri atspausdina savaitės dienos pavadinimą, pagal tai,
//kokia kintamojo diena skaičiaus reikšmė. 1 - pirmadienis, 2 -antradienis ir t.t

let diena = 7;
if(diena === 1)
{
    console.log('pirmadienis');
}
else if(diena === 2)
{
    console.log('antradienis');
}
else if(diena === 3)
{
    console.log('treciadienis');
}
else if(diena === 4)
{
    console.log('ketvirtadienis');
}
else if(diena === 5)
{
    console.log('penktadienis');
}
else if(diena === 6)
{
    console.log('sestadienis');
}
else if(diena === 7)
{
    console.log('sekmadienis');
}
else{
    console.log('nera savaites diena');
}

if(diena <= 7 && diena >= 1)
{
    if(diena % 2 === 0)
    {
        console.log('Diena yra lyginė');
    }
    else{
        console.log('Diena yra nelyginė');
    }
}



