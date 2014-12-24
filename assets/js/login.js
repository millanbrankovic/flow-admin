// Login
//------------------------------------------------------------
//


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