// 爬取该链接跳转的地址是否在内部，不是可判定为广告？
// b站弹幕 可能是 以播放按钮为计时开关，对应弹幕以相对时间轴添加到内部  开关弹幕可隐藏，也可
//以当前播放时间为基准加载弹幕  播放时间不等于视频进度条时间  倍速播放时该定位无效
//最好 定位为进度条时间， 倍速时 弹幕数量减少？单位播放时间内弹幕数量增多，  速度加快？停留时间减少
// 弹幕关注最多在中间？开始？
 
//显示
(function () {
    var getRandomColor = function(){
    return '#'+('00000' + (Math.random()*0x1000000 <<0).toString(16)).substr(-6);
}

    class Barrage {
        constructor(id) {
            this.domList = [];
            this.dom = document.querySelector('#' + id);
            if (this.dom.style.position == '' || this.dom.style.position == 'static') {
               this.dom.style.position = 'relative';
            }
            this.dom.style.overflow = 'hidden';
            let rect = this.dom.getBoundingClientRect();
            this.domWidth = rect.right - rect.left;
            this.domHeight = rect.bottom - rect.top;
        }
  
        shoot(text) {
            let div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = this.domWidth + 'px';
            div.style.top = (this.domHeight - 20) * +Math.random().toFixed(2) + 'px';
            //div.style.whiteSpace = 'nowrap';
            div.style.color = getRandomColor;
            div.innerText = text;
            this.dom.appendChild(div);
  
            let roll = (timer) => {
                let now = +new Date();
                roll.last = roll.last || now;
                roll.timer = roll.timer || timer;
                let left = div.offsetLeft;
                let rect = div.getBoundingClientRect();
                if (left < (rect.left - rect.right)) {
                    this.dom.removeChild(div);
                } else {
                    if (now - roll.last >= roll.timer) {
                        roll.last = now;
                        left -= 3;
                        div.style.left = left + 'px';
                    }
                    requestAnimationFrame(roll);
                }
            }
            roll(50 * +Math.random().toFixed(2));
        }
  
    }
  
    let barage = new Barrage('qiang');
    document.querySelector('#send').onclick = () => {
        let text = $("#message").val();
        barage.shoot(text);
    };
    var start = true;//用于判断是否需要开启弹幕
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
            $(".qiang").empty();//移除显示区域的元素内容
        }else if(start == false){
            start = true;
            $("#clear").html("关闭弹幕");
            run()
        }
    });
})

