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
  var arr=[
      {key: 'a', count: a},
      {key: 'e', count: b},
      {key: 'h', count: c},
      {key: 't', count: d},
      {key: 'f', count: e},
      {key: 'c', count: f},
      {key: 'g', count: g},
      {key: 'b', count: h},
      {key: 'd', count: j}
  ];
  return arr;
}
