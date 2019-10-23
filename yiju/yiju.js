//获取api中的文字
var  shi = "";
var  chuzi ="";
var   zuozhe ="";
var getQuote = function(){
$.getJSON("https://api.gushi.ci/all.json",function(json){
    var rdg = ".erg.reg。违规，外观,glyphicon-warning-sign/erg";
   shi = json["content"].replace(/，/g,"，<br>   ");
   chuzi ="——" + "《"+ json["origin"] + "》";  
    zuozhe =  json["author"];
$("#c").html(shi);
$("#d").html(chuzi);
$("#e").html(zuozhe);
});
}
getQuote();
 $(document).on('click','#taosha',function(){  
  var  getRandomColor =  function (){       //用随机数设置颜色  0x1000000 时才有可能取值ffffff
      return  ('00000'+parseInt(  Math.floor((Math.random()*0x1000000)+1)).toString(16)).substr(-6);
      //parseint（）字符串变为数字 ，parseint（字符串 ，位进制 ）按位进制换算字符串；toString（位进制）数字 转化为位进制的字符串，toString() 来把一个布尔值转换成字符串
    }
    var bgys = getRandomColor();    //把这个随机数赋给变量，可以将这个值进行调用
    var   fanse = function (){       //颜色的6位数16进制数的最大值（ffffff）进行减操作取随机颜色的反色
         return ('00000'+(parseInt("0x1000000",16) - parseInt(bgys,16)).toString(16)).substr(-6); 
     }
     // 颜色动画切换
    $('#yanse').animate({backgroundColor:'#' +bgys},1000);
    $('#b').animate({color:'#' +fanse() },1000);
    $('#taosha').animate({color:'#' +fanse() },1000);
    $('button').animate({color:'#' +fanse() },1000);
   //document.getElementById('yanse').style.backgroundColor ="#" +  bgys; 
   //document.getElementById('b').style.color ="#" + fanse();//getElementsByClassName返回大是数组，要用【n】形式
   //document.getElementById('taosha').style.color ="#" + fanse();
   //$("#taosha").css({"color":"#" + fanse()});
   //$("button").css({"color":"#" + fanse()});
   getQuote();
});
// 分享到微博
$('#twitter').click(function(){
open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + shi + '" ' + zuozhe));
});
$('#weibo').click(function(){
 open('http://service.weibo.com/share/share.php?count=&url=&title=&appkey=' + encodeURIComponent('"' + shi + '" ' + chuzi +zuozhe));
});