1. //Array properties
//Arrays can store any type of data, including objects
var firstArray = [1, 2, 3, 'hi', { hello: true }];

// console.log(firstArray);

2. //using concat to arrays
var secondArray = [12, 34, [23, 'say']];
let concatedArray = firstArray.concat(secondArray);
// console.log(concatedArray);

3. //using copyWithin()
let thirdArray = [1, 2, 3, 4, 5];
// console.log(thirdArray.copyWithin(2,1));

4. //using entries
let array = thirdArray.entries();
for (let i = 0; i < thirdArray.length; i++) {
    // console.log(array.next().value);
}

5. //using every()
function greater(params) {
    return params === 'helo';
}
let fourthArray = ['helo', 8, 9, 3];
// console.log(
//     fourthArray.every(greater)
// );

6. //using fill() it is used to fill the array with the vaues provided .
//fill('value to be put in', start index, end index)
console.log(thirdArray.fill(1, 2, 3));

7. // using filter()
// it filters out the array after giving a call back funcition with our logic 
var fifthArray = thirdArray.filter((element) => {
    return element < 4;
})

// console.log(fifthArray);

8. // using find()
var find = thirdArray.find((element) => {
    return element > 3;
});
// console.log(find);

9. //using findIndex()
// unlike find it returns the index of the value. whereas find() returns the value of the 
// first element which satisfies the condition.
console.log(thirdArray);
console.log(thirdArray.findIndex((element) => {
    return element > 4;
}))

10. //using forEach()
thirdArray = [1, 2, 3, 4, 5, 3];
console.log(thirdArray);
thirdArray.forEach((element, index, array) => {
    console.log(element + " - " + index + " - " + array + "hey");
});

11. //using includes()
console.log(thirdArray.includes(1)); //this will simply check if the value is there or not
//this will take first arg as index and the second arg as the value to be checked.  
console.log(thirdArray.includes(3, 3));

12. //using indexOf()... returns the index of the value in the array
console.log(thirdArray.indexOf(3));

13. //using join()
console.log(thirdArray.join(' - '));

14. //using lastIndexOf()
console.log(thirdArray.lastIndexOf(3));

15. //using map()
//example1 never gets changed, Where as example2 is created brand new array based off of original array
let example1 = [1, 2, 3, 4, 5];
let example2 = example1.map((element) => {
    return element * 2;
});
console.log(example2);

16. //using pop()
//pops out only the last element of the array, we can store that popped out value and use it 
let poppedValue = example1.pop();
console.log(poppedValue);

17. //using push()
//pushes the value in the last of an array
example1.push(5, 6, 7);
console.log(example1);

18. //using reduce()
example1.reduce((currentTotal, currentValue)=>{
    console.log(currentTotal);
    return currentTotal + currentValue;
})
// console.log(example1)

19. //using shift()
//can be used to remove the first element of an array and store it and use
console.log(example1.shift());
console.log(example1);

20. //using slice()
//used for COPYING a piece of array, by using index values
console.log(example1.slice(3,5));
//notice that it doesn't change the array. 
console.log(example1); 

21. //using some()
//similar to every(), this method returns true if even one of the element in the array 
//satisfies the condition
let example3 = example1.some((element)=>{
    return element > 5;
})
console.log(example3);

22. //using 