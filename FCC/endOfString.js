function confirmEnding(str, target) {
    // console.log(str);
    var strEnd = str.substr(-1);
    var tarEnd = target.substr(-1);
    if(strEnd === tarEnd){
        return true;
    }
    else{
        return false;
    }

}

confirmEnding("Bastian", "n");
