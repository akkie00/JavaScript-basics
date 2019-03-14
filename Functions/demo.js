// addTwoNumbers (3,4);
// addTwoNumbers (4,45);
//memory hoisitng is something that the function can be called before it is declared
function addTwoNumbers (a, b){
    console.log( a + b);
}

// function can be made as a reference and passed 

let example = addTwoNumbers;
example(2,3); // here example has become a reference to addTwoNumbers function
 
//if a function is kept in the paranthesis and we're immediately calling it, it will auto-invoke
(function(){
    console.log("Hello world")
})();

/*arguments - can be used to access multiple arguments being passed at once (just like the 
spread operator in the ES6)*/

function add(){
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i])
    }
    console.log(array);
}
add(3,23,234);

//CLOSURES
let addEx = (function (){
    console.log(true);
    let local =0;
   return function(){
        return local+=1;
    }
})();
//can be give parameters as well!
let addExParam = (function (){
    console.log(true);
    let local =0;
   return function(param){
        return local+=param;
    }
})();
console.log(addExParam(1));
console.log(addExParam(5));
console.log(addExParam(54));