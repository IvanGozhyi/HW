'use strict'

let menu = () => {
    let choice = parseInt(prompt("Enter your choice"));

    switch(choice) {

        case 1:
            task1();
            break;

        case 2:
            task2();
            break;

        case 3:
            task3();
            break;

        default:
            alert("Please enter number 1-3");
            break;
    }

}




//Task 1
let task1 = () => {
    user.showInfo();
}




const user = {
    name: "Marshall Mathers",
    age: 23,
    city: "California",
    email: "Marshall@gmail.com",

    showInfo() {
        document.write(`
          <div style="
            font-family: Arial, sans-serif; 
            border: 2px solid #333; 
            border-radius: 10px; 
            padding: 15px; 
            width: 250px; 
            margin: 20px auto; 
            background: #f0f0f0;
            box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          ">
            <h2 style="color:#007BFF; margin:0 0 10px 0;">User Info</h2>
            <p><b>Name:</b> ${this.name}</p>
            <p><b>Age:</b> ${this.age}</p>
            <p><b>City:</b> ${this.city}</p>
            <p><b>Email:</b> ${this.email}</p>
          </div>
        `);
    }
};

//Task 2
let task2 = () => {
    console.log("Initial array:");
    console.log(showArr(Arr));
    console.log("Filtered array");
    console.log(filterAndShowArr(Arr));

}


const Arr = [184, 9231, 77, 402, 6589, 3105, 992, 41,
                    7003, 256, 8450, 1399, 5, 9876, 321,
                    4444, 808, 120, 9999, 2718, 640, 73,
                    902, 3501, 777, 2048, 6103, 909, 3333, 101];


let showArr = (array) => {
    return array.map(num => ({value: num}));
}


let filterAndShowArr = (array) => {

    let result = array.filter(num => num % 2 === 0);
    return result.map(num => ({value: num}));

}


//Task 3

let task3 = () => {
   let option = parseInt(prompt("Enter your choice (1 - search contact, 2 - Create new contact)"));
   switch(option) {
       case 1:
           searchContact(contacts);
           break;
       case 2:
           createContact(contacts);
           break;
   }
}



let searchContact = (array) => {
    let searchTerm = prompt("Enter name or phone to search:");

    let results = array.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm)
    );

    if (results.length > 0) {
        console.log("Found contacts:", results);
    } else {
        console.log("No contacts found.");
    }
}



let createContact = (array) => {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone:");
    let email = prompt("Enter contact email:");

    if (name && phone && email) {
        array.push({ name, phone, email });
        console.log("Contact added:", { name, phone, email });
    } else {
        console.log("All fields are required!");
    }
}



let contacts = [
    {
        name: "John Smith",
        phone: "+1 202 555 0147",
        email: "john.smith@example.com"
    },
    {
        name: "Emily Johnson",
        phone: "+44 7700 900123",
        email: "emily.johnson@example.com"
    },
    {
        name: "Michael Brown",
        phone: "+61 412 345 678",
        email: "michael.brown@example.com"
    },
    {
        name: "Sophia Williams",
        phone: "+49 151 23456789",
        email: "sophia.williams@example.com"
    },
    {
        name: "Daniel Davis",
        phone: "+33 612 345 678",
        email: "daniel.davis@example.com"
    },

    {
        name: "John Holland",
        phone: "+ 28 281 129 102",
        email: "john.holland@example.com"
    }
];
menu();