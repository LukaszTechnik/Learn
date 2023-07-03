//typ boolean, wartość logiczna, typ logiczny
//tylko dwie wartości tego typu: true i false

//funkcje Boolean - zmienia wartość innego typu na wartość typu boolean
Boolean(0) //false
Boolean(2 >=2) //false
Boolean("coś") //true
Boolean({}) //true
Boolean(["ktoś", 100, false]) //true
Boolean("") //false -> pusty string to false
Boolean(NaN); //false
Boolean(null); //false
Boolean(undefined); //false

//OPERATORY ZWRACAJĄCE TYPY LOGICZNE 
//większe/mniejsze/porównanie
2 > 4; // false
6 >= 5; //true
2 == 2; // true
"1" == true; //konwersja na number a potem porównanie 
"1" === true; // false
"1" === 1; //false
//Negacja logiczna - zmień na typ logiczy (jeśli nie jest) i odwróć
!false; //true
!0; //true
!200; //false
!true; //false

//LOGICZNE "I" (iloczyn logiczny) &&
//oba elementy prawdziwe
let userAge = 22;
let userMoney = 10.2;
let beerPrice = 11;
//warunek
(userAge >= 18 && userMoney > beerPrice);
// constole/log(userAge > 18 && userMoney >beerPrice);
//jak to działa
//1 && 0; -> 0

//LOGICZNIE "LUB" (suma logiczna, alternatywa) ||
const userConnection = "syn głównej księgowej";
const userExperience = 0;

//Tylko jeden z operatorów musi być true
Boolean(userConnection || userExperience);
//1 || 0; -> true

//Konwersja w drugą stronę - z Boolean a inny typ (number i string)
Number(true); //1
Number(false); //0
String(true); //"true"
String(false); //"false"