function slasher(arr, howMany) {
    // it doesn't always pay to be first
    // var choppedArray = [];
    if (arr.length < howMany) {
        return arr.splice(howMany);
    }
    else if (arr.length > howMany) {
        return arr.splice(howMany);

    }
}

slasher([1, 2, 3], 9);

