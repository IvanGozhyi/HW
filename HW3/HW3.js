

let choice = parseInt(prompt("Enter your choice"));

//Menu
switch (choice) {
    //Task 1
    case 1:
        let a = 20;

       for (; a <= 30; a += 0.5){
           console.log(a)
       }
       break;
      //Task 2
       case 2:
           let usd = 0;
           let uah = 26; //usd in uah
        do {
            console.log(`${usd} dollars in uah ${usd * uah}`);
            usd += 10;
        } while (usd <= 100);
        break;
        //Task 3
        case 3:
            let N = parseInt(prompt("Enter number"));

            for (let i = 0; i <= 100; i++){
                if (i*i <= N){
                    console.log(i);
                }
            }
            break;
            //Task 4
            case 4:
                let prime = parseInt(prompt("Enter number"));
                if (prime % 1 === 0 || prime % prime === 0) {
                    document.write("your number is prime");
                } else {
                    document.write("your number is not prime");
                }
                break;

                //If user wrote wrong number that doesn't satisfy menu
    default:
        alert("Please enter a number (1-4)");
        break;

}

