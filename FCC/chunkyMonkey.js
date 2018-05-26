function chunkArrayInGroups(arr, size) {
    var chunkedArray = [];
    for (var i = 0; i < arr.length; i+=size) {
        console.log()

        chunkedArray.push(arr.slice(i, i+size));
    }
    console.log(chunkedArray);
    return chunkedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
