'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var t=0;
  var m=0;
  var collectionC=new Array(9);
for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionC.length;j++){
        if(i==j){
            collectionC[j]=collectionA[i].key;
			for(var n=0;n<=3;n++){
		  if(objectB.value[n]==collectionC[j]){
			  t=t+1;
		  }
	  }
        }
    }
}
var arr=new Array(n);
for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionC.length;j++){
        if(i==j){
            collectionC[j]=collectionA[i].key;
			for(var n=0;n<=3;n++){
		  if(objectB.value[n]==collectionC[j]){
			  arr[m]=objectB.value[n];
			  m++;
		  }
	  }
        }
    }
}
return arr;
}
