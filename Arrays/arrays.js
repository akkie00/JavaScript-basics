1. //Array properties
//Arrays can store any type of data, including objects
var firstArray = [1,2,3,'hi',{hello: true}];

// console.log(firstArray);

2. //using concat to arrays
var secondArray = [12,34,[23,'say']];
let concatedArray = firstArray.concat(secondArray);
// console.log(concatedArray);

3. //using copyWithin()
let thirdArray = [1,2,3,4,5];
// console.log(thirdArray.copyWithin(2,1));

4. //using entries
let array = thirdArray.entries();
for(let i =0; i<thirdArray.length; i++){
    // console.log(array.next().value);
}

5. //using every()
function greater(params) {
    return params === 'helo';
}
let fourthArray=['helo',8,9,3];
// console.log(
//     fourthArray.every(greater)
// );

6. //using fill() it is used to fill the array with the vaues provided .
//fill('value to be put in', start index, end index)
console.log(thirdArray.fill(1, 2,3));

7. // using filter()
// it filters out the array after giving a call back funcition with our logic 
var fifthArray = thirdArray.filter((element)=>{
    return element < 4;
})

// console.log(fifthArray);

8. // using find()
var find = thirdArray.find((element)=>{
    return element > 3;
});
// console.log(find);

9. //using findIndex()
// unlike find it returns the index of the value. whereas find() returns the value of the 
// first element which satisfies the condition.
console.log(thirdArray);
console.log(thirdArray.findIndex((element)=>{
    return element > 4;
}))

10. //using forEach()
thirdArray = [1,2,3,4,5];
console.log(thirdArray);
thirdArray.forEach((element, index, array) => {
    console.log(element+" - "+ index+ " - "+array+ "hey");
});

11. 