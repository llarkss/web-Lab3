<?php
session_start();

$conn = new PDO(
  'mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4',
  'root',''
);

$em = $_POST['email'];

$em = trim($em);

if ($em == '') {
  echo 'Неверный email';
  exit();
}

$sql = "SELECT id FROM users WHERE email = '$em'";
$result = $conn->query($sql);
$exists = false;

if ($result->rowCount() > 0) {
  $exists = true;
}

if ($exists == true) 
{
  header("Location: login.html?email=$em");
} 
else 
{
  header("Location: register.html?email=$em");
}
exit;