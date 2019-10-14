// 爬取该链接跳转的地址是否在内部，不是可判定为广告？
// b站弹幕 可能是 以播放按钮为计时开关，对应弹幕以相对时间轴添加到内部  开关弹幕可隐藏，也可
//以当前播放时间为基准加载弹幕  播放时间不等于视频进度条时间  倍速播放时该定位无效
//最好 定位为进度条时间， 倍速时 弹幕数量减少？单位播放时间内弹幕数量增多，  速度加快？停留时间减少
// 弹幕关注最多在中间？开始？
 
//速度在开始和结束变慢，只在显示区域显示

var arr = [];//用于保存弹幕数据的数组；
var start = true;//用于判断是否需要开启弹幕
$(document).ready(function(){   // 所有内容加载完毕
    var showscreen = $(".qiang");//定义弹幕显示范围
    var showHeight = showscreen.height();
    var showWidth = showscreen.width();
$("#sent").click(function(){
    var danmu = $("#message").val();//把弹幕加载
    $("#message").val("");//文本框清空
    arr.push(danmu);//弹幕加载到数组中
    var sent_div = $("<div></div>");//弹幕加载到块中
    sent_div.text(text);
    showscreen.append(sent_div);//在显示区域的结尾（仍然在内部）插入弹幕块。
    // move_danmu("sent_div");
});
//设置回车发送
$("input").keydown(function(event){
    var keycode = event.which || event.keyCode;
 if(keycode == 13){
    $("#sent").trigger("click"); // trigger 触发被选元素的指定事件类型
 }
});
//关闭，开启弹幕按钮
$("#clear").click(function(){
    if(start == true){
        start = false;
        $("#clear").html("开启弹幕");
        showscreen.empty();//移除显示区域的元素内容
    }else if(start == false){
        start = true;
        $("#clear").html("关闭弹幕");
        run()
    }
});
//弹幕定位
var topMin =showscreen.offset().top;
var topMax = topMin + showHeight;
var top = topMin;
var move_danmu = function(obj){
    obj.css({
        dispaly:"inline",
        position:"absolute"
    })
var begin = showscreen.offset().left + showWidth ;
top += 50;
 if(top > topMax -50){
     top = topMin;
 } 
 obj.css({
     left:begin,
     top: top,
     color: getRandomColor(),
 });
 var time =20000 + 10*Math.random();//返回一个随机数改变速度
 obj.animate({
     left: showscreen.offset().left -obj.width()
 },time,function(){
     obj.remove();
 });
};
var getRandomColor = function(){
    return '#'+('00000' + (Math.random()*0x1000000 <<0).toString(16)).substr(-6);
}
var run = function(){
    if(start == true){
        if(arr.length > 0){
            var n = Math.floor(Math.random()* arr.length + 1) -1;
            var textObj = $("<div>" + arr[n] + "</div>" );
            showscreen.append(textObj);
            move_danmu(textObj);
        }
    }
    setTimeout(run,3000);
}
jQuery.fx.interval = 50;//调整动画运行的每秒帧数为50。
run();
});


