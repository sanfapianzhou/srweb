
// 获取head该元素自身的实际高度
// $('.head').height(); tyle="position: relative;top:-80px
// 根据获取的元素高度决定暗锚的偏移
$(function(){
  var offset = $('.head').height();
  $(document).on('click','#bs-navbar a',function(event){
  //点击导航后，导航栏隐藏
    $(".navbar-collapse").collapse('hide');
    event.preventDefault();
    var anchor = $(this).attr('id');
    var el = $('a[id="k'+anchor+'"]');
    console.log()
    var toTop = el.offset().top - $('.head').height() ;
    if (toTop <= offset) {
      toTop;
    
      }   
    //  $(window).scroll(function(){
    //   if(el.offset().top <= $(window).scrollTop()){
    //     $('.navbar-collapse a').removeClass("c");
    //     $(this).addClass("c");
    //   }  
    // });
    $('html,body').animate({
      // 移动totop 的长度加上5px
      scrollTop: toTop +20
    },'slow');
    return false;
  });
  $(window).scroll(function(){
                 var wst =  $(window).scrollTop() ;//滚动条距离顶端值
        for (i=1; i<4; i++){             //加循环
         if($("#kk"+i).offset().top <= wst + offset){ //判断滚动条位置
          $('.nav a').removeClass("xianshi1"); //清除c类
          $("#k"+i).addClass("xianshi1");	//给当前导航加c类
          }
        }
        // $('#nav a').click(function() {
        //   $('.nav a').removeClass('xianshi1');
        //   $(this).addClass('xianshi1');
        //     });      
    });
  });
