function mutations(arr) {

    var firstArg = arr[0].toLowerCase();
    var secondArg = arr[1].toLowerCase();
    console.log(firstArg, secondArg)
    console.log(firstArg.indexOf(secondArg));
}
mutations(["hEllo", "hey"]);