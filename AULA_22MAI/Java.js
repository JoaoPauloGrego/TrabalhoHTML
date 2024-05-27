function SENAI() {
    $usuario = this.FORM1.Usuário.value;
    $Senha = this.FORM1.Senha.value;

    if ($usuario.length > 4 && $Senha.length > 5) {
        window.location.href = 'http://127.0.0.1:5500/index3.html';
    } else {
        window.location.href = 'http://127.0.0.1:5500/index2.html';
    }
    return false;
}