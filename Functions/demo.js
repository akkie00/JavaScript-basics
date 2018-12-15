// addTwoNumbers (3,4);
// addTwoNumbers (4,45);
//memory hoisitng is something that the function can be called before it is declared
function addTwoNumbers (a, b){
    console.log( a + b);
}

// function can be made as a reference and passed 

let example = addTwoNumbers;
example(2,3); // here example has become a reference to addTwoNumbers function

