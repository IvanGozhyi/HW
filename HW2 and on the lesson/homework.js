//Task 1 Homework
let userName = prompt("What is your name?");

console.log(`Hello, ${userName}! How are you?`);

//Task 2

let num = parseInt(prompt("Enter the number"));

let firstA = Math.floor(num/100);
let sA = Math.floor(num/10);
let secondA = Math.floor(sA%10);
let thirdA = Math.floor(num%10);

if (firstA === secondA && secondA === thirdA) {
    console.log("all numbers are equal!");
} else if (firstA === thirdA || thirdA === secondA || firstA === secondA){
    console.log("some numbers are equal!");
} else {
    console.log("there are no equal numbers!");
}
//Task 3

let yearOfBirth = prompt("Enter the year of birth");
let userTown = prompt("Enter your native town");
let userSport = prompt("Enter your favorite sport");


if (userTown === "London"){
    console.log(`Your year of birth is ${yearOfBirth}`);
    console.log(`Your favorite sport is ${userSport}`);
    console.log(`Your live in ${userTown} that is capital city of the UK`)
} else if ( userTown === "Kyiv"){
    console.log(`Your year of birth is ${yearOfBirth}`);
    console.log(`Your favorite sport is ${userSport}`);
    console.log(`Your live in ${userTown} that is capital city of the Ukraine`)
} else if (userTown === "Washington"){
    console.log(`Your year of birth is ${yearOfBirth}`);
    console.log(`Your favorite sport is ${userSport}`);
    console.log(`Your live in ${userTown} that is capital city of the USA`)
} else {
    console.log(`Your year of birth is ${yearOfBirth}`);
    console.log(`Your favorite sport is ${userSport}`);
    console.log(`Your live in ${userTown}`);
}

// Task with *
if (userSport === "Hockey" || userSport === "hockey"){
    alert(`Wow your favorite sport is ${userSport}, do you want to become as Sidney Crosby?`);
} else if (userSport === "Racing" || userSport === "racing"){
    alert(`Wow your favorite sport is ${userSport}, do you want to become as Max Verstappen?`);
} else if (userSport === "Basketball" || userSport === "basketball"){
    alert(`Wow your favorite sport is ${userSport}, do you want to become as Lebron James?`);
}

//Additional task
if (userSport == null || userSport === "" || !userSport) {
    alert("Too bad you didn't want to enter your favorite sport!");
} else if (yearOfBirth == null || yearOfBirth === "" || !yearOfBirth) {
    alert("Too bad you didn't want to enter your year of birth!");
} else if (userTown == null || userTown === "" || !userTown) {
    alert("Too bad you didn't want to enter your native town!");
}


//Task 4
let numOrStr = prompt('input number or string');
console.log(numOrStr)

//Template
/*if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}*/

//Realization with switch ... case
switch (numOrStr) {
    case ' ':
        console.log('Empty String');
        break;
    case 'null':
        console.log('ви скасували');
        break;
    case 'isNaN(+numOrStr)':
        console.log(' number is Ba_NaN')
        break;
        default:
            console.log('OK!');
}

