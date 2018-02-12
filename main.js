var times = 0;

function addDots(){
    var cur = $('#h_dots').text()
    cur+='.'
    cur = cur.substr(0,times)
    $('#h_dots').text(cur);
    times = times % 3;
    $('#xy').text('J');
};

function loaded(){

    //Hover
    var add = null;
    var addStr = ''
    var curText = $('.item h3').text();
    var prevWidth = ($('#body').css('width'));
    console.log(prevWidth)
    $('.item p').hover(
        function(){
            
            curText = $(this).text();
            $('#preview').animate({
                width: prevWidth,
            },420);
            $(this).css({
                'transform':'rotate(-5deg)',
                'text-decoration': 'underline'
            });
            
            addStr = '#h_'+$(this).attr('id')
            add = $(addStr).clone()
            console.log(add)
            $('#preview').append(add);
    },function(){
        curText = $(this).text();
        $(this).css({
            'transform':'rotate(0deg)',
            textDecoration: 'none'
        });
        $('#preview').animate({
            width:0,
        },320,function(){
            
            $('#preview').empty();
        });
    });
    

    //dots on heading
    setInterval(function(){
        times+=1;
        addDots();
    }, 800)
};

window.onload = loaded;