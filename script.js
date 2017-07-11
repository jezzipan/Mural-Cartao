
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
function removeCartao() {
    var cartao= document.querySelector('#cartao_'+this.dataset.ref);
    console.log(this.dataset.ref)
    //Uma classe que faz ele sumir lentamente//
        cartao.classList.add('cartao--some');

    //Tira page após animacao//
    setTimeout(function(){
        cartao.remove();
    },4400);

}
//pegar os botoes//
var botoes= document.querySelectorAll('.btnRemove');
    for (var i=0;i < botoes.length; i++) {
        //add o evento em cada botao//
        botoes[i].addEventListener('click', removeCartao);
    }


