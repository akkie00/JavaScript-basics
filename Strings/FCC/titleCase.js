function titleCase(str) {
    var lowStr = str.toLowerCase();
    var splitStr = lowStr.split(' ');

    var titledSentence = [];
    for (var i = 0; i < splitStr.length; i++) {
        const titleLetters = splitStr[i].replace(splitStr[i].charAt(0), splitStr[i].charAt(0).toUpperCase());

        titledSentence.push(titleLetters);

    }   
return titledSentence.join(' ');
}

titleCase("sHoRt AnD sToUt");

   // console.log(splitStr);


    // splitStr.forEach(word => {
    //     const titleLetters = word.charAt(0).toUpperCase();
    //     const titledSentence = word.replace(word.charAt(0), titleLetters);
    //     // return titledSentence;
    //     console.log(titledSentence);
    // });