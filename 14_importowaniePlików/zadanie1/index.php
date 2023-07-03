<?php
/*zbuduj jednostronnicową aplikację internetową (Single Page Application -> SPA)
1 .Aplikacja ma mieć 3 podstawy: main, kontakt, users
2. Main ma zawierac informacje na temat języka php
3. Strona ma zawierać formularz kontaktowy z polami: imię, nazwisko, e-mail, zapytanie
4. Dane z formularza mają byc zapisywane w pliku users.dat w formacie imię;nazwisko;e-mail;zapytanie
5. Strona users ma wyświetlać dane z pliku users.dat (imie, nazwisko, e-mail). Dane te należy wyświetlać w formie tabelarycznej.
6. Strony mają wykorzystywać szablon html (+CSS) oraz podstrony mają mieć wspólną szatę graficzną. Zmieniamy tylko elementy strony w zależności od podstrony 
7. Szablon ma zawierać menu z wyborem podstrony, logo, oraz stopkę z informacją o autorze aplikacji

Podpowiedź dotycząca SPA i menu: 
<a href="index.php?page=1">main</a>
<a href="index.php?page=2">main</a>
<a href="index.php?page=3">main</a>
Patrz tablica $_GET[]
*/
?>

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
<div class="header">
    <h1>USER & PHP</h1>
</div>

<div class="row">
    <div class="col-3 col-s-3 menu">
        <ul>
          <li>{{MAIN}}</li>
          <li>{{KONTAKT}}</li>
          <li>{{USERS}}</li>     


</body>
</html>