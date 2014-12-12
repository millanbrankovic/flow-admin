// Scripts
//------------------------------------------------------------
//


(function () {

    $(".nav-toggle").on('click', function(e) {
        e.preventDefault();

        $("body").toggleClass("toggle");
        return false;
    });

    $(".overlay").on('click touchmove', function(e) {
        $("body").removeClass("toggle");
    });

    $(".main-nav a").on('click', function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });

    $('.ac-trigger').on('click', function(e) {
        $('.ac-trigger').removeClass('active');
        $('.accordion').slideUp(400);

        if($(this).next().is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next().slideDown(400);
        }
    });

})();