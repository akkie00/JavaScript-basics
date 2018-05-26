let example1 = "hello";
let example2 = "world";

1. // console.log(example1+example2);
// console.log(example1, example2);

2. // length 
let fullString = example1 + example2;
// console.log(fullString[5].length);

3. // concact method
// console.log(example1.concat(example2));
let arrayOfString = ["first", "second"];

4. // use of ellipses to fetch the values in an array
// console.log(...arrayOfString);

5. // using endsWith. 
// console.log(fullString.endsWith('wo', 8));

6. // using indexOf()
// console.log(fullString.indexOf('w'));

7. //using includes()
// console.log(fullString.includes('wosdf') === false);

8. //using lastIndexOf()
// console.log(fullString.lastIndexOf('o', 4));

9. //using match()

var myString = "eye@_ !1221!_@eye";
var regexp = /[A-Za-z0-9\s_]/gi;

// console.log(myString.match(regexp));

10. //using padEnd()
// console.log(fullString.padEnd(fullString.length+3, '!!!'));

11. //using padStart()
// console.log(fullString.padStart(fullString.length+4, '!!!!'))

12. //using repeat()
// console.log(example1.repeat(3.5));

13. //using replace()
// function myFun(palin) {
//     var regexp = /[^A-Za-z0-9]/g;
//     var lowStr = palin.toLowerCase().replace(regexp,'');
//     var reverseStr = lowStr.split('').reverse().join('');
// //     console.log(reverseStr);
//     return reverseStr === lowStr;
    
// }


// myFun("eye");
// console.log(example1);
// console.log(example1.replace(regexp, 'Goodbye'));

14. //using search()
// console.log(fullString.search(/world/g));

15. //using slice() 
// It is used take a certain part of string. AKA slicing the string like a "pice of cake"
var first = "        Goodbye";
var second = "world";
var third = "Goodbye world";
// console.log(third.slice(0, 1));

16. // using split()
var input = 'john smith~123 Street~Apt 4~New York~NY~12345';
// console.log(input.split('~'));

17. //using startsWith()
// console.log(first.startsWith('Goo'));

18. //using substr()
// console.log(first.substr(1,1));

19. //using toLowerCase() and toUpperCase()
// console.log(first.toLowerCase(), second.toUpperCase());

20. //using trim(), trimLeft(), trimRight()
// console.log(first.trimLeft());

21. //using toString() converts any datatype except string to string dt
var num = true; //var num = 123;
// console.log( typeof num.toString());

