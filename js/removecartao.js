
(function() {
    console.log('Executou o arquivo remove cartao!')
//pegar os botoes//
var botoes= document.querySelectorAll('.btnRemove');

function removeCartao() {
    var cartao= document.querySelector('#cartao_'+this.dataset.ref);
    console.log(this.dataset.ref)
    //Uma classe que faz ele sumir lentamente//
        cartao.classList.add('cartao--some');

    //Tira page após animacao//
    setTimeout(function(){
        cartao.remove();
    },100);
}

for (var i=0;i < botoes.length; i++) {
    //add o evento em cada botao//
    botoes[i].addEventListener('click', removeCartao);
}

window.removeCartao=removeCartao
})();

