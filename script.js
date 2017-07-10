
var mural = document.querySelector('.mural')
var btn = document.querySelector('#mudaLayout')
function mudaLayout() {
    if (mural.classList.contains('mural--linha')) {
        btn.textContent="Linha"
        mural.classList.remove('mural--linha')
    } else {
        mural.classList.add('mural--linha')
        btn.textContent="Bloco"
    }
}