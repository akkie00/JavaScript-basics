// 1)  template literals
let lName = 'kumar';
// let fName = 'Akshay ' + lName;
let fName = ` Akshay ${lName}

is quite COOL!!
`
//back-ticks are used to put in code directly in the string,
// also they can be used in multiple lines 
console.log( fName );

// 2) destructing 

let Car = {
    Brand : 'BMW',
    Model : 'M5',
    horsePower : '600hp',
    launchYear : 2013
}
// it's creating local reference of either Objects or Arrays 
const {Brand, Model , horsePower, launchYear } = Car;
console.log( Brand );

//this below is for Arrays

let examArray  = [1,2,3,4,5];
const [ first, second , thrid , fourth ] = examArray;
console.log(first);

//  3) shortHand literals
       let brand = 'BMW';
       let model = 'M5';
       let HP = '600hp';
    let lYear =2013;

let reference = {
    brand, 
    model, HP, lYear
}

console.log(HP ); 

// 4) for..of loop

//can access values in an array directly
let exArray = ['Hello','There', 'How', 'Are', 'You' ];
for (const word of exArray){
    console.log(word);
}

// 5) spread operator
let numArray = [1,2,3,4]
//pushing made easy
numArray.push(...exArray);
console.log(numArray);

// 6) rest operator
//kind of like opposite to sperad operator, it takes the data and sends it to 
// an array using functions

function add(...numbers){
    console.log(numbers);
    for (const num of numbers){
        console.log(num);
    }
}
add(2,3,3,4,5,5);

// 7) Arrow function 
//without an arrow, the usual code looks like

const exampArray = [1,2,3,4,5].map(function(element){return element +1 ;});
// arrow can simplify it to
const examp2Array = [1,2,3,4,5].map(element => element +1);
// it generally doesnt need a return statment or an additional parameter cause there's no logic
// and if there is 
const examp3Array = [1,2,3,4,5].map((element, index) =>{
    if( true ){
        return true;
    }
return element +1});

console.log(examp3Array);
console.log(examp2Array);
console.log(exampArray);

// 8) default params
//default parameters can be set like

function sub ( x, y, z= 10){
    console.log( x - y + z )
    return x + y;
}
sub(10,4);