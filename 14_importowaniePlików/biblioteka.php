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
    function generujArtykul($numer){
        $naglowek = "<h1>$numer. Witamy w świecie technologii webowych!<h1>";
        
        $artykul = "<p>Technologie webowe rezwijają się w ostatnich latach w szybkim tempie. Najpopularniejszą technologią pozostaje PHP oraz framework zbudowane w oparciu o język PHP.</p>";

        $podpis = "<b>Bartlomiej Mila</b>";
        return $naglowek.$artykul.$podpis
    }



    function loadWebSite($title,$body){
        $document_root = $_SERVER['DOCUMENT_ROOT'];
        $file=fopen($document_root."/14_importowaniePlików/template.html","r");
        $temp=fread($file, filesize($document_root."/14_importowaniePlików/template.html","r"));
        fclose($file);
        $temp=str_replace("{{title}}",$title, $temp);
        $temp=str_replace("{{body}}",$title, $temp);
        echo $temp;
    }
</body>
</html>