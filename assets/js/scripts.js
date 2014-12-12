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
})();