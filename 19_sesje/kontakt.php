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
    session_start();
    if(isset($_SESSION["imie"])){
        echo "Kontakt";
        echo "<a href =\"index.php\">Strona główna</a>";
        echo "<a href=\"wylogowanie.php\">Aby wylogować kliknij</a>";

    }
    else{
        echo "Musisz się zalogować";
        echo "<a href=\"logowanie.php\">Strona logowania</a>";
    }
    ?>
</body>
</html>