<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Komentarze w PHP</h1>
    <?php
    // to jest komentarz jednowierszoey
    /*
    to jest komentarz wielowierszowy
    */
    ?>
    <h1> Zmienne i ich typy </h1>
    <?php
    //brak silnie zaznaczonej typowości
    //typ zmiennej zależy od wartości jaką przypisujemy do zmiennej
    $a=5;
    echo 'a: '.gettype($a). "<br>"; //gettype() --> zwraca typ
    //argument
    $b=5.2;
    echo 'b: '.gettype($b). "<br>";
    $c=true;
    echo 'c: '.gettype($c). "<br>";
    $d="ala ma kota $b";
    echo 'd: '.gettype($d). "<br>";
    $e='ala ma kota $b;';
    echo 'e: '.gettype($e). "<br>";
    echo $d. "<br>";
    echo $e. "<br>";
    echo'<p><a href="https://www.php.net/manual/en/function.array">tablice</a></p>';
    $tablica=array(1,2,5,10,20);//tablica indexowana numerycznie
    //indeksowanie jest od zera
    $tablicaAs=array(
        'imie'=>"Jan",
        'nazwisko'=>"Kowalski",
        'e-mail'=>"kowalski@wp.pl"
    );//tablice indeksowania "znakami" - asocjacyjna
    echo $tablica[3]."<br>";
    echo $tablicaAs['nazwisko']."<br>";
    //echo $tablicaAs[1]."<br>";
    //tablica wielowymiarowa
    $tab2=array(
    array(1,2,3,4,5),
    array(6,7,8,9,10),
    array(11,12,13,14,15)
    );
    echo $tab2[1][4];//10
    $tab3=array(
        'Europa'=>array('Polska','Niemcy'),
        'Afryka'=>array('Egipt','Algeria'),
        'Azja'=>array('Kazachstan','Chiny')
    );
    echo '<br>'.$tab3['Europa'][1];
    print_r($tab3);
     ?>
 <h1>Zmienne predefiniowane</1>
 <p><a href="https://www.php.net/manual/en/language.variables.superglobals">globalne zmienne</a></p>
 <?php
 echo 'zmienna SERVER'."br";
 print_r($_SERVER);
 echo"<br>".$_SERVER['DOCUMENT_ROOT']."<br>";
 echo "<br>";
 echo'--------------------------------------<br>';
 echo'Zmienna GET',"<br>";
 print_r($_GET);
 ?>
 <a href="kliknij.php?a=3&b=10">Kliknij mnie</a>
 <h1>Stałe</h1>
 <h1>Stałe</h1>
 <?php
 echo_FILE_;
 echo "<br>";
 echo_FILE_;
 echo "<br>";
 echo PHP_VERSION;
 echo "<br>";
 define("JK","cosStalego");
 echo JK;
 echo "<br>";
 echo "<br>";
 ?>
 <h1>Operatory</h1>
 <p><a href="https://www.php.net/manual/en/language.operators.php">Dokumentacja</a></p>
 <?php
 /*
 +,=,*,%,++,--,&,|,>>,<<,^,&&,||,!,==,===,!=,<>,<,>,<=,=>    ...
 (operator tłumienia błędów), operator wywołania(`ls-l`)
 */
 $number1=1;
 $number2=1;
 echo $number1 & $number2;  

 echo 1 <=> 1; //0
 echo 1 <=> 2; //-1
 echo 2 <=> 1; // 1
 echo "<br>";
 $a1 = array("a" => "apple","b"=>"banana");
 $b = array("a" => "pear","b" =>"strawberry","c"=>"cherry");

 $c=$a1 +$b; //Union of $a and $b
 echo "Union ofa\$a and \$b: \n";
 var_dump($c);
 $a=1;
 echo $a++;
 echo $a;
 ?>
</body>
</html>
 
