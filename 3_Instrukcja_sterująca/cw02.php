<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cwieczenie2</title>
    <style>
        .glowna{
            background-color:red;

        }
    </style>
</head>
<body>
    <!-- 1. napisz skrypt w którym wyswietli w przeglądarce tabele dwuwymiarowe
    zawierajaca liczby pierwsze tabela ma byc wymiaru 50x50
    2.Wyzeruj elementy leżące nad i pod główną przekątną.
     Pokoloruj na niebiesko elementy leżące nad górną przekątną.
     --->
     <?php
     $tablicaprime=array();
     $ile=2;
     $liczba=5;
     $tablicaprime[0]=2;
     $tablicaprime[1]=3;
     while($ile<(50*50)){
        $pierwsza=true;
        $pierwiastek=ceil (sqrt($liczba));
        for($i=3;$i<=$pierwiastek;$i++){
            if($liczba%$i==0){
                $pierwsza=false;
                break;
            }
        }
        if($pierwsza==true){
            $tablicaprime[$ile]=$liczba;
            $ile++;
        }

        $liczba+=2;
     }
//print_r($tablicaprime);

?>
<table border="0">
    <?php
    $index=0;
    for($i=0;$i<50;$i++){
        echo"<tr>";
        for($j=0;$j<50;$j++){
            echo"<td>$tablicaprime[$index]</td>";
            $index++;
        }
    echo "</tr>";
    }
?>

<table border="1">
<?php
$ile=0;
for($i=0;$i<50;$i++){
    echo"<tr>";
    for($j=0;$j<50;$j++){
        if($i==$j){
        echo"<td calss=\"glowna\">$tablicaprime[$ile]</td>";
        }else{
            echo"<td>0</td>";
        }
    }
    $ile++;
    echo"</tr>";
}
?>
</table>



</body>
</html>