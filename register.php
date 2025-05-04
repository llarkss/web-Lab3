<?php
session_start();

$db = new PDO('mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4', 'root', '');

$email = $_POST['email'];
$fname = $_POST['firstName'];
$lname = $_POST['secondName'];
$pass = $_POST['password'];

$hashed_password = password_hash($pass, PASSWORD_BCRYPT);

$sql = "INSERT INTO users (lastname, firstname, email, password) 
        VALUES ('$lname', '$fname', '$email', '$hashed_password')";

$success = $db->exec($sql);

if (!$success) {
  echo 'Ошибка БД';
  exit();
}

header('Location: index.html?loggedIn=1');
exit;