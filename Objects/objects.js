1. //using assign()
let firstEg = { hello: 'world', b: 'bye', c: { d: 10 } };
let secondEg = Object.assign({}, firstEg);
secondEg.b = 'Goodbye';


console.log(firstEg.hello);
console.log(secondEg.b);

2. //using entries()
console.log(Object.entries(firstEg));

3. //using freeze()
//doesn't let change any values 
let thirdEg = {a: '1', b: '2'};    
let fourthEg = Object.freeze(thirdEg);
thirdEg.a = true
console.log(Object.freeze(fourthEg));

4. //using is()
//checks if the two arguments are same
console.log(Object.is(firstEg, thirdEg));
console.log(Object.is('Hello', "Hello"));

5. //using isFrozen()
//checks if the object is frozen or not
console.log(Object.isFrozen(fourthEg));
console.log(Object.isFrozen(firstEg));

6. //using keys()
//it gives the "keys" from the object
console.log(Object.keys(firstEg));
console.log(Object.keys(thirdEg));

7. //using hasOwnProperty()
//checks if the object has the mentioned property or not, returns boolean value
console.log(firstEg.hasOwnProperty('test'));
console.log(firstEg.hasOwnProperty('b'));

8. //using values()
//helps to get the values from the objects
console.log(Object.values(thirdEg));
console.log(Object.values(firstEg));
