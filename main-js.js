var contador = 1;

$(document).ready(function () {
    /* MENU */
    $(".block-icon").on("click", function () {
        if (contador == 1) {
            $('.nav-mobile-group').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.nav-mobile-group').animate({
                left: '-100%'
            });
        }
    });    
    
    $(".item-group").on("click", function () {
        if (contador != 1) {
            contador = 1;
            $('.nav-mobile-group').animate({
                left: '-100%'
            });
        }
    });
    /*FIN MENU*/  
	
	$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
});
