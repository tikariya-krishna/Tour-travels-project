<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "users";

    $showAlert = false;
    if($_SERVER["REQUEST_METHOD"]  == "POST"){
        $conn= mysqli_connect($server,$username,$password,$database);
        $username =$_POST["username"];
        $password =$_POST["password"];
        $cpassword =$_POST["cpassword"];
        $exists=false;
        if(($password = $cpassword) && $exists == false){
            $sql = "INSERT INTO `users` (`uname`, `password`) VALUES ('$username', '$password');";
            $result = mysqli_query($conn,$sql);
            if($result){
                $showAlert = true;
            }
        }
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>signpu page</title>
    <link rel="stylesheet" type="text/css" href="Bootstrap/css/bootstrap.min.css">
</head> 
<body>
    <?php require 'nav.php' ?>
    <?php
    if ($showAlert){
        ?>
          <script>alert("Successfully login");</script>
        <?php
    }
      ?>
    <div class="container">
    <form action="sign.php" method="post">
  <div class="form-group">
    <label for="username">Username:-</label>
    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" name="username">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name="password">
  </div>

  <div class="form-group">
    <label for="cpassword">Conform Password</label>
    <input type="password" class="form-control" id="cpassword" name="cpassword">
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</body>
</html>