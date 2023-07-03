//Pętla na tablicy
const userAge = [19, 18, 15, 45, 34, 33, 25];
for (let i = 0; i < userAge.length; i++){
    console.log(`uzytkownik o indeksie ${i} jest w wieku ${userAge[i]}`);
}

//PĘTLA FOR - OF (ES6)
const colors = ["red", "green", "black", "yellow", "white", "gold", "siver", "brown"]

for (const color of colors){
    console.log("mój ulubiony kolor to: " + color);
}

//  Ciekawostka! Istnieje metoda forEach dla tablicy
colors.forEach(element => console.log("mój ulubiony kolor to: "+ element));