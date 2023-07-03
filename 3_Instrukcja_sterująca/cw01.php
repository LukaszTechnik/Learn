<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cwiczenie 1</title>
</head>
<body>
    <h1>Ćwiczenie 01</h1>
    <!--wyswietl w ekranie przegladarki wszystkie liczby nieparzyste
    podzielne przez 7 z przedziału od 7 do 1000000 -->
    <?php
    $ile = 0;
    echo "<table border=\"2\">";
    echo "<tr>";
    for($i=7;$i<1000000;$i+=2) {
        if ($i%7==0)  {
            if ($i%9==0)
             echo "<td><span 
            style=\"background-color:red\"> $i </span></td>";
        else echo "<td>$i</td>";
        $ile++;
            if($ile==30){
                $ile=0;
                echo "</tr><tr>";
            }
    }
}
    echo "</table>";
    ?>
</body>
</html>