$(document).ready(function(){
    
    $('#navbar a').click(function(){
        $(this).css('font-size','0em')
        $(this).css('color','rgba(0,0,0,0)')

        if($(this).attr('id') == 's_ab'){
            var divs = 5;
            var divsSpace = 0;
            
            var collapse1 = document.createElement('div');
            var collapse2 = document.createElement('div');
            var time = 400;
            collapse1.className = 'divInward'
            collapse1.id = 'divInward1'
            
            collapse2.className = 'divInward'
            collapse2.id = 'divInward2'

            $(collapse1).css({'left': '110vw', 'background':'#ECECEA'})
            $(collapse2).css({'left': '-60vw', 'background':'#ECECEA'})

            $('body').append(collapse1)
            $('body').append(collapse2)

            $(collapse1).animate({
                'left': '50vw'
            }, time);
            $(collapse2).animate({
                'left': '0vw'
            }, time,function(){
                $('body').append($('#b_ab'))
                $('#navbar a').css('font-size','1em')
                $('#navbar a').css('color','rgba(218, 204, 204, 0.8)')
            });
            
        }

        if($(this).attr('id') == 's_cont'){

        }

        

    });

});