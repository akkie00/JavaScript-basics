function arithOperators(a,b){
    //add
    console.log(a+b);
    //multiply
    console.log(a*b);
    //subtract
    console.log(a-b);
    //divide
    console.log(a/b);
    //modulo
    console.log(a%b);
    //exponential
    console.log(a**b);
}

arithOperators(3,4);

function relationalOps(a,b){
    // < than
    console.log(a<b);
    //> than
    console.log(a>b);
    // in operator
    console.log('name'in a);
}

relationalOps({name:'Akshay'},7);

function equalityOps(a,b){
    console.log(a==b+' '+a!=b);
    console.log(typeof a);
    console.log(typeof b);
    //strictly equals checks datatypes as well as the value whereas the regular checks only for value

    console.log(a===b);
    console.log(a!==b);
}
equalityOps(3,"6");

//AND and OR operators
function binaryOps (a,b){
    console.log((a===3 && b===7) || (a===4 && b<8));
}
binaryOps(4,7);

5
 
function ternaryOp(a,b){
    // return (2+2 === 43)? 'Hello World' : 'Goodbye World';
    return (a<2) ? 'good to go' : (a<b)? 'second run' : 'too bad';
}
console.log(ternaryOp(3,5));

function incDecOps(a,b){
    //postfix increments after returning
    // return a++; 
    // return ++a;
    //prefix increments before returning 
    // return a--;
    return --a;
}
console.log(incDecOps(5));

function assignmentOps(){
    let val1 = 12;
    // val1 += 6;
    // val1 *=6;
    // val1 /= 6;
    // val1 %=6;

    return val1;

}
console.log(assignmentOps())