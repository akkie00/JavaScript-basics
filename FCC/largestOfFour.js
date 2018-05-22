function largestOfFour(arr) {
    var largestArray = [];
    for(var i=0; i< arr.length; i++){
        var largestNumber =0;
        for(var j=0; j<arr.length; j++){
            if(arr[i][j] > largestNumber){
                largestNumber = arr[i][j];
            }
        }
        largestArray.push(largestNumber);
        // console.log(largestArray);
    }

    return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
