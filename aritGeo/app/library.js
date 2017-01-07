'strict'
var file = {}

file.aritGeo = function(maths_series){

	if (maths_series.length === 1){
    	return maths_series;
 	}

	var commonDifference = maths_series[1]-maths_series[0];
	var commonRatio = maths_series[1]/maths_series[0];
	var arithProg = true;
 	var geoProg = true;

	if (maths_series.length===0){
    	return 0;
	}

	else{

		i = 0;
		while (i<maths_series.length-1){
			if ((maths_series[i+1]- maths_series[i]!==commonDifference)){
				arithProg=false;
			}
			if ((maths_series[i+1]/ maths_series[i])!==commonRatio){
    			geoProg =false;
    		}
  		i++;
  		}
  	}
  
    if (arithProg === true){
      return 'Arithmetic';
    }
    else if (geoProg === true){
      return 'Geometric';
    }
    else {
      return -1 ;
    }

}
module.exports = file;