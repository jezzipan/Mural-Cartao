var ctrlCartao = (function() {
    
    


    function adicionaCartao(conteudo) {
        contador++;
        console.log('Todo carta criado tem um novo valor no contador: ',contador)
        console.log('soma um contador')

        var botaoRomove = $('<button>').addClass('opcoesDoCartao-remove')
                            .attr('data-ref',contador)
                            .text('x')
                            .click(window.removeCartao);
        var opcoes = $('<div>').addClass('opcoesDoCartao')
                                .append(botaoRomove);
                    
        var tipoCartao = decideTipoCartao(conteudo);
        console.log()
        
        //cria cartao
        var conteudoTag = $("<p>").addClass("cartao-conteudo").append(conteudo);
        console.log(conteudoTag)
        
        //cria atributo data-ref no botaoRemove
        //$("<article>").addClass("cartao").append(conteudoTag).prependTo(".mural");
        console.log('cria atributo data-ref no botaoRemove')
        //cria atributo id no cartao
        $("<article>").attr('id','cartao_'+contador)
                        .addClass('cartao')
                        .append(opcoes)
                        .append(conteudoTag)
                        .prependTo('.mural');
        console.log('cria atributo id no cartao')
    }

    function decideTipoCartao(conteudo){
        var quebras = conteudo.split('<br>').length;
        var totalDeLetras = conteudo.replace(/<br>/g, '').length;
        var ultimoMaior = '';
        conteudo.replace(/<br>/g, '').split('').forEach(function(palavra){
            if(palavra.length > ultimoMaior.length) {
                ultimoMaior = palavra;
            }
        });

        var tamMaior = ultimoMaior.length;

        //no minimo, todo cartao tem o texto pequeno
        var tipoCartao = "cartao--textoPequeno";

        if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
            tipoCartao = 'cartao--textoGrande';
        }else if (tamMaior <12 && quebras < 6 && totalDeLetras < 75){
            tipoCartao = 'cartao--textoMedio';
        }
        return tipoCartao;
        
    }

    return { 
        adicionaCartao: adicionaCartao
        //decideTipoCartao: decideTipoCartao
    }
})()