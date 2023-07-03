//----Menu action-------------------
$('#btn1').click(function(){

    if ($('#menu').position().left >= 0) {

        $('#menu').animate(

            {

                left: '-300px',

                backgroundColor: "rgba(68, 10), 195,0.5"



            }, 500);

            $('#menu').css('width', '350px');

       

    } else {

        $('#menu').animate(

            {

               

                left: "0px",

                backgroundColor: "rgba(190, 10), 185,1"



            }, 700);



        $('#menu').animate(

            {

                left: "0px",

                width: "300px"

            }, 300);

           

    }

});



$('.item').click(function(e){

    if ($(this).next('.item-data').css('display') != 'block') {

        $('.active').slideUp('fast').removeClass('active');

        $(this).next('.item-data').addClass('active').slideDown('slow');

    } else {

        $('.active').slideUp('fast').removeClass('active');

    }

})
//----Carousel Action---------------------
let carousel = $('#carousel');
let treshold = 150;
let slideWidth = 200;
let dragStart, dragEnd;
//dołączenie obsługi zdarzeń
carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return true;
    dragStart=event.pageX;
    $(this).on('mousemove', function(){
        dragEnd=event.pageX;
        $(this).css('transform', 'translateX('+dragPos()+'px')
    })
    $(this).on('mouseup', function(){
        if (dragPos()>treshold){
            return shiftSlide(1);
        }
        if (dragPos()<-treshold){
            return shiftSlide(-1);
        }
        shiftSlide(0);
    })
})

function dragPos(){
    return dragEnd-dragStart;
}

function shiftSlide(direction){
    dragEnd=dragStart;
    $(this).off('mouseup');
    carousel.off('mousemove');
    setTimeout(function(){
        if (direction===1){
            $('.slide:first').before($('.slide:last'));
        }else if (direction===-1){
            $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition')
        carousel.css('transform', 'translateX(0px)');
    $('#view').css('background-image', 'url("'+$('.slide')[3].src+'")');
    },700)
}
