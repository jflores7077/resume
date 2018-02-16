/* Click about to acess a better "about" page */
function readAbout(){
    var s = false;
    $('#about').click(function(){
        
        if(s){
            s= false;
            $('html').css('overflow-y','hidden');
            $('html').animate({
                'top':'0vh'
            },800);
            
            $(this).css('flex','1')
            
        }else{
            s = true;
            $('html').css('overflow-y','initial');
            
            $('html').css('position','absolute');
            $('html').animate({
                'top':'-90vh'
            },800);
            $(this).css('flex','100%')
            /*
            $('.items').each(function(){
                if($(this).attr('id') != 'about'){
                    $(this).css('color','black');
                }
            });
            */
        }
    });
}
/***********************************************/

$(document).ready(function(){
    //Reset document offset-y to 0
    $(this).scrollTop(0);

    readAbout();
});