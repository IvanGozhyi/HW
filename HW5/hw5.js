let choice = parseInt(prompt("What is your choice?"));



switch (choice) {
    //Task 1
    case 1:
const sum = (function () {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
})();

        console.log(sum(10));
        console.log(sum(9));
        console.log(sum(68));
        console.log(sum(41));
break;

//Task 2
case 2:
    function curryMultiply (a) {
        return function (b){
            return a * b;
        };
    }

    console.log(curryMultiply(9)(10));
    break;

//Task 3
case 3:

//Recursive variant

/*
function askNumberRecursive(attempt = 1, lastInputR = null) {
    let inputR = prompt(`Attempt ${attempt}: Type a number`);
    let numR = Number(inputR);

    lastInputR = numR;

    if (numR > 100 || attempt >= 10 || Number.isNaN(numR)) {
        console.log("Last input:", lastInputR);
        return lastInputR;
    }

    return askNumberRecursive(attempt + 1, lastInputR);
}

    askNumberRecursive();


 */


        //Variant in cycle
function askNumber() {
    let lastInput;

    for (let i = 0; i < 10; i++) {
        let input = prompt("type the number:");
        let num = Number(input);


        lastInput = num;


        if (num > 100) {
            console.log("Congrats!")
            break;
        }

        if (Number.isNaN(num))
        {
            console.log("This is not a number");
            break;
        }
    }

    console.log("Last input:", lastInput);
}
askNumber();
    break;

    default:
        alert("Please enter a number 1-3");
        break;
}

