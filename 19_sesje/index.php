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
    include("lib.php");
    session_start();
    showMenu();
    if(isset($_POST["submit"]))
    if(login($_POST["login"],$_POST["password"]))[
        echo "<p>Strona główna!!!</a>"
    ]
</body>
</html>