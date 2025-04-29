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

$email      = trim($_POST['email']      ?? '');
$firstName  = trim($_POST['firstName']  ?? '');
$secondName = trim($_POST['secondName'] ?? '');
$password   = $_POST['password']        ?? '';

if ($email === '' || $firstName === '' || $secondName === '' || $password === '') {
  exit('Все поля обязательны');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit('Неверный формат email');
}
if (mb_strlen($password) < 8 ||
    !preg_match('/\p{L}/u', $password) ||
    !preg_match('/\d/', $password)) {
  exit('Пароль должен быть ≥8 символов, содержать букву и цифру');
}

$hash = password_hash($password, PASSWORD_BCRYPT);
try 
{
  $stmt = $pdo->prepare(
    'INSERT INTO users (lastname, firstname, email, password)
     VALUES (:ln, :fn, :em, :pw)'
  );
  $stmt->execute([
    ':ln' => $secondName,
    ':fn' => $firstName,
    ':em' => $email,
    ':pw' => $hash,
  ]);
} 
catch (PDOException $e) 
{
  if ($e->getCode() === '23000') {
    exit('Email уже зарегистрирован');
  }
  exit('Ошибка БД');
}

$_SESSION['user_id']   = (int)$pdo->lastInsertId();
$_SESSION['email']     = $email;
$_SESSION['firstname'] = $firstName;

header('Location: index.html?loggedIn=1');
exit;
