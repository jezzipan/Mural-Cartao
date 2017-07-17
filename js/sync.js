var usuario = "jessica.leute@gmail.com"

$.getJSON( "https://ceep.herokuapp.com/cartoes/carregar?callback=?",{usuario: usuario},
function(res){
    var cartoes = res.cartoes;
    console.log(cartoes.length + "carregados em " + res.usuario);
    cartoes.forEach(function(cartao){
        ctrlCartao.adicionaCartao(cartao.conteudo);
    });
});

$(document).on("precisaSincronizar", function(){
            var cartoes = [];
            $("#sync").removeClass("botaoSync--sincronizado")
            $("#sync").addClass("botaoSync--esperando")


        $(".cartao").each(function(){
            var cartao= {}
                cartao.conteudo= $(this).find(".cartao-conteudo").html();
                cartoes.push(cartao);
        });

        //escolha seu nome de usuario aqui 
        var mural = {
            usuario: usuario,
            cartoes: cartoes
        }
        $.ajax({
            url: "https://ceep.herokuapp.com/cartoes/salvar", method: "POST", 
            data: mural, success: function(res){
                console.log(res.quantidade + " cartoes salvos em "+ res.usuario);
            }
            ,erro: function(){
                console.log("Não foi possível salvar o mural");
            }
            ,complete:function(){
                $("#sync").removeClass("botaoSync--esperando");
            }
        })
});


$('#sync').click(function(){
    $(document).trigger('precisaSincronizar')
});
