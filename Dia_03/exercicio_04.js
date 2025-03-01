/*4. Sistema de Acesso
 Para acessar uma área restrita, o usuário deve inserir a senha correta e não pode estar
 bloqueado.
 Dados:
 ● Senhainserida: "abcd1234"
 ● Senhacorreta: "abcd1234"
 ● Usuário bloqueado: False
 Verifique se o acesso deve ser concedido.
*/
let senha_inserida = "abcd1234"
let senha_correta = "abcd1234"
let validacao_senha = senha_inserida === senha_correta

if(!validacao_senha){
    console.log("Senha incorreta acesso negado")
}
else{
    console.log("Senha correta acesso liberado!")
}