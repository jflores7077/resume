/* Click about to acess a better "about" page */
function readAbout(){
    var s = false;
    $('.items').click(function(){
        
        if(s){
            s= false;
            $('html').css('overflow-y','hidden');
            $('html').animate({
                'top':'0vh'
            },800,function(){
                
                $('html').css('position','initial');
            });
            
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
/*****************END FN readAbout******************************/

/*Chaneg heading text */

/*****************END FN changeHeadText******************************/

//Once document has loaded
$(document).ready(function(){
    //Reset document offset-y to 0
    $(this).scrollTop(0);

    //Run functions
    readAbout();
});