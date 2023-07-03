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
/*
Rodzaje blokad:
LOCK_SH -> blokowanie odczytu. Pozwala na dzielenie pliku z innymi czytającymi.
LOCK_EX -> blokowanie zapisu. Plik wyłączony jest z użytku, nie może być współdzielony z innymi użytkownikami.
LOCK_UN -> zwolnienie istniejącej blokady.

Funkcja flock() zwróci true, jezeli blokada została prawidłowo założona, w przeciwnym wypadku zwróci false.
*/
$df="count.dat";
if(!($fp=@fopen($df,"r"))){//Jeśli plik jeszcze nie istnieje to jest inicjowany wartością 0
    $count=0;
}else{
    $count=fgets($fp,100;);
fclose($fp);
}
$count+=1;
$fp=fopen($df,"w");
//jeśli plik jest już zablokowany to skrypt zamyka i kończy działanie
if(!flock($fp,LOCK_EX)){
    fclose(fp);
    //return;

}else{//jeśli nie jest zablokowany to następuje blokada i zapis danych
    fputs($fp,$count);
    flock($fp,LOCK_UN);
    fclose($fp);
}

//funkcje informacyjne
$document_root = $_SERVER['DOCUMENT_ROOT'];
 echo "<br>";
echo "<p>Czas ostatniego odczytu: ".date("Y-m-d:H:i:s",fileatime($document_root."/8_Obsluga_plikow_i_katalogowPHP_4TB/count.dat"))."<p>";//Funkcja fileattime jest to czas ostatniego odczytu
echo "<p>Czas ostatniej modyfikacji: ".date("Y-m-d:H:i:s",fileatime($document_root."/8_Obsluga_plikow_i_katalogowPHP_4TB/count.dat"))."</p>"; //czas ostatniej modyfikacji
echo "<p>Identyfikator własciciela:".fileowner("plik.txt")."</p>";//Zwraca identyfikator uzytkownika który jest włascicielem
echo "<p>Prawa dostępu: ".fileperms("count.dat")."</p>"; //zwraca prawa dostępu do pliku
echo "<p>Wielkości pliku w bajtach: ".filzesize("plik1.txt")."</p>";//Zwraca wielkości pliku w bajtach
//kopiowanie plików
copy("plik1.txt","plik2.txt")or die("blad przy kopiuwaniu");
//zmiana nazwy
rename("plik2.txt","plik3.txt");
//usuwanie plików
unlink("plik3.txt");
//usuwanie katalogu
//rdmir("katalog");
//tworzenie latalogu
//mkdir("katalog","777");

//funkcje dotczące przetwarzania ścieżek
$path"/home/cos/plik1.txt";
echo "<p> dirname: ".dirname($path)."</p>";
echo"<p>nazwa pliku: ".basename($path)."</p>";//plik1.txt

//operacje na katalogach 
echo "<p>lista plików w katalogu: ";
if($dir=@opendir($document_root."/8_Obsluga_plikow_i_katalogowPHP_4TB/img")){
    while()
}
</body>
</html>