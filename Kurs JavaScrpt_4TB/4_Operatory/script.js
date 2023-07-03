2+2; //number
"2"+2; //string "22"
"2"+"2"; //string "22"
2+true; //number -> 3
"2"+true; //string "2true"

typeof 1200; //zwraca typ warrtości -> 
//Podział operatorów ze względu na ilość argumentów 
let result;
//operator przypisania (2 argumentów)
result = 1;
//operator inkrementacji 
result ++; //(1 argumentowy)
//operator trójargumentowy 
3>2?"tak":"nie"

//Operatory arytmetyczne
let position=2;
position++; //inkrementacja 
position--; //dekrementacja
++position; //preinkrementacja
--position; //predekrementacja
position+=10; //przypisanie z dodawaniem
position=position+10
position-=10; //przypisanie z odejmowaniem
position/=10; //przypisanie z dzieleniem

10 % 9; //reszta z dzielenia (modula)
2**5 //potęgowanie (od ES6) -> 2*2*2*2*2

//Operatory logiczne 
20>10 //większe 
20<10 //mniejsze
20<=10 //większe równe 
20>=10 //mniejsze równe 
10==20 //równość
10===20 //równe i tego samego typu (nie ma konwersji)
10!=20 //różne
10!==200 //różne co do wartości i typu

//Operatory logiczne 
!(2-2) //negacja 
true || true //suma logiczna 
true && false //iloczyn logiczny
true ^ false //xor

//Kolejność operatorów 
/*
1. * , /
2. + , -
Nawiasy zmieniaja kolejność wykonywania operatorów 
*/
