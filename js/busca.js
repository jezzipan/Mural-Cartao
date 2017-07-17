$('#busca').on('input', function(){
    console.log('Busca')
    //guarda o valor digitado, removendo espacos extras.
    var busca = $(this).val().trim();

    if(busca.length){
        $('.cartao').hide().filter(function(){
            return $(this).find('.cartao-conteudo').text().match(new RegExp(busca, 'i'));
    
        }).show();
    }else{
        $('.cartao').show();
    }
});