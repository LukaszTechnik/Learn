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
    $panstwa=array(
        "PL"=>"Polska",
        "DE"=>"Niemcy",
        "F"=>"Francja",
        "GB"=>"Wielka Brytania ",
        "US"=>"USA",
        "ESP"=>"Hiszpania",
        "RUS"=>"Rosja",
        "I"=>"Włochy",
    );
    echo "<h1>Funkcje sortujące</h1>";
    foreach($panstwa as $klucz=>$wartosc){
        echo "$klucz=$wartosc | ";
    }
    echo "<p>.............................................</p>;";
    //asort($panstwa);
    //arsort($panstwa);
    //ksort($panswa);
    //krsort($panstwa);
    echo"<br>";
    foreach($panstwa as $klucz=>$wartosc){
        echo "$klucz=$wartosc | ";
    }
    echo "<p>.............................................</p>;";





    $owoce=array(
      "mango","kiwi","jabłko","cytryna","wiśnia","geuszka"
    );
    echo "<h1>Sortowanie</h1>";
    foreach($owoce as $klucz=>$wartosc){
      echo "$wartość | ";
      }
    echo "<br>";
    rsort($owoce);
    //sort($owoce);
    foreach ($owoce as $klucz=>$wartosc){
      echo"$wartosc | "
    };
  ?>
</body>
</html>