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
        sleep(3);
        $res = "";

        foreach(new DirectoryIterator('wiersze/') as $file){
            if(!$file->isDot()){
                $tmp = $file->getFilename();
                $tmp = substr($tmp, 0, strlen($tmp)-5);
                $ret .= $tmp.";";
            }
        }$ret.
</body>
</html>