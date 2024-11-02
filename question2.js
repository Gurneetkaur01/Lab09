class User {
    constructor(name, email) {
        this.name = name;  
        this.email = email;
    }

    viewData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("Welcome to the college website! Here you can find information about courses, events, and resources.");
    }
}

let userName = prompt("Enter your name:");
let userEmail = prompt("Enter your email:");

let user1 = new User(userName, userEmail);

user1.viewData();
