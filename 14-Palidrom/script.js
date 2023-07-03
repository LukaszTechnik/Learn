//Palindromy
//kobyła ma mały bok
//Napisz skrypt sprawdzający dzy podany ciąg jest palindromem

let word = prompt("Podaj ciąg znaków:");
let reverseWord = word.split("").reverse().join("");
console.log(reverseWord);
word=word.replace(/\s/g,"");
//The Regex:\s is the regex for "whitespace",and j is the "gobal" flag, meaning match ALL \s (whitespaces).
reverseWord=reverseWord.replace(/\/s/g,"");
if (word === reverseWord) console.log("nie palindromem");
else console.log("nie jest palindromem")


const testPrime= function(num){
    if (num==2)return true;
    if (num%2==0) return false;
    let p = Math.ceil(Math.sqrt(num));
    for(i=3;i<=p;i+=2){
        if(num % i == 0){
            return false;
            }
    }
    return true;
}

console.log(testPrime(7));


//napisz skrypt wyznaczający sumę cyfr podanej liczby

let liczba=234567;
liczb=parseInt(prompt("podaj liczbę"));
let liczba1=liczba;
let suma=0;
let r=0;
while (liczba>1){
    r=liczba%10;
    suma+=r;
    liczba=parsetInt(liczba/10);
}
console.log(suma);
alert("suma cyfr liczby"+liczba1+"wynosi:"+suma);



//Ćw 5
//napisz skrypt wyznaczający postać binarną podanego adresu IPv4



let ip = "192.168.16.221";
let tab = ip.split(".");
for(let i=0; i<tab.length;i++){
    tab[i]=Number(tab[i]);
    }
let tabBin=[];
for (let i=0;i<tab.length;i++){
    tabBin.push(tab[i].toString(2));
    }
for (let i=0;i<tab.length;i++){
    tab[i]=Number(tab[i]);
    tabBin.push(tab[i].toString(2));
}
for (let i=0; i<tabBin.length;i++){
    while (tabBin[i].length<8){
        tabBin[i]='0'+tabBin[i];
    }
}


//NAPISZ skrypt wyznaczający postać dziesiętną kropkową maski sieciowej na podstawie notacji cidr
//dane wejściowe: a.b.c.d/e np.192.168.100.20/25


let ip2 = "a.b.c.d";
let tab2 = ip.split(".");
for(let i=0; i<tab.length;i++){
    tab[i]=Number(tab[i]);
    }
let tabBin2=[];
for (let i=0;i<tab.length;i++){
    tabBin.push(tab[i].toString(2));
    }
for (let i=0;i<tab.length;i++){
    tab[i]=Number(tab[i]);
    tabBin.push(tab[i].toString(2));
}
for (let i=0; i<tabBin.length;i++){
    while (tabBin[i].length<8){
        tabBin[i]='0'+tabBin[i];
    }
}