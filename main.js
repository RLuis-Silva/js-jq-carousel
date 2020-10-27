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


// NAVIGAZIONE img CON TASTIERA (usando le frecce dx/sx)
$(document).keydown(function(event){
    console.log(event.keyCode);

    if(event.keyCode == 37){        // sx
        successPrecImg('indietro');
    }else if(event.keyCode == 39){  //dx
        successPrecImg('avanti');
    }
});


/*
    FUNZIONI, le posso portare anche all' interno di document.ready
*/

// la funzione permette di passare alla foto successiva/ precedente
function successPrecImg(direzione){
    var imgAttiva = $('.images img.active');
    var cerchioAttivo = $('.nav i.active');

    //resetta la classe active
    imgAttiva.removeClass('active');
    cerchioAttivo.removeClass('active');

    //controllo parametro direzione: valori validi 'next', 'prev'
    if(direzione === 'avanti'){             // VA AVANTI
        if(imgAttiva.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            imgAttiva.next('img').addClass('active');
            cerchioAttivo.next('i').addClass('active');
        }
    }else if(direzione === 'indietro'){     // TORNA INDIETRO
        if(imgAttiva.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else{
            imgAttiva.prev('img').addClass('active');
            cerchioAttivo.prev('i').addClass('active');
        }
    }
}

