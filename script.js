
var mural = document.querySelector('.mural')
var btn = document.querySelector('#mudaLayout')
function mudaLayout() {
    //alert('Executou o muda layout')
    //toogle: add se nao tive class e se tiver//
    //mural.classList.toggle('mural--linha') 
    console.log('Executou antes do if')
    if (mural.classList.contains('bgpreto')) {// Se o elemento contem a classe
        mural.classList.remove('mural--linha')
        btn.textContent="Linha"
        console.log('Executou apos o if')
    } else { // Se o mural não tiver a classe faça este código
        //mural.classList.add('mural--linha')
        console.log('Executou o remove do if')
        mural.classList.add('mural--linha')
        btn.textContent=("Bloco");
    }
}



