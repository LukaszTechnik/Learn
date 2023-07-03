//Mamy 7 typów wbudowanych (6 prostych i 1 referowany)
/*Typy proste:
string,numer,boolean,underfined,null,symbol
*/
/*
Typy referencyjne
obiekty -> obiekt, funkcja, tablica
*/
//operator typeof -> sprawdza typ zmiennej
//String - łańcuch znaków
//typeof "tekst"
//typeof '222.222';
//typeof 'grawis';
//let userName = "Tymoteusz"
//typeof userName

//Number - liczba bez podziału na integer i float
//typeof 222.222;
//typeof 1000;
//typeof 3.2e10;
//typeof NaN;
//Konwersja niejawna między typami:
typeof (2.2* "a")

//Boolean - wartość logiczna
//typeof true;
//typeof false;
//typeof (2 == 3)

//Underfined - niezindetyfikowany (jedna wartość)
//Najczęściej tworzone przed interpreter przy wykonywaniu kodu
//typeof underfined;
let dateFirstLogin; //deklaracja kodu bez inicjalizacji wartości powoduje przypisanie undefined
typeof dataFirstLogin;

//NULL - nie posiada
let userSec = null

//Typy referencyjne - obiekty 
typeof {};
typeof [];

let a1=20
let a2=a1; //tworzona jest kopia, wartość identyczna ale nie ta sama
const ref1 = [1,2,3];
const ref2 = ref1; //Istnieje tylko jeden obiekt. Nie ma tu kopii