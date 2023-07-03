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
$alfabet=array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','Y','Z');
$tabsllow=array();
for($i=0;$i<100;$i++){
    for($j=0;$j<21;$j++){
        $slowo[$j]=$alfabet[rand(0,22)];
    }
    $a=19;
    for($j=21;$j<=40;$j++){
        $slowo[$j]=$slowo[$a];
        $a--;
    }
    $tabslow[$i]=$slowo;
    for($j=0;$j<=40;$j++){
        if ($j==20) echo "<h1 style=\"display:inline\">$slowo[$j]</h1>";
        else echo $slowo[$j];
    }
    echo "<br>";
}
//print_r($stabslow);
// for ($i=0;$i<41;$i++){
    //echo "<p>"
    //for ($j=0;$j<41;$j++)
    //  echo $tabslow[$i][$j]."";
    //  echo "</p>";
//}
for ($i=0;$i<41;$i++){
    for ($j=0;$j<100;$j++)
    if ($i==20) echo '<h1 style="display:inline">'.$tabslow
    [$j][$i].'</h1>';
    else
        echo $tabslow[$j][$i];

    echo "<br>";
}

?>
</body>
</html>