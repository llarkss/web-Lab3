<?php
declare(strict_types=1);
session_start();


$pdo = new PDO(
  'mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4',
  'root','',
  [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]
);


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Метод не разрешён');
}


$email    = trim($_POST['email']    ?? '');
$password = $_POST['password']      ?? '';


if ($email === '' || $password === '') {
  exit('Все поля обязательны');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit('Неверный формат email');
}

$stmt = $pdo->prepare('SELECT id, firstname, password FROM users WHERE email = ? LIMIT 1');
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || !password_verify($password, $user['password'])) {
    exit('Неверный email или пароль');
}


$_SESSION['user_id']   = (int)$user['id'];
$_SESSION['email']     = $email;
$_SESSION['firstname'] = $user['firstname'];


header('Location: index.html?loggedIn=1');
exit;
