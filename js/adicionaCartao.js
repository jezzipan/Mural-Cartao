(function() {

console.log('Executou o arquivo adiciona cartao!')


$(".novoCartao").submit(function(event){
    //impede que a página recarregue
    event.preventDefault(); //evita comportamento padrao

    //pega o que o usuario digitou
    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo.val().trim();

    //cria os elementos do cartao e adiciona do DOM 
    if(conteudo){
        ctrlCartao.adicionaCartao(conteudo)
       $(document).trigger('precisaSincronizar')
    }
    //apaga o conteúdo do textarea
    campoConteudo.val("");
});

//funcao tipo do cartao

})()