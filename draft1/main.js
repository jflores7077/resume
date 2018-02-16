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
    var add = null;
    var addStr = ''
    var curText = $('.item h3').text();
    var prevWidth = ($('#body').css('width'));
    var isViewing = false;
    var cssWith = [];
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

            });

            $('p', this).css({
                'font-size':'2em',
            })
    });
    
    $('.item').mouseup(
        function(){
            $('p', this).css({
                'font-size': '1.05em'
            });
            
            curText = 'h_'+$(this).attr('id')
            add = $('#'+curText).clone();
            if(isViewing){
                console.log(cssWith)
                $('p', '#'+cssWith[i]).animate({
                    'backgroundColor': 'rgba(100,1,1,0)',
                    "width": "0rem",
                },100);
                cssWith = []
                

                $('p', this).animate({
                    'backgroundColor': 'rgba(124,1,2,0.4)',
                    "width": "5rem",
                },400);
                console.log('css:'+cssWith[0])
                

                $('#preview div').animate({
                    'top':'-180vh',
                }, 600,function(){
                    
                    isViewing = false;
                    
                });

            }else{
                $('p', this).animate({
                    'backgroundColor': 'rgba(124,1,2,0.4)',
                    "width": "5rem",
                },400);
                console.log('down:'+add.attr('id'))
                console.log('clicked:'+$(add).attr('id'))
                $('#preview').html(add);
                $(add).animate({
                    'top':'0vh',
                }, 600);
                isViewing = true;
                cssWith.push($(this).attr('id'));
            }
            
            
            
    });
    

    //dots on heading
    setInterval(function(){
        times+=1;
        addDots();
    }, 800)
};

window.onload = loaded;