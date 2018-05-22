1. //number properties

// console.log(
//     Number.MAX_SAFE_INTEGER
// );
// console.log(
//     Number.MIN_SAFE_INTEGER +
//     "he     "+Number.MIN_VALUE
//     +Number.NaN + "     " + Number.MAX_VALUE
// );
2. //using isFinite23

// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite('helo'));
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(NaN));

3.// using isInteger

// console.log(Number.isInteger(32));
// console.log(Number.isInteger(23.2));

4. //using isNaN

// console.log(Number.isNaN('23'));
// console.log(Number.isNaN(23));
// console.log(Number.isNaN('ehh'));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(0/0));

5. //using isSafeInteger

// console.log(Number.isSafeInteger(3));
// console.log(Number.isSafeInteger(-3));
// console.log(Number.isSafeInteger(-2.3));
// console.log(Number.isSafeInteger(Math.pow(2, 23)));

6. //using parseFloat

// console.log(Number.parseFloat(34.00));
// console.log(Number.parseFloat('44'));
// console.log(Number.parseFloat("sdfh 34"));
// console.log(Number.parseFloat('34 sdf'));

7. //using parseInt
var example1 = '12.09';
console.log(Number.parseInt(example1));

8. //using toExponential
var example2 = 909.126;
console.log(example2.toExponential(14));

9. //using toFixed
console.log(example2.toFixed(2));

10. //using toPrecision
console.log(example2.toPrecision(4));