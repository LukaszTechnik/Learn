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
function primeFactors($n){
    $p=ceil(sqrt($n));
    $k=2;
    $index=0;
    $factortab=array();
    while ($n>1 && $k<=$p){
        while ($n%$k==0){
            $factortab[$index++]=$k;
            $n/=$k;
        }
        ++$k;
    }
    if ($n>1) $factortab[$index]=$n;
    return $factortab;
}
print_r(primeFactors(2477512));
?>
</body>
</html>