<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie</title>
</head>
<body>
<!--wyświetl w ekranie przeglądarki wszystkie liczby nieparzyste podzielne przez 7 z przedzialu od 7 do miliona -->
<?php
$ile=0;
for($i=7;$i<1000000;$i+=2){
    if($i%7==0){
        echo "$i,";
    $ile++;
        if($ile==10){
            $ile=0;
            echo "<br>";
        }
    }
}


//to samo ale w tabeli html
$ile=0;
echo "<tabela>";
echo "<tr>";
for($i=7;$i<1000000;$i+=2){
    if($i%7==0){
        if ($i%9==0)
            echo "<td><span
            style=\"background-color:red\">$i<\
            span></td>";
        else echo "<td>$i</td>";
    $ile++;
        if($ile==10){
            $ile=0;
            echo "</tr><tr>";
        }
    }
}
echo "</tr>";
echo "</table>";
?>
</body>
</html>
