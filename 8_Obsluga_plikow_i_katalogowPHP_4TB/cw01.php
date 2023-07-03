<?php
//Wczytaj dane z pliku dane.txt i podaj, które z nich są liczbami pierwszymi. Zapisz te liczby do pliku prime.txt
$file=fopen($document_root."dane.txt","r");
if($file===false){
    echo "blad otwarcia pliku";
}else{
    while(!feof($file)){
        $bufor=fgets($file);
        echo "$bufor <br>";
    }
}


?>