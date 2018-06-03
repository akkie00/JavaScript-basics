
function repeatStringNumTimes(str, num) {
    var myStr="";
    for(var i=0; i<num; i++){
        // return str;
        // console.log(str+=str);
        myStr += str;
    }
    return myStr;

}

console.log(repeatStringNumTimes("abc", 3));


// if(num > 0){
//     return str.repeat(num);
// }
// else
// {
//     return "";
// }