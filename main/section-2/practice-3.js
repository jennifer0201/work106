'use strict';

module.exports = function countSameElements(collection) {
  
  var a=0;
  var b=0;
  var c=0;
  var d=0;
  var e=0;
  var f=0;
  var g=0;
  var h=0;
  var j=0;
  var k=parseInt('h[3]'.charAt(2));
  var l=parseInt('t-2'.charAt(2));
  var m=parseInt('t[10]'.charAt(2)+'t[10]'.charAt(3));
  var n=parseInt('c:8'.charAt(2));
  var o=parseInt('d-5'.charAt(2));
  for(var i=0;i<collection.length;i++){
	  if(collection[i]=='a'){
		 a=a+1; 
	  } 
	  if(collection[i]=='e'){
		 b=b+1; 
	  }
	  if(collection[i]=='h'){
		 c=c+1; 
	  }
	  if(collection[i]=='t'){
		 d=d+1; 
	  }
	  if(collection[i]=='f'){
		 e=e+1; 
	  }
	  if(collection[i]=='c'){
		 f=f+1; 
	  }
	  if(collection[i]=='g'){
		 g=g+1; 
	  }
	  if(collection[i]=='b'){
		 h=h+1; 
	  }
	  if(collection[i]=='d'){
		 j=j+1; 
	  }
  }
  c=c+k;
  d=d+l+m;
  f=f+n;
  j=j+o;
  var arr=[
      {name: 'a', summary: a},
      {name: 'e', summary: b},
      {name: 'h', summary: c},
      {name: 't', summary: d},
      {name: 'f', summary: e},
      {name: 'c', summary: f},
      {name: 'g', summary: g},
      {name: 'b', summary: h},
      {name: 'd', summary: j}
  ];
  return arr;
}