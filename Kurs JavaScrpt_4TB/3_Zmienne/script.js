//Zmienna -> to sposób na zapisanie danych w pamięci
/*Zmienna ma 3 atrybuty:
1.nazwa 
2.miejsce w pamięci (prowadzi do niego identyfikator czyli nazwa)
3.wartość
(4).czas życia
*/
//Czy zmienna ma typ? Zmienna nie ma typu JS
//To wartość ma typ!
/*
W JS mówimy o typowaniu dynamicznym - typ nadaje interpreter w momencie wykonywania programu 
*/
//Deklaracja -> stworzenie zmiennej, ale też przypisanie do niej wartość undefined
let a, b, c, d;
/*Zmienne stałe i zmienne zmienne*/
//const -> czyli zmienna stała (od ES6)
//let -> zmienna od (ES6)
//var -> zmienna przed ES6
/*UWAGA;
let i const można zadeklarować tylko raz, var pozwala deklarować wielokrotnie.
Do const nie można przypisać nowej wartości, ale można modyfikować obiekty, które są przypisane do zmiennej
*/
var x1=2;
const tab1=[12,3,4];
tab1[2]=100;
//ale nie mogę zrobić tak:
//tab1 = [3,5,7];
//Obiekt globalny (window) -> var tworzona jest nowa właściwość
//Z let i const nie jest tworzona 
//Hoistowanie var, let i const 
//hoistowanie  to przenoszenie przez interpreter na górę kodu deklaracji zmiennych, ale nie inicjalizacji wartości. Dotyczy on zmiennych deklarowanych za pomocą var, ale nie let i const 

console.log(varVariable);
//console.log(letVariable);
//console.log(constVariable);
var varVariable=1;
let letVariable=2;
const constVariable=3; 