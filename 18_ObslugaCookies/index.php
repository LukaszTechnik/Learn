<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obsluga Cookie</title>
</head>
<body>
    <p><a href="https://www.php.net/manuel/en/function.setcookie">setcookie </a></p>
    <?php
    setcookie("imie", "Kamil", time()+120);
    echo "Twoje ciastko zostało skasowane!";
    echo "<p>Strona główna<a href=\"index.php\"> Kliknij </a></p>";
    
</body>
</html>