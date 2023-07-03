<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>cwiczenie2</title>
</head>
<body>
    <!--1.Napisz skrypt, w którym wyśwwietli w przeglądarce tabele dwuwymiarowa zawierająca liczby pierwsze tabela ma być wymiaru 50x50-->
    <!--2.Wyzeruj elemety leżące nad i pod główną przekątną. Pokoloruj na niebiesko elemenaty leżące nad górną przekątną-->
<?php
$tablicaprime=array();
$ile=2;
$liczba=5;
$tablicaprime[0]=2;
$tablicaprime[1]=3;
while($ile<(50*50)){
    $pierwsza=true;
    $pierwiastek=ceil(sqrt($liczba));
    //test pierwszości
            for($i=3;$i<=$pierwiastek;$i++){
            if($liczba%$i==0){
                $pierwsza=false;
                break;
            }
        }
    //koniec testu pierwszości
            if($pierwsza=true){
                $tablicaprime[$ile]=$liczba;
                $ile++;
            }
        $liczba+=2;
}
//print_r($tablicaprime);
?>
<table border="0">
    <?php
    $ile=0;
    for($i=0;$i<50;$i++){
        echo "<tr>";
            for($j=0;$j<50;$j++){
            echo "<td>$tablicaprime[$ile]</td>";
            $ile++;
        }
        echo "</tr>";

    }
    ?>
</table>
</body>

<body>
    <!--1. napisz skrypt który wyświetla w przeglądarce tabele dwuwymiarową zawierającą liczby pierwsze. Tabela ma być wymiary 50x50
    2. Wyzeruj elementy leżące nad i pod przekątną. Pokoloruj ma niebiesko elementy leżącej nad główną przekątną 




