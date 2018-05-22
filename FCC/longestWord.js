function myFun(str) {

    var splitStr = str.split(' ');
    var elementLength = 0;
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > elementLength) {
            elementLength = splitStr[i].length;
        }
    }
    return elementLength;
}

myFun("The fox is bazzled by the fiercness of the rabbit!");