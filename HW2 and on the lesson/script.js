//Task 1
/*let num1 =parseInt( prompt("Type 1st number:"));
let num2 =parseInt( prompt("Type 2nd number:"));
if (num1 > num2) {
   document.write("first number is bigger");
}else if (num1 === num2){
    document.write("numbers are equal");
}else{
    document.write("second number is bigger");
}
//Task 2
let distInKMeters = parseInt( prompt ("Enter the 1st distance") * 1000);
let distInFoots = parseInt( prompt ("Enter the 2nd distance") * 0.305);

if (distInKMeters > distInFoots){
    document.write("1st distance is bigger")
}
else if (distInKMeters === distInFoots){
    document.write("Distances is equal")
}
else {
    document.write("2nd distance is bigger")
}*/

//Task 3
/*let a = parseInt (prompt ("Type 1st number:"));
let b = parseInt (prompt ("Type 2nd number:"));


 if (a < b) {
     if (b % a === 0) {
         console.log("a is divisor of b");
     } else {
         console.log("a is not divisor of b ");
     }
 }else if (a > b){
    if (a % b === 0){
        console.log("b is divisor of a ");
    }
    else {
        console.log("b is not divisor of a ");
    }
}*/

//Task 4
/*let number = parseInt(prompt("Enter a number"));

if (number % 2 === 0) {
    console.log("the number is pair")
} else {
    console.log("the number is not pair")
}

let SpNum = number % 10;
console.log(SpNum);*/

//Task 5

/*let a = parseInt( prompt("Enter the number:") );

let firstA =Math.round(a / 10);

console.log(firstA);

let SecondA = a % 10;

console.log(SecondA);

if (firstA > SecondA) {
    console.log(`1st num ${firstA} of a is bigger`);
} else {
    console.log(`2nd num  ${SecondA} of a is bigger`);
}*/

//Task 6

let a = parseInt(prompt("Enter a number"));


let firstA = Math.round(a/ 100);

let A = a % 100;

let secondA = Math.round(A/10);

let thirdA = A%10;

//Task 6.1

let sumOfA = firstA + secondA + thirdA;
let prodOfA = firstA * secondA * thirdA;

if (sumOfA % 2 === 0) {
    console.log("Sum is pair");
} else {
    console.log("Sum is not pair");
}

//Task 6.2

if (sumOfA % 5 === 0 ){
    console.log("Sum is multiple of 5");
}else
{
    console.log("Sum is not multiple of 5");
}

//Task 6.3

if (prodOfA > 100) {
    console.log("Prod is bigger than 100!");
}else {
    console.log("Prod is not bigger than 100!");
}

