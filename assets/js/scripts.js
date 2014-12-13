// Scripts
//------------------------------------------------------------
//


(function () {

    $(".nav-toggle").on('click', function(e) {
        e.preventDefault();

        $('body').toggleClass('toggle');
        return false;
    });

    $(".overlay").on('click touchmove', function() {
        $('body').removeClass('toggle');
    });

    $(".main-nav a").on('click', function() {
        $('a').removeClass('active');
        $(this).addClass('active');
    });

    $(".ac-trigger").on('click', function() {
        $(".ac-trigger").removeClass('active');
        $(".accordion").slideUp(400);

        if($(this).next().is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next().slideDown(400);
        }
    });

    var removeClass = true;
    $(".submit").on('click', function() {
        $(".search-form").addClass('push');
        removeClass = false;
    });

    $(".search-form").on('click', function() {
        removeClass = false;
    });

    $(document).on('click', function() {
        if (removeClass) {
            $(".search-form").removeClass('push');
        }
        removeClass = true;
    });

})();





