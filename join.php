<?php
session_start();

$pdo = new PDO(
  'mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4',
  'root','',[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]
);

$email = trim($_POST['email'] ?? '');
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit('Неверный email');
}

$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
$exists = (bool)$stmt->fetchColumn();

if ($exists) 
{
  header('Location: login.html?email=' . urlencode($email));
} 
else 
{
  header('Location: register.html?email=' . urlencode($email));
}
exit;