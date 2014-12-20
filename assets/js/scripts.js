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



    $(".login-form-inputs").on('focus', function(e){
        $(this).parent().addClass('active');
    });

    $(".login-form-inputs").on('blur', function(e){
        if (!$(this).val()){
            $(this).parent().removeClass('active');
        }
    });

    $(".login-form-inputs").each(function(i, item){
        if($(item).val()){
            $(this).parent().addClass('active');
        }
    });



    $(".tabs-links a").on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });



    $('.chart.blue').easyPieChart({
        barColor: '#4fc5ea',

        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart.green').easyPieChart({
        barColor: '#67d481',

        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var chart = window.chart = $('.chart').data('easyPieChart');
        $('.js_update').on('click', function() {
            chart.update(Math.random()*200-100);
    });



    Morris.Line({
      element: 'analytics-chart',
      data: [
        { y: '2004', a: 14, b: 18 },
        { y: '2006', a: 58, b: 24 },
        { y: '2008', a: 32, b: 51 },
        { y: '2010', a: 61, b: 42 },
        { y: '2012', a: 63, b: 87 },
        { y: '2014', a: 82, b: 58 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Sales', 'Orders']
    });



    var picker = new Datepicker (
        {
            field: $('.datepicker')[0],
            firstDay: 1,
            minDate: new Date('2000-01-01'),
            maxDate: new Date('2020-12-31'),
            yearRange: [2000,2020],
            onSelect: function() {
                var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
            }
        });

        picker.setMoment(moment().dayOfYear(366));


})();

