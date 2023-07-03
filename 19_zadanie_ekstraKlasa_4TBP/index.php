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
$file=fopen("https://gol24.pl/ekstraklasa/tabela/","r");
if($file==false){
    echo "blad otwarcia pliku";
}else{
    while(!feof($file)){
        $bufor=fgets($file);
        echo"$bufor";
    }
    fclose($file);
}
    ?>
</body>
</html>