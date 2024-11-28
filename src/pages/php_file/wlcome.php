<?php
    session_start();

    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true){
        header("location: login.php");
        exit;
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome <?php $_SESSION['username']?></title>
    <link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.min.css">
</head> 
<body>
    <?php require 'nav.php' ?>
    welcome <?php echo $_SESSION['username']?>
</body>
</html>