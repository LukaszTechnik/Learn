//Palindromy
//Kobyła ma mały bok
//Napisz skrypt sprawdzający czy podany ciąg jest palindromem

let word = prompt("Podaj ciąg znaków");
let reversedWord = word.split("").reverse().join;("");
//console.log(reversedWord);
word-word.replace(/\s/g, "")
reversedWord=reversedWord.replace(/\s/g, "");
if (word === reversedWord) console.log("jest palindromem");
else console.log("nie jest palindromem")