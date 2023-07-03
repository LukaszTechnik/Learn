//Napisz skrypt wyznaczający czynniki pierwsze podanej liczby


let n=2131232;
let p=Math.ceil(Math.sqrt(n));
let k=2;
const factortab=[];
while (n>1 && (++k)<=p){
    while (n%k == 0){
        factortab.push(k);
        n=parsetInt(n/k);
    }
    ++k;
}