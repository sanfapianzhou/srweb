function chunk(arr, size) {
  // 请把你的代码写在这里
  var a=[];
  for (i= 0;i<arr.length;i+size){
 a.push(arr.slice(i,i+size));
  }
console(a) ;
  
}

chunk(["a", "b", "c", "d"], 2);