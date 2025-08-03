let choice = parseInt(prompt("What is your choice?"));

switch (choice) {
    case 1:
        let length = parseInt(prompt("Enter length af arr:"));
        let arr = [];

        for (let i = 0; i < length; i++) {
            let value = prompt(`Enter element №${i + 1}:`);
            arr.push(value);
        }

        document.write("<b>Array:</b> " + arr.join(", ") + "<br>");

        arr.sort((a, b) => a - b);
        document.write("<b>Sorted array:</b> " + arr.join(", ") + "<br>");

        arr.splice(1, 3);
        document.write("<b>Array after deleting elements2-4:</b> " + arr.join(", "));

        break;
    case 2:
        let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,];
        let posSum = 0;
        let notPairSum = 0;
        let prod = 1;
        let element;
        let posArr = [];
        let negArr = [];
        let posPairArr = [];
        let notPairArr = [];
        let minimum = 0;
        let maximum = 0;
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            element = array[i];

            if (element > 0){
                posArr.push(element);
                sum += element;
            } else if (element < 0){
                negArr.push(element);
            }

            if (element > 0 && element % 2 === 0){
                posPairArr.push(element);
                posSum += element;


            } else if (element > 0 && element % 2 !== 0){
                notPairArr.push(element);
                notPairSum += element;
            }

            if (element < 0){
                prod *= element;
            }




        }

        console.log("Prod of negative elements is " + prod);
        console.log("number of positive elements " +posArr.length);
        console.log("sum of positive elements " +sum);
        console.log("number and sum of pair elements is " +posPairArr.length + posSum);
        console.log("number and sum of not pair elements is " +notPairArr.length +notPairSum);
        console.log("number of negative elements " +negArr.length);



        minimum = Math.min(16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47);
        maximum = Math.max(16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47);


        console.log("minimum = " + minimum + " on pos " + array.indexOf(Math.min(minimum)));
        console.log("maximum = " + maximum + " on pos " + array.indexOf(Math.max(maximum)));


        for (let i = 0; i < array.length; i++) {
            if (array[i] !== maximum) {
                array[i] = 0;
            }
        }

        console.log(array);

        break;

    case 3:

        let totalBalance = 0;
        let phonesOver2000 = [];

        for (let i = 0; i < users.length; i++) {
        totalBalance += users[i].balance;
            if (users[i].balance > 2000) {
                phonesOver2000.push(users[i].phone);
            }
        }

        console.log("Phone numbers with balance > 2000 " + phonesOver2000);
        console.log("sum of all balances " + totalBalance);

}