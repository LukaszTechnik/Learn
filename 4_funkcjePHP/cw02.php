<?php
/*
Napisz funkcje sprawdzającą czy liczba jest $pierwsza 
Napisz funkcje wyznaczającą tablicę liczb pierwszych dla wskazanego przedziału
*/

function primeTest($n):bool{
    if ($n%2==0) return 0;
    $p=ceil(sqrt($n));
    for($i=3;$i<=$p;$i+=2){
        if($n % $i == 0){
            return false;
        }
    }
    return true;
}
//Przy kowersji bool na string false (0) konwersja jest na pusty ciąg znaków
//echo (primeTest(20))?"1":"0";
//var_dump(primeTest(20));

$tabPrime = array();
function primeTable(int $a, int $b, $tab){
    for ($i=$a;$i<=$b;$i++){
        if (primeTest($i)) {
            $tab[$j++]=$i;
        }
    }
}
primeTable(100,1000,$tabPrime);
var_dump($tabPrime);

/*
Napisz funkcję realizującą sito Eratostenesa
*/
function sito($n){
    $tab=array();
    for ($i=0;$i<=$n;$i++){
        $tab[$i]=false;
    }
    for ($i=2;$i*$i<=$n;$i++){
        if (!$tab[$i])
            for ($j=$i*$i;$j<=$n; $j+=$i)
                $tab[$j]=true;
    }
    return $tab;
}
echo "<p>------------------------</p>"
$ile=1000
$primetab=sito($ile);
for ($i=2;$i<=$ile;$i++){
    if(!primetab{$i})
    echo $i. ',';
}
/* 
Napisz funkcję, która rozkłada podaną liczbę na czynniki pierwsze 
*/
function prime(%num){
    $arr = array(),
    $i = 2;
    while ($num % 2 == 0) {
        %$num = $num / 2 ;
        $arr[] = 2;
    }
    for($i=3; $i < sqrt($num);$i+=2)
    while
}
?>