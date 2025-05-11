<?php

$db = new PDO('mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4', 'root', '');

$email = $_POST['email'];
$pass = $_POST['password'];

$sql = "SELECT CONCAT(firstname, ' ', lastname) as name, password FROM users WHERE email = '$email'";
$result = $db->query($sql);
$user = $result->fetch();

if (!$user) {
  echo 'Неверный email или пароль';
  exit();
}

$password_correct = password_verify($pass, $user['password']);

if (!$password_correct) {
  echo 'Неверный email или пароль';
  exit();
}

$fullName = urlencode($user['name']);

header("Location:  ../index.html?loggedIn=1&fullName=$fullName");
