<?php
//phpinfo();
@$mysql = new mysqli('localhost', 'root', '', 'test');
if (mysqli_connect_errno()) {
    printf("Brak połączenia z serwerem MySQL. Kod błędu: %S\n", mysqli_connect_error());
    exit;
} else {
    echo "Połączenie poprawne z bazą danych.";
    //$mysqli->close();
}
?>