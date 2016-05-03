$(function(){


    //banner
    var now=0;
    var next=0;
    var imgw=$(".banner").width();
    var banner=$('.banner li');
    console.log(banner);
    banner.eq(0).css({left:0});
    console.log(imgw)
    var t=setInterval(move,4000);
    var flag=true;
    function move(){
        if(!flag){

            return;
        }
        flag=false;
        next++;
        if(next==banner.length){
            next=0;
        }
        banner.eq(next).css({left:imgw})
        banner.eq(now).animate({left:-imgw},function(){
            flag=true;
        })
        banner.eq(next).animate({left:0})
        $('.banbtn li').removeClass('one').eq(next).addClass('one')
        now=next;
    }
    $('.bannerbox').hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,4000);
    })
    $('.btnright').click(function(){
        move();
    })
    $('.btnleft').click(function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next==-1){
            next=banner.length-1
        }
        banner.eq(next).css({left:-imgw})
        banner.eq(now).animate({left:imgw},function(){
            flag=true;
        })
        banner.eq(next).animate({left:0})
        $('.banbtn li').removeClass('one').eq(next).addClass('one')
        now=next;
    })
    $('.banbtn li').click(function(){
        if(!flag){
            return
        }
        flag=false;
        var index=$(this).index();
        //console.log(index)
        if(index<now){
            banner.eq(index).css({left:-imgw})
            banner.eq(now).animate({left:imgw})

        }else if(index>now){
            banner.eq(index).css({left:imgw})
            banner.eq(now).animate({left:-imgw})

        }
        banner.eq(index).animate({left:0},function(){
            flag=true;
        });
        $('.banbtn li').removeClass('one').eq(index).addClass('one')
        now=next=index;
    });


      var btn=$('.headbtn');
      btn.click(function(){
          var lw=$(window).width();
          if(lw>768){
              return false;
          }
        $('.nav:last-child').slideToggle("slow");
      });
       $(".footerc h3").click(function(){
               var lw=$(window).width();
               if(lw>768){
                   return false;
               }else{
                   $a=$(this).next('ul');
                   //console.log($a);
                   $a.slideToggle("slow");
               }
               });
         window.onresize=function(){
             var lw=$(window).width();
             if(lw>768){
                 $('.footerc ul').show();
                 $('.nav:last-child').show();
             }

         }



});