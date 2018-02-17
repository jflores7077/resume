$(document).ready(function(){
    function ran(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    mouse = {
        "x":-1,
        "y":-1,
    }
    $(this).click(function(event){
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        var div = document.createElement('div');
        var divSize = 0;
        var color = 'rgb('+ran(0,255)+','+ran(0,255)+','+ran(0,255)+')'
        div.style.borderColor = color;
        div.className = 'circle';
        div.style.width = divSize + 'px'
        div.style.height = divSize + 'px'
        div.style.top = (mouse.y-divSize/2)+'px';
        div.style.left = (mouse.x-divSize/2)+'px';
        $('body').append( div );
        
        $(div).css({
            'border-color': 'black',
            'width': '150px',
            'height': '150px',
            'left':$(div).position().left-(150/2)+'px',
            'top':$(div).position().top-(150/2)+'px',
            'borderColor': '#ffffff',
            'opacity': '0'
            
        })
        
        console.log($(div).position().top)
    })
    
    $('#xavi').hover(function(){
        var de = Math.floor(Math.random() * 3);
    })

    var clickedList = [true,true]
    $('#nav a').hover(function(){
        var rgb = [Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) ]
        $('#head').css('background','rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')');
    },function(){
        $('#head').css('background','#ffffff');
    });
    $('#nav a').mousedown(function(){
        var rgb = [Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) ]
        $('#head').css('background','rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')');
    })
    $('#b_back').click(function(){
        $('html').animate({
            'top':'0vh'
        },500);
        
        clickedList[0] = true;
    })
    $('#nav a').click(function(){
        $('#head').css('background','#ffffff');
        if($(this).attr('id')=='h_cont'){
            if($('#body').find( "#b_ab").attr('id')=='b_ab'){
                $("#hidden").append($('#b_ab'))
            }
            if(clickedList[1]){
                clickedList[1] = false;
                $('#body').append( $('#b_contact') );
                $('html').css('position','absolute');
                $('html').animate({
                    'top':'-10vh'
                },500);
            }else{
                console.log(2)
                $('html').animate({
                    'top':'0vh'
                },500);
                clickedList[1] = true;
            }
            
        }
        if($(this).attr('id')=='h_ab'){
            if($('#body').find( "#b_contact").attr('id')=='b_contact'){
                $("#hidden").append($('#b_contact'))
            }

            if(clickedList[0]){
                clickedList[0] = false;
                $('#body').append( $('#b_ab') );
                $('html').css('position','absolute');
                $('html').animate({
                    'top':'-100vh'
                },500);
            }else{
                console.log(2)
                $('html').animate({
                    'top':'0vh'
                },500);
                clickedList[0] = true;
            }
        }

    });
});