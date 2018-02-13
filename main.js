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
    var curText = 'none';
    var overText= 'none';
    var add = null;
    var addStr = ''
    var curText = $('.item h3').text();
    var prevWidth = ($('#body').css('width'));
    
    $('.item').hover(
        function(){
            $(this).css({
                'transform':'rotate(-5deg)',
                'text-decoration': 'underline'
            });     
    },function(){
        $(this).css({
            'transform':'rotate(0deg)',
            textDecoration: 'none'
        });
    });

    $('.item').mousedown(
        function(){
            $(this).css({
                'transform':'rotate(0deg)',
                textDecoration: 'none',
                'font-size':'2em',

            });
    });
    
    $('.item').mouseup(
        function(){
            $(this).css({
                'font-size': '1em'

            });
            
    });
    

    //dots on heading
    setInterval(function(){
        times+=1;
        addDots();
    }, 800)
};

window.onload = loaded;