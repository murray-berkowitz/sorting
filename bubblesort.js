var sortObj = {};


sortObj.bubbleSort = function(arr){
    
    if(arr.length === 1){
        return arr;
    }

    for (var i = 0; i< arr.length;i++){
        for (var j = 0; j<arr.length;j++){
            arr = sortObj.swap(arr,j);
        }
    }

    return arr;
}

sortObj.swap = function(arr,j){
    if (arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
    return arr;
    }