class Calculator {
    constructor(result = 0){
       this.result = result;
    }

    add(x,y){

       this.result += x + y;
        return this.result;
    }

    substract(x,y){

        this.result += x - y;
        return this.result;
    }

    multiply(x,y){

        this.result += x * y;
        return this.result;
    }
    divide(x,y){

        this.result += x / y;
        return this.result;
    }
}

const calc = new Calculator();
console.log(calc.add(10,8));
console.log(calc.divide(12,4));
console.log(calc.substract(180,24));
console.log(calc.multiply(123,192));


//Task №2
class Coach{
    constructor(name , surname , Specialization , rating = 0){
        this.name = name;
        this.surname = surname;
        this.Specialization = Specialization;
        this.rating = rating;
    }
    showInfo(){
        console.log(`Coach: ${this.name} ${this.surname}, Specialization: ${this.Specialization}, Rating: ${this.rating}`);
    }
}

const myCoach = new Coach("Jake" ,"Jameson", "Bodybuilding", 5.6 );
myCoach.showInfo();
//Task №3
class BankAccount{
    #balance;
    constructor(balance = 0 ) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(value){

        this.#balance += value;
        return this.#balance;
    }
    wihtdraw(value){

        this.#balance -= value;
        return this.#balance;
    }
}

const myBankAccount = new BankAccount(1000);
console.log(myBankAccount.getBalance());
console.log(myBankAccount.deposit(120));
console.log(myBankAccount.wihtdraw(70));

class House {
    constructor() {
        this.apartments = new Map();
    }

    addApartment(number, residentsCount) {
        if (!number || number <= 0) {
            throw new Error("Apartment number must be greater than 0!");
        }
        if (this.apartments.has(number)) {
            throw new Error(`Apartment №${number} already exists!`);
        }
        if (residentsCount < 0) {
            throw new Error("Amount of residents cannot be negative!");
        }

        const residents = new Set();
        for (let i = 1; i <= residentsCount; i++) {
            residents.add(`Resident_${number}_${i}`);
        }

        this.apartments.set(number, residents);
    }

    printInfo() {
        console.log(` House(amount of apartments: ${this.apartments.size})`);
        if (this.apartments.size === 0) {
            console.log("   There is no apartments.");
            return;
        }
        this.apartments.forEach((residents, number) => {
            const list = [...residents].join(", ") || "—";
            console.log(`   Apartment ${number}: [${list}]`);
        });
    }
}

const MyHouse = new House();
MyHouse.addApartment(1 ,2);
MyHouse.addApartment(2,3);
MyHouse.addApartment(3,4);
MyHouse.addApartment(5,5);
MyHouse.addApartment(6,6);
MyHouse.addApartment(7,7);
MyHouse.printInfo();






