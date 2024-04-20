<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario login</title>
</head>
<body>





<?php
// login.php
// $host = $_SERVER['HOST'];
// $db = $_SERVER['DB'];
// $user = $_SERVER['USER'];
// $pass = $_SERVER['PASS'];


require_once('config.php'); // Inclua o arquivo de configuração com as informações de conexão

$conexao = new mysqli($config['host'], $config['user'], $config['pass'], $config['db']);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}

$email = $_POST['email'];
$senha = $_POST['senha'];

// Consulta para verificar a conta
$consulta = "SELECT * FROM bd_gamer WHERE email = '$email' AND senha = '$senha'";
$resultado = $conexao->query($consulta);

// Verificar se a consulta retornou algum resultado
if ($resultado->num_rows > 0) {
    echo "<script>alert('Usuário autenticado com sucesso.')</script>";
    header('Refresh: 0; URL = principal.html');
    exit();
} else {
    echo "<script>alert('Email ou senha invalidos, verifique os dados!')</script>";
    header('Refresh: 1; URL = login.html');
    
}

// Fechar a conexão
$conexao->close();


?>






    
</body>
</html>