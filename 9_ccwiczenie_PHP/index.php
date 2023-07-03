<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Napisz skrypt, który będzie generował losowe liczby z przedziału od 1 do 1000.Będziemy sprawdząć ile razy powórzyły się wylosowane liczby</p>
    <?php
    //funkcja, która generuje losowe liczby i umieszcza je w podanej tablicy.
    function randomNumberArray($left,$right,$count){
        $tab=array();
        for ($i=0;$i<$count;$i++){
            $tab[$i]=rand($left,$right);
            }
            return $tab;
    }
    function showArray($tab){
        foreach($tab as $value){
            echo "$value | ";
        }
        echo "<p><hr></p>";
    }
    function staticNumberOfArray($tab){
        $t=array();
        $count=count($tab);
        $i=0;
        while($i<$count){
            if ($tab[$i]==0) $i++;
            else{
                $key=(string)$tab[$i];//rzutowanie typów 
                $x=$tab[$i];
                //$t[$key]=0;
                $k=0;
                //zliczanie ile razy wystąpiła wartość $x
                for ($j=$i;$j<$count;$j++){
                    if ($tab[$j]==$x){
                        $tab[$j]=0;
                        $k++;
                    }
                }
                $t[$key]=$k;//tablica asocjacyjna
                $i++;
            }
        }
        return $t;
    }

    $tablica=randomNumberArray(10,500,1000);
    showArray($tablica);
    print_r(staticNumberOfArray($tablica));
    ?>
</body>
</html>