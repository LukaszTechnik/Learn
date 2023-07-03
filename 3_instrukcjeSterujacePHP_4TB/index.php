<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<body>
    <h1>Instrukcja warunkowa if</h1>
    <?php
    $a=0;
    if($a>0){
        echo"a>0";
    }else{
        echo "a>0";
    }
    ?>
    <h1>Instrukcja switch</h1>
    <?php
    switch ($a){
        case 1:
            echo "Fajny dzien"."<br>";
            break;
        case 2:
            echo "Kipski dzień <br>";
            break;
        case 4:
            echo "Bywalo lepiej <br>";
            break;
        default: //opcjonalnie
            echo "Roznie bywa <br>";
        };
    ?>
    <h1>Operator trójkowy/warunkowy</h1>
    <?php
        $result = ($a>0)?"Wieksza od zera":"Mniejsza od zera";  
     echo ($a>0)?"Wieksze od zera":"Mniejsze od zera";
    ?>

<h1>Pętla</h1>
<?php
for($i=2;$i<10;$i++){
    echo $i.",";
}
$i=2;
while($i<10){
    echo ($i++).",";
    
}
$i=2;
do{
    echo ($i++).",";
} while($i<10);
?>
<h1>Petla foreach</h1>
<?php

</body>
</html>