//Mamy 7 typów wbudowanych (6 prostych i 1 referencyjny)
/*Typy proste:
string, number, boolean, undefined, null, symbol
*/
/*
Typy referencyjne:
obiekty -> obiekt, funkcja, tablica
*/
//operator typeoff -> sprawdza typ zmiennej
//String - łańcuch znaków
//typeof "tekst"
//typeof "222.222"
//typeof "gravis"
//let username = "Tymoteusz"
//typeof username

//Number - liczba bez podziału na integer i float
//typeof 222.222;
//typeof 1000;
//typeof 3.2e10;
//typeof NaN;
//Konwersja niejawna między typami:
//typeof (2.2* "a")

//Boolean - wartość logiczna
//typeof true;
//typeof false;
//typeof (2 == 3);

//Undefined - niezdefiniowany (jedna wartość)
//Najczęściej tworzone przez interpreter przy wykonywaniu kodu
//typeof undefined
//let dateFirstLogin; 
//deklaracja zmiennej bez inicjalizacji wartości powoduje przypisanie undefined

//NULL - nie posiada
//let userSec = null


//Typy referencyjne - obiekty
//typeof {};
//typeof [];
//typeof function () { };