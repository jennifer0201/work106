'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var n=0;
  var m=0;
  for(var i=0;i<collectionA.length;i++){
	for(var j=0;j<4;j++){
		if(collectionA[i]==collectionB[0][j]){
			n=n+1;
		}
		}
}
var arr=new Array(n);
	for(var i=0;i<collectionA.length;i++){
	for(var j=0;j<4;j++){
		if(collectionA[i]==collectionB[0][j]){
			arr[m]=collectionA[i];
			m++;
		}
	}
	}
	return arr;
	}
