<?php
/*declare(strict_types=1);
// 1. Настройка подключения
$pdo = new PDO(
  'mysql:host=127.0.0.1;dbname=user_db;charset=utf8mb4',
  'root','',
  [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]
);
// 2. Метод
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Метод не разрешён');
}

$L = trim($_POST['firstName']  ?? '');
$F = trim($_POST['secondName'] ?? '');
$E = trim($_POST['email']      ?? '');
$P = $_POST['password']        ?? '';
var_dump($_POST);
if ($L === '' || $F === '' || $E === '' || $P === '') {
    exit('Все поля обязательны');
}
exit;   


// 5. Валидация имени/фамилии
if (
    !preg_match('/^[\p{L}]+(?:-[\p{L}]+)*$/u', $L) ||
    !preg_match('/^[\p{L}]+(?:-[\p{L}]+)*$/u', $F)
) {
    exit('Имя и фамилия должны содержать только буквы и дефис');
}

// 6. Email
if (!filter_var($E, FILTER_VALIDATE_EMAIL)) {
    exit('Неверный формат email');
}

// 7. Пароль
if (mb_strlen($P) < 8) {
    exit('Пароль должен быть не менее 8 символов');
}
if (!preg_match('/\p{L}/u', $P) || !preg_match('/\d/', $P)) {
    exit('Пароль должен содержать букву и цифру');
}

// 8. Хеширование
$H = password_hash($P, PASSWORD_BCRYPT);

// 9. Вставка в базу
try {
    $stmt = $pdo->prepare(
      'INSERT INTO users (lastname, firstname, email, password)
       VALUES (:L, :F, :E, :H)'
    );
    $stmt->execute([
      ':L' => $L,
      ':F' => $F,
      ':E' => $E,
      ':H' => $H,
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        exit('Email уже зарегистрирован');
    }
    exit('Ошибка при сохранении в БД');
}

// 10. Результат
echo 'Регистрация прошла успешно';
*/

declare(strict_types=1);

// 1) Настройка подключения
$host = '127.0.0.1';
$db   = 'user_db';     // имя вашей БД
$user = 'root';
$pass = '';            // пароль, если вы его не меняли, оставьте пустым
$dsn  = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$opts = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $opts);
} catch (PDOException $e) {
    exit('Не удалось подключиться к БД: ' . $e->getMessage());
}

// 2) Принятие POST и валидация (минимум)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Метод не разрешён');
}

$L = trim($_POST['firstName']  ?? '');
$F = trim($_POST['secondName'] ?? '');
$E = trim($_POST['email']      ?? '');
$P = $_POST['password']        ?? '';

if ($L === '' || $F === '' || $E === '' || $P === '') {
    exit('Все поля обязательны');
}
if (!filter_var($E, FILTER_VALIDATE_EMAIL)) {
    exit('Неверный формат email');
}
if (mb_strlen($P) < 8) {
    exit('Пароль должен быть ≥ 8 символов');
}

// 3) Хеширование пароля
$H = password_hash($P, PASSWORD_BCRYPT);

// 4) Подготовленный запрос на вставку
$sql = "INSERT INTO users (lastname, firstname, email, password) 
        VALUES (:L, :F, :E, :H)";
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
      ':L' => $L,
      ':F' => $F,
      ':E' => $E,
      ':H' => $H,
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        exit('Email уже зарегистрирован');
    }
    exit('Ошибка при сохранении в БД');
}

// 5) Успех
$_SESSION['user_id'] = $pdo->lastInsertId();
$_SESSION['email'] = $email;
$_SESSION['firstname'] = $firstName;

// редирект
header('Location: index.html');
exit;