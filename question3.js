class User {
    constructor(name, email) {
        this.name = name;  // User's name
        this.email = email; // User's email
    }

    viewData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("Welcome to the college website! Here you can find information about courses, events, and resources.");
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email); 
    }nitialize 

    editData(data) {
        console.log(`Admin ${this.name} is editing the website data...`);
        console.log(`New Data: ${data}`);
    }
}

let admin1 = new Admin('Gurneet Kaur', 'gurneet.kaur@example.com');

admin1.viewData();

admin1.editData("Updated course information for the semester.");
