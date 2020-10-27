console.log("funziona jQuery", jQuery);


$(document).ready(function(){

    // click sull' icona con classe "next" rievoca la funzione 'successPrecImg'
    $('.next').click( function(){
        successPrecImg('avanti');
    });

    $('.prev').click(function() {
        successPrecImg('indietro');
    });
});

// la funzione permette di passare alla foto successiva/ precedente
function successPrecImg(direzione){
    var imgAttiva = $('.images img.active');
    var cerchioAttivo = $('.nav i.active');

    //resetta la classe active
    imgAttiva.removeClass('active');
    cerchioAttivo.removeClass('active');

    //controllo parametro direzione: valori validi 'next', 'prev'
    if(direzione === 'avanti'){
        if(imgAttiva.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            imgAttiva.next('img').addClass('active');
            cerchioAttivo.next('i').addClass('active');
        }
    }else if(direzione === 'indietro'){
        if(imgAttiva.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }
    }
}