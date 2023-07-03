<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Składnia języka PHP</title>
</head>
<body>
    <h1>Komentarze w PHP</h1>
    <
    <?php    
    //to jest komentarz jedno wierszowy ->
    /*
    /to jest komentarz wielowierszowy
    */
    ?>
    <h1>Zmienne i ich typy</h1>
    <?php
    //brak silenie zaznaczonej typowości ( int, floadt itd)
    //Typ zmiennej zależy od wartości jaką przypisujemy d o zmiennej 
    $a=5
    echo 'a'.gettype ($a)."<br>";//gettype() -> zwraca typ argumentu
    $b=5.2;
    echo 'b:'.gettype($b)."<br>"
    $c=true;
    echo 'c:'
    echo gettype($c)."<br>";
    $b=5.2;
    echo gettype($d) "<br>";
    
</body>
</html>