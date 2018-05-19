function titleCase (str){
var lowStr = str.toLowerCase();
var splitStr = lowStr.split(' ');
// console.log(splitStr);


// splitStr.forEach(word => {
//     const titleLetters = word.charAt(0).toUpperCase();
//     const titledSentence = word.replace(word.charAt(0), titleLetters);
//     // return titledSentence;
//     console.log(titledSentence);
// });

for(var i =0; i< splitStr.length; i++){
    const titleLetters = splitStr[i].charAt(0).toUpperCase();
    console.log(titleLetters);
}

}

titleCase("I'm a newbie here");