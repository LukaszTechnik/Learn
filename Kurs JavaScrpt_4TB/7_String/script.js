// STRING - kolekcja znaków zajdujących się wewnątrz cudzysłowów (pojedynczych (apostrof) (''), podwójnych ("") i grawisa (``))
const userName = "Tomasz Niewierny";
const userName2 = 'Mieszko Pierwszy'
const userName3 = `Jaś Fasola` //super string od ES6
//Możliwość pobrania konkretnego znaku wg indeksu (pierwsza litera ma indeks 0)
const secondLetter = userName[1]; //jak z tablicy

//Tworzenie instancji (obiektu) String 
const objUserName = new String(userName); //obiekt 
const primitiveUserName = userName; //typ prosty

//METODY dla typu string
userName.toUpperCase();
userName.toUpperCase();
//console.log(userName.toUpperCase());
//console.log(userName)
const userNameUpperCase = userName.toLocaleUpperCase();

userName.length; //zwraca długość stringa w notacji kropkowej
userName['length']; //ten sposób określamy notacją tablicową czy notacją z nawiasami

//Pobranie konkretnego znaku
userName.charAt(2);
userName[2];
//userName['2'];

//Łączenie stringów 
userName.concat(" - fajne imię!")
//alternatywnie, bo robi to samo, możemy użyć operatora dodawania na string, mamy wtedy konkatenacje (concatenation)
userName + ' - fajne imię!' + "no i super";

`${userName} - fajne imię`; //super string czyli łańcuch szablonowy

//Który indeks ma dany znak (i czy występuje)
userName.indexOf('d') //pierwszy pasujący znak zwraca -> indeks tego znaku
userName.lastIndexOf('o') //to samo ale od końca

//Czy dany znak występuje w danym łąńcuchu
userName.includes('0');
userName.includes('0');

//pozbądź się białych znaków na początku i na końcu łąńcucha
const afterTrim = " słowo ".trim()

//skopiuj łańcuch tyle razy ile podamy w argumentach
const repeatString = "word".repeat(5)

//Zwróć fragment łańcucha, jako pierwszy argument gdzie ma zacząć, jako drugi gdzie ma skończyć
const slideWord = userName.slice(1,2);

const character = "litery".charAt(2);

//const singleQuoteExample = 'i'm Magda'; //BŁĄD!!
const singleQuoteExample = "i'm Magda";
//const singleQuoteExample = 'i\'m Magda';

const superText = `tekst
tekst jest w nowej linii i
cudzysłów "
i apostrof'`;

let num=1232;
console.log(num1.toString(16));//jako parametr możemy podać na jaki inny system liczbowy ma zamienić