
var mural = document.querySelector('.mural')
var btn = document.querySelector('#mudaLayout')
function mudaLayout() {
    //toogle: add se nao tive class e se tiver// 
    if (mural.classList.toggle('mural--linha')) {
        btn.textContent="Linha"
    } else {
        mural.classList.add('mural--linha')
        btn.textContent="Bloco"
    }
}

 var btns = document.querySelectorAll('.btnRemove')
    for(var i= 0; i < btns.length; i++) {
        btns[i].addEventListener('click', removeCartao)
    }
function removeCartao() {
    var cartaoAtual= document.querySelector('#cartao_'+this.dataset.ref);
    //Uma classe que faz ele sumir lentamente//
    cartao.cartaoAtual.add('cartao--some');

    //Tira page após animacao//
    setTimeout(function(){
        cartaoAtual.remove();
    },400);

}
//pegar os botoes//
var botoes= document.querySelectorAll('.opcoesDoCartao-remove');
    for (var i=0;i < botoes.length; i++) {
        
    }

