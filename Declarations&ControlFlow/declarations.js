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

7. //USING switch   
function demo(arg){
   
    switch(arg){
        case 'rookie':
        console.log("its a rookie");
        break;
        case 'intermediate':
        console.log('I know a bit of coding');
        break;
        case 'Advanced':
        console.log('Can build some pretty good stuff');
        break;
        default:
        console.log('You\'re not a coder yet');
    }
}
demo('level zero')

8. //USING for loop
let arr = [1,2,3,4,5];

for(let i=arr.length-1 ; i>=0; i--){
    console.log(arr[i]);
}

9. //USING while loop
function testWhile(arg){
    let count = 0;
    while(arg=== true){
        count++;
        console.log(count);
        if(count ===5){
            break;
        }
    }
}
testWhile(true);

10. //USING do..while
do{
    console.log("at least once");
}
while(false){
    console.log('false even');
}

11. //USING try..catch..finally

function demoTry(arg){
    // let value = 0;
    try{
        // if(arg>10){
        //     console.log("I tired");
        //     demoTry1();
        // }
        demoTry2();
        throw 404;
    }
    catch(error){
        // console.log('The value must be wrong');
        console.error(error);
    }
    finally{
        console.log('well, next time.')
    }
}
demoTry(4);
