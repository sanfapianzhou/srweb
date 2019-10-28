// var  shi = "";
// var   zuozhe ="";
//天气预报
    var hq = [],
    wang1 = "http://wthrcdn.etouch.cn/weather_mini?city=",
    wang2 = "http://api.k780.com:88/?app=weather.today&weaid=北京&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json"
    th = "";


function getyubao(wang1) {
    $.getJSON(wang1, function (json1) {
        for (var i = 0; i < 6; i++) {
            for (var i in json1.data.yesterday) {
                hq.push(json1.data.yesterday[i]);
                th = hq[4] + "</br>" + hq[2];
                hq[1] = th + "</br>";
            } th = hq[5].split('[')[2].split(']')[0];
            hq[2] = hq[3] + th + "</br>";
            hq[3] = hq[6];
            hq[4] = "";
            hq[6] = "";
            hq[0] = hq[0] + "</br>";
        }
        $(".yester").html(hq);
        $("#chengs").html(json1.data.city);
        for (var i = 0; i < 5; i++) {
            //for(var j=0;j<6;j++){
            window["hq" + i] = "";// 定义变量，否则相加出现underfind
            for (var j in json1.data.forecast[i]) {
                window["hq" + i] += json1.data.forecast[i][j] + ",";
                window["hq" + i] = window["hq" + i].split(",");

            } th = window["hq" + i][3] + "</br>" + window["hq" + i][1] + "</br>";
            window["hq" + i][1] = th;
            th = window["hq" + i][2].split('[')[2].split(']')[0];
            window["hq" + i][2] = window["hq" + i][4] + th + "</br>";
            window["hq" + i][3] = window["hq" + i][5];
            window["hq" + i][4] = "";
            window["hq" + i][5] = "";
            window["hq" + i][0] = window["hq" + i][0] + "</br>";
        }
        $(".today").html(hq0);
        $(".torrow").html(hq1);
        $(".disit").html(hq2);
        $(".diwut").html(hq3);
        $(".diliut").html(hq4);
        //$("#today").html(shi);
    });
}
getyubao("http://wthrcdn.etouch.cn/weather_mini?city=北京")
//实时天气
var getshshi = function(wang2){
    $.getJSON(wang2,function(json2){
   $("img").attr('src' ,json2.result.weather_icon);  //给img标签加载图片网页
     $("#drqw-wd").html(json2.result.temperature_curr.slice(0,length-1));
     $("#drtq").html(json2.result.weather_curr);
     $("#kqzhl").html(json2.result.aqi);
     $("#xzfx").html(json2.result.wind);
     $("#xzfs").html(json2.result.winp);
     $("#xzsd").html(json2.result.humidity);
    });
    }
    getshshi("http://api.k780.com:88/?app=weather.today&weaid=北京&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json");
//获取城市名
function sousuo() {
    chshi = $("#sous").val()//在函数中赋值
    let urlResearch = wang1 + chshi
    let urlResearch2 = wang2.replace(/北京/g,chshi)
        hq = []
    getyubao(urlResearch)
    getshshi(urlResearch2)
    console.log($("#drtq").html())
 };