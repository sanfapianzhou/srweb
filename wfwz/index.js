// 动态显示时间
function showTime() {
  var date =new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  month=addzero(month);
  day=addzero(day);
  hour=addzero(hour);
  minute=addzero(minute);
  second=addzero(second);
  var time =year +'年'+month +'月'+day +'日'+hour+':' + minute +':' + second;
  document.getElementById('cometime').innerHTML =time;
}

function addzero(num){
if(num<10){
  num='0'+num;
}
return num;
}
showTime();
setInterval(showTime,1000);

var box=document.getElementById("box");
var l1=document.getElementById("listt1");
var l2=document.getElementById("listt2");
l2.innerHTML=l1.innerHTML;
function scrollup2(){
  if(box.scrollTop>=l1.offsetHeight){
    box.scrollTop=0;
  }else{
    box.scrollTop++;
  }
}
var scrollMove1=setInterval(scrollup2,30);
box.onmouseover=function(){
  clearInterval(scrollMove1)
}
box.onmouseout=function(){
  scrollMove1=setInterval(scrollup2,30);
}



var mychart = echarts.init(document.getElementById('echars-renliu'));
var option={
  tooltip:{
    trigger:'item',
    formatter:"{a} <br/>{b}: {c} ({d}%)"
  },
  legend:{
    orient:'vertical',
    x: 'right',
    data:['实时人流','邮件营销','联盟广告']
  
  },
  textstyle:{
    color:'rgba(255,255,255)',
    fontsize: 10
  },
  tooltip:{
    confine: true
  },
  series:[
    {
      name:'访问来源',
      type:'pie',
      radius:['50%','70%'],
      avoidlabeloverlap:false,
      label:{
        normal:{
          show: false,
          position:'center'
        },
        emphasis:{
          show: true,
          textstyle: {
            fontsize: '15',
            fontweight: 'bold'
          }
        }
      },
      labelLine:{
           normal:{
           show: true
        }
      },
      data:[
        {value:335,name:'实时人流'},
        {value:310,name:'邮件营销'},
        {value:234,name:'联盟广告'}
      ]
    }
  ]
};

mychart.setOption(option);


optionstopcar = {
  legend: {},
  tooltip: {},
  dataset: {
      source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
};
var myCharttingche = echarts.init(document.getElementById('echars-tingche'));
myCharttingche.setOption(optionstopcar)

clearInterval(timer);
var timer = setInterval(function(){
  getTime();
},500);
function changeKongqi(){
  var tempnum1 = Math.floor(Math.random()*(100-50 + 1) + 50)
  var tempnum2 = Math.floor(Math.random()*(200-100 + 1) + 100)
  var tempnum3 = Math.floor(Math.random()*(89-80 + 1) + 80)
  $('#kongqi1').addClass('rotateInDownLeft')
  $('#kongqi2').addClass('rotateInDownLeft')
  $('#kongqi3').addClass('rotateInDownLeft')
  $('#kongqi1').text(tempnum1)
  $('#kongqi2').text(tempnum2)
  $('#kongqi3').text(tempnum3)
}
changeKongqi()
clearInterval(timer);
var timer2 = setInterval(function() {
  changeKongqi()
}, 3000);

var box1=document.getElementById("box1");
var l3=document.getElementById("listt3");
var l4=document.getElementById("listt4");
l4.innerHTML=l3.innerHTML;
function scrollup(){
  if(box1.scrollTop>=l3.offsetHeight){
    box1.scrollTop=0;
  }else{
    box1.scrollTop++;
  }
}
var scrollMove=setInterval(scrollup,40);
box1.onmouseover=function(){
  clearInterval(scrollMove)
}

box1.onmouseout=function(){
  scrollMove=setInterval(scrollup,40);
}