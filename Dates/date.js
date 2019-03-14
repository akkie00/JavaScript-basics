const date = new Date();
var date1 = date.getTime();
console.log(date);
console.log(date1);
var date2 = new Date(date1);
console.log(date2);

let exDate = new Date();

console.log(exDate.getTime());
console.log(exDate.getDay());

console.log(exDate.setFullYear(2016))
console.log(new Date(exDate));