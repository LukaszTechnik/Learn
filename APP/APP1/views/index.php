<?php

    $request= $_SERVER['REQUEST_URI'];
    echo $_SERVER['DOCUMENT_ROOT']'<br>';
    echo $request;
    switch($request){
        case'/':
            require __DIR__ .'/views/index.php';
            break;
        case '':
            require __DIR__ .'/views/index.php';
            break;
        case '/about':
            require __DIR__ . '/views/index.php';
            break;
        default:
        http_response_code(404);
        require __DIR__.'/views/index.php';
        break;
    }
?>