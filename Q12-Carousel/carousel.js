$(document).ready(function(){

    $.preloadImages = function () {
        for (let i = 0; i < arguments.length; i++) {
            $('<img>').attr('src', arguments[i]);
        }
    };

    $.preloadImages('img/img1.jpg', 'img/img2.jpg','img/img3.jpg','img/img4.jpg');

    let $img = $('#carousel img');

        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);
        $img.animate({ opacity: 0 }, 200 );
        $currentImg.animate({ opacity: 1 }, 500 );

    $('.next').click(function(){

        i++; 

        if( i <= indexImg ){

            $img.animate({ opacity: 0 }, 200 );
            $currentImg = $img.eq(i); 
            $currentImg.animate({ opacity: 1 }, 500 );

        } else{
            i = indexImg;
        }
    });

    $('.prev').click(function() {

        i--;

        if( i >= 0 ) {
            $img.animate({ opacity: 0 }, 200 );
            $currentImg = $img.eq(i);
            $currentImg.animate({ opacity: 1 }, 500 );

        } else{

            i = 0;

        }
    });

    function slideImg(){

        setTimeout(function(){

            if(i < indexImg) {
            
                i++;

            } else {

                i = 0;
            }

            $img.animate({ opacity: 0 }, 200 );
            $currentImg = $img.eq(i);
            $currentImg.animate({ opacity: 1 }, 500 );

            slideImg();

        }, 7500);
    }

    slideImg();
});