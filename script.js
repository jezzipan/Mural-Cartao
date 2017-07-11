
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

 btn = document.querySelector('#btnRemove')

 btn.addEventListener('click', removeCartao)
 function removeCartao() {
    document.querySelector('.cartao').classList.add('.cartao--some')
}

