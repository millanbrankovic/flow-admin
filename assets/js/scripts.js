// Scripts
//------------------------------------------------------------
//


(function () {
    $(".nav-toggle").on('click', function(e) {
        e.preventDefault();

        $("body").toggleClass("toggle");
    });

    $(".main-nav a").on('click', function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
})();