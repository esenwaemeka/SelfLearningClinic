'use strict'
var file = {}
file.findMinMax = function(num_array){
    var max=0;
    var min=num_array[0];
    var minMax=[]
    var num_length = num_array.length 

    if (typeof num_array != 'object'){
        return num_array;
    }

    if (num_length == 0){
        return 0;
    }

    if (num_length == 1){
        return num_array;
    }

    else{
      
        for (var i=0; i<num_length; i++){
            if (num_array[i] > max){
               max=num_array[i];
            }
            
            if(num_array[i]< min){
              min=num_array[i];
            }
        }
    }
    if (max===min){
        minMax.push(max)
    }
    else{
        minMax.push(min)
        minMax.push(max)
    }
    return minMax
}

module.exports = file;
