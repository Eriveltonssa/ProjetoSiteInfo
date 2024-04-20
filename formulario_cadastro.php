<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fomulário</title>
</head>
<body>


<?php
$host = $_SERVER['HOST'];
$db = $_SERVER['DB'];
$user = $_SERVER['USER'];
$pass = $_SERVER['PASS'];

require_once('config.php');

$conexao = new mysqli($config['host'], $config['user'], $config['pass'], $config['db']);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
// $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
$senha = $_POST['senha'];


 //verifica se o email exite no bd
 $verificaEmail = "SELECT * FROM bd_gamer WHERE email = '$email'";

 $resultadoDados = mysqli_query($conexao, $verificaEmail);

 if(mysqli_num_rows($resultadoDados)> 0){

 echo "<script>alert('Alerta! E-mail já possui cadastro, informe outro email.');</script>";
 echo "<script>window.location = 'cadastro.html';</script>";
 exit();
 
 }






$query = "INSERT INTO bd_gamer (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conexao->query($query) === TRUE) {
    echo "<script>alert('Usuário cadastrado com sucesso!')</script>";
    header('Refresh: 0; URL = login.html');
} else {
    echo "Erro ao cadastrar o usuário: " . $conexao->error;
    header('Refresh: 0; URL = cadastro.html');
}

$conexao->close();
?>














    
</body>
</html>