$(document).ready(function() {

    var itemsLenght = $('.cards-container .item').length;
    var current = 1;

    $('.total-slides').text(itemsLenght);

    $('.card-slider .btn-prev').on("click",function(){
        if(current > 1){
            current = current - 1;
            showSlide(current);
        }else{
            current = itemsLenght;
            showSlide(current);
        }
    });

    $('.card-slider .btn-next').on("click",function(){

        if(current !== itemsLenght){
            current = current + 1;
            showSlide(current);
        }else{
            current = 1;
            showSlide(current);
        }
    });


    function showSlide(slideNumber){
     $('.cards-container .item').removeClass('active');
     $('div[data-id="'+ slideNumber +'"]').addClass('active');

     $('.current-slide').text(slideNumber)

    }

});
