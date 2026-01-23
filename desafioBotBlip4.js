let mensagem = gets();
let mensagemPadronizada = alterarCaixaAlta(mensagem);
console.log(mensagemPadronizada);

function alterarCaixaAlta(texto){
    return texto.toUpperCase();
}