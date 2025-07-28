

let choice = parseInt(prompt("Enter your choice"));

switch(choice) {


//Task 1
        case 1:
    let
        a1 = 10;

        while (a1 <= 20) {
            document.write(`${a1},`);
            a1++;

        }
    break;
//Task 2

case 2:
        let a2 = 10;

        while (a2 <= 20) {
            document.write(`${a2 * a2},`);
            a2++;
        }
break;

//task 3

case 3:
        let a3 = 1;

        while (a3 <= 9) {
            document.write(`<p>${a3} * 7 = ${a3 * 7}</p>;`);
            a3++;
        }
break;

//Task 4

case 4:
        let a4 = 1;
        let sum = 0;

        while (a4 <= 15) {
            sum += a4;
            a4++;
        }

        console.log(sum);

break;
//Task 5

case 5:
        let a5 = 15;

        let prod = 1;

        while (a5 <= 35) {
            prod *= a5;
            a5++;
        }
        console.log(prod);
break;
//Task 6

case 6:
        let a6 = 1;

        let mid = 0;

        while (a6 <= 500) {
            mid += a6;
            a6++;
        }
        console.log(`${mid / 500}`);
break;

//Task 7

case 7:
        let a7 = 30;
        let sum7 = 0;

        while (a7 <= 80) {
            if (a7 % 2 !== 0) {
                a7++;
                continue;
            }
            sum7 += a7;
            a7++;
        }
        console.log(sum7);

break;
//Task 8

case 8:
        let a8 = 100;

        while (a8 <= 200) {
            if (a8 % 3 !== 0) {
                a8++;
                continue;

            }
            console.log(a8)
            a8++;
        }
break;

//Task 9

case 9:
        let a9 = parseInt(prompt("Enter a number"));
        let div = 1;
        let sum9 = 0;

        while (div <= a9) {
            if (div % 2 !== 0) {
                div++;
                continue;
            }
            document.write(`<p>${div}</p>`);
            sum9 += div;
            div++;
        }
        console.log(sum9);
break;

//Task 10
case 10:
        let a10 = 0;
        let b10 = 0;
        for (let i = 0; i < 10; i++) {
            a10++
            for (let j = 0; j < 10; j++) {
                document.write(`<p>${a10}*${b10}=${a10 * b10} </p>`)
                b10++
            }
            b10 = 0;
        }
break;
}