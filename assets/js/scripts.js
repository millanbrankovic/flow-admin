// Scripts
//------------------------------------------------------------
//


(function () {



    // Nav Toggle
    $(".nav-toggle").on('click', function(e) {
        e.preventDefault();

        $('body').toggleClass('toggle');
        return false;
    });



    // Overlay
    $(".overlay").on('click touchmove', function() {
        $('body').removeClass('toggle');
    });



    // Toggle
    $(".main-nav a").on('click', function() {
        $('a').removeClass('active');
        $(this).addClass('active');
    });



    // Accordion
    $(".ac-trigger").on('click', function() {
        $(".ac-trigger").removeClass('active');
        $(".accordion").slideUp(400);

        if($(this).next().is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next().slideDown(400);
        }
    });



    // Search Form
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



    // Login Form
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



    // Tabs
    $(".tabs-links a").on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });



    // Easypiechart
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



    // Analytics Chart
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
    labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
    datasets : [
        {
            label: "Sales",
            fillColor : "rgba(103, 212, 129, 0.3)",
            strokeColor : "#67d481",
            pointColor : "#1d9f3c",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#67d481",
            pointHighlightStroke : "#1d9f3c",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            label: "Orders",
            fillColor : "rgba(79, 197, 234, 0.3)",
            strokeColor : "#4fc5ea",
            pointColor : "#008cee",
            pointStrokeColor : "#fff",
            pointHighlightFill : "$4fc5ea",
            pointHighlightStroke : "#008cee",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

    }

        window.onload = function(){
        var ctx = document.getElementById("analytics-chart").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true
        });
    }



    // Datepicker
    var picker = new Pikaday(
    {
        field: document.getElementById('datepicker'),
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

