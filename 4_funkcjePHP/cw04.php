<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
 //   /*napisz skrypt, który wyznaczy odbicie lustrzane liczby.
 //  np 123 -> 321, 34531-> 13543
 //   */
 //   $liczba="abcdefgh";
 //   echo ($liczba);
 //  
 //   $zmienna = ($liczba);
 //   echo strrev($zmienna);
 //   ?>
   <?php
   $n=12345678;
    $rew=array();
       while ($n>1){
    $r=$n%10;
    $n=$n/10;
    $rew[$index++]=$r;
   }
//var_dump($rew);
$j=0;
$result=0;
while ($j<count($rew)){
    $dec=1;
    for ($i=1;$i<count($rew)-$j;$i++){
        $dec*=10;
    }
    $result=$result+$dec*$rew[$j];
    $j++;
}
echo $result;
    ?>
</body>
</html>