1. // USING var vs let

//var declares a variable in function scope 
//let declares a variable in block scope
//var has something called memory hoisting, which will first declare all the 
//-variables first. That's the reason why we get as 'undefined'
function add(){
    console.log(a);
    var a = 10;
    let c = 10;
    console.log(c)
    console.log(a);
//here var causes the variable i to be in function scope. That's the reason why when we log 'i', it 
// - it gives us the o/p
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i)
//here let causes the variable j to be in block scope. so when we try to log it outside the 
// -for loop it doesn't print
for(let j=0; j<5; j++){
    console.log(j);
}
// console.log(j);
}
//here a is not defined because we are using it out of the function.
// console.log(a);
add();

2. //USING const
//const is used when we don't need to change the value of the varialbe
//or when we know certain variable value will not be changed
const maxNumOfLetters = 10;
console.log(maxNumOfLetters)
//this gives the error because the const variable is used and it doesn't allow
//it's value to be reassigned to a new value.
// maxNumOfLetters = 20;

//However when it comes to Objects and Arrays, the case is different
const myValues = {name: "Akshay", age: 12}
//here you can change the value of either Objects(above) or an Array
myValues.gender = 'Male';
console.log(myValues);
// but you cannot reassign the Object name
//myValues = {}

3. //using if{}
if(true){
    console.log("I'm true!");
}

4. //using else & else if
if(2==0){
    console.log("I'm true!");
}
else{
    console.log("i'm not true");
}

5. //using else if
if(2==0){
    console.log("I'm true!");
}
else if(2===2){
    console.log("Now I'm true!")
}
else{
    console.log("i'm not true");
}

6. //nested ifs
if(2==0){
    console.log("I'm true!");
}
else if(2===2){
    console.log("Now I'm true!")
    if(true === false){
        console.log("I'm nested true");
    }
    else{
        console.log("i'm false");
    }
}

else{
    console.log("i'm not true");
}

