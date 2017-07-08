function split(wholeArray){
	if(wholeArray.length == 1){
		return wholeArray;
	}
	var firstArray = wholeArray.slice(0,Math.ceil(wholeArray.length/2));
	var secondArray = wholeArray.slice(Math.ceil(wholeArray.length/2));
	return [firstArray, secondArray];
}

function merge(firstArray, secondArray){
	var result = [];
	while(firstArray.length || secondArray.length){
		if(firstArray[0] <= secondArray[0]){
			result.push(firstArray.shift());
		}
		else {
			result.push(secondArray.shift());
		}
		if(!firstArray.length && secondArray.length){
			result.push(secondArray.shift());
		}
		if(!secondArray.length && firstArray.length){
			result.push(firstArray.shift());
		}
	}
	return result;
}

function mergeSort(array){
	if(array.length < 2){
		return array;
	}
	var splitArray = split(array),
	left = splitArray[0];
	right = splitArray[1];
	return merge(mergeSort(left), mergeSort(right));
}