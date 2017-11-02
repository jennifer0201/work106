'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i<9;i++){
	  for(var j=0;j<4;j++){
	  if(collectionA[i].key==objectB.value[j]){
		  var n=Math.floor(collectionA[i].count/3);
		  collectionA[i].count-=n;
	  }
	  }
  }
  return collectionA;
}
