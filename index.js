let str = "Hello World.";
let num = 12;
let bigIntNum = 1234567890123456789012345678901234567890n;
let bool = true;
let undef = undefined;
let nul = null;
let sym = Symbol("символ");
let obj = {key: "значення"};
let arr = [1, 2, 3];
let func = function() {};

console.log('Task 1');
console.log(`str = ${str} | тип: ${typeof str}`);
console.log(`num = ${num} | тип: ${typeof num}`);
console.log(`bigIntNum = ${bigIntNum} | тип: ${typeof bigIntNum}`);
console.log(`bool = ${bool} | тип: ${typeof bool}`);
console.log(`undef = ${undef} | тип: ${typeof undef}`);
console.log(`nul = ${nul} | тип: ${typeof nul}`);
console.log(`sym = ${sym.toString()} | тип: ${typeof sym}`);
console.log(`obj = ${JSON.stringify(obj)} | тип: ${typeof obj}`);
console.log(`arr = ${arr} | тип: ${typeof arr}`);
console.log(`func = ${func} | тип: ${typeof func}`);

let a = prompt("Type 1st line:");
let b = prompt("Type 2nd line:");
let c = prompt("Type 3rd line:");

console.log('Task 2');
console.log(`Ось у довільному порядку: ${c}, ${a}, ${b}`);

let number = 10369;

let digits = number.toString().split("").join(" ");

console.log('Task 3');
console.log(digits);





