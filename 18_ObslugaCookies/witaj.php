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
    if (isset($_GET["action"])){
        if($_Get["action"]=="usuń"){
            setcookie|("imie", "", time()-1);
            echo "Twoje ciastko zostało skasowane!";
            echo "<p>Strona główna<a href=\"index.php\">Kliknij</a></p>";
        }
    }
    else{
        if(isset($_COOKIE["Imie"])){
            echo "<p>Witaj ".$_COOKIE["imie"],"ciasteczko zostanie usunięte po 2 minutach</p>";
            echo "<p>Jeśli chcesz usunąć ciasteczko <a href=witaj.php?action=usuń\">Kliknij</a></p>";
        }
    }
</body>
</html>