function confirmEnding(str, target) {
    // console.log(str);
    var strEnd = str.substr(-target.length);
    console.log(strEnd);
    if(strEnd === target){
        return true;
    }
    else{
        return false;
    }

}

confirmEnding("Bastian", "n");
