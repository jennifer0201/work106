'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 var a=0;
  var b=0;
  var c=0;
  var d=0;
  var e=0;
  var f=0;
  var g=0;
  var h=0;
  var j=0;
  for(var i=0;i<collectionA.length;i++){
	  if(collectionA[i]=='a'){
		 a=a+1; 
	  } 
	  if(collectionA[i]=='e'){
		 b=b+1; 
	  }
	  if(collectionA[i]=='h'){
		 c=c+1; 
	  }
	  if(collectionA[i]=='t'){
		 d=d+1; 
	  }
	  if(collectionA[i]=='f'){
		 e=e+1; 
	  }
	  if(collectionA[i]=='c'){
		 f=f+1; 
	  }
	  if(collectionA[i]=='g'){
		 g=g+1; 
	  }
	  if(collectionA[i]=='b'){
		 h=h+1; 
	  }
	  if(collectionA[i]=='d'){
		 j=j+1; 
	  }
  }
  var collectionC=[{key:"a", count: a},{key:"e", count: b},{key:"h", count: c},{key:"t", count: d},{key:"f", count: e},
  {key:"c", count: f},{key:"g", count: g},{key:"b", count: h},{key:"d", count: j}];
  for(var i=0;i<9;i++){
	  for(var j=0;j<4;j++){
	  if(collectionC[i].key==objectB.value[j]){
		  var n=Math.floor(collectionC[i].count/3);
		  collectionC[i].count-=n;
	  }
	  }
  }
  return collectionC;
}
