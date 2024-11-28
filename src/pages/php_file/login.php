<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "users";

    $login = false;
    $showError = false;
    if($_SERVER["REQUEST_METHOD"]  == "POST"){
        $conn= mysqli_connect($server,$username,$password,$database);
        $username =$_POST["username"];
        $password =$_POST["password"];
        
       
            $sql = "select * from login_table where uname='$username' AND password='$password'";
            $result = mysqli_query($conn,$sql);
            $num = mysqli_num_rows($result);
            if($num == 1){
                $login = true;

                session_start();
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $username;
            }
            else{
                $showError = "invalid cendidet";
            }
        }

        // if ($login){
        //     ?>
        //       <script>alert("Successfully login");</script>
        //     <?php
        // }
?>

