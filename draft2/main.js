$(document).ready(function(){
    $(this).scrollTop(0);
    var s = false;
    $('#about').click(function(){
        if(s){
            s= false;
            $('*').css('overflow-y','hidden');
        }else{
            s = true;
            $('*').css('overflow-y','initial');
        }
    });
});