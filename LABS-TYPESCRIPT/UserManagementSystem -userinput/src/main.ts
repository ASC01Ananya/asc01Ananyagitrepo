console.log("Welcome to UserManagement System!!!")
import { Console } from "console";
import { userManager } from "./userManager"
import { User } from "./users";
import * as read from "readline-sync";
// import * as read from "readline-sync";
const usermanager = new userManager;
let id = 1;
const ananya: User = {
    id: id++,
    firstname: "Ananya",
    lastname: "Raju",
    dateofbirth: new Date("2002-08-29"),
    address: "Bangaluru",
    beverages: "Coffee",
    gender: "Female",
    jsskill: 50,
    payment: "Cash"
}
const amulya: User = {
    id: id++,
    firstname: "Amulya",
    lastname: "Raju",
    dateofbirth: new Date("2005-05-01"),
    address: "Bangaluru",
    beverages: "Tea",
    gender: "Female",
    jsskill: 80,
    payment: "Card"
}
const raju: User = {
    id: id++,
    firstname: "Raju",
    lastname: "Hanu",
    dateofbirth: new Date("1973-05-01"),
    address: "Bangaluru",
    beverages: "Tea",
    gender: "Male",
    jsskill: 60,
    payment: "Card"
}

// adding the users
usermanager.addUser(ananya);
usermanager.addUser(amulya);
usermanager.addUser(raju);
// Display
console.log(usermanager.listUsers());
// // searching the user
// console.log(usermanager.searchUser(2));
// usermanager.removeUser(3);
// // console.log(--id);
// usermanager.addUser(raju);
// console.log(usermanager.listUsers());
// // updating the name of the user
// usermanager.updateUserName(1,"lastname","RajRathna");
// console.log(usermanager.listUsers());
// // count the beverages selections
// console.log(usermanager.beveragesCount("Coffee"));
while (true) {
    let choice = read.questionInt("Menu \n 1. Add User \n 2. Search User\n 3. Remove User \n 4. Display the user List\n 5. Update Name \n 6. get Beverages Count\n ENTER 0 TO EXIT");
    if (choice == 0) process.exit();
    switch (choice) {
        case 1: {
            const firstname = read.question("Enter the first name: ");
            const lastname = read.question("Enter the last name: ");
            const dobString = read.question("Enter the date of birth (YYYY-MM-DD): ");
            const dateofbirth = new Date(dobString);
            const address = read.question("Enter the address: ");
            const beverages = read.question("Enter the beverage (Tea/Coffee): ");
            const gender = read.question("Enter the gender (Male/Female): ");
            const jsskill = read.questionInt("Enter JS skill level (0-100): ");
            const payment = read.question("Enter payment method (Cash/Card): ");

            // Creating a new user object
            const newUser: User = {
                id: id++,
                firstname: firstname,
                lastname: lastname,
                dateofbirth: dateofbirth,
                address: address,
                beverages: beverages,
                gender: gender,
                jsskill: jsskill,
                payment: payment
            };

            usermanager.addUser(newUser);
            console.log("User added successfully!");
            break;
        }
        case 2: {
            let search = read.questionInt("Enter the id!!!!")
            console.log(usermanager.searchUser(search));
            break;
        }
        case 3: {
            let remove = read.questionInt("Enter the id!!!!")
            usermanager.removeUser(remove);
            // --id;
            break;
        }
        case 4: {
            console.log(usermanager.listUsers());
            break;
        }
        case 5: {
            const id = read.questionInt("Entr the id to update name ");
            const para = read.question("Enter the options to be updated(firstname | lastname)");
            const rename = read.question("Enter the new name");
            if (para === "Firstname") usermanager.updateUserName(id, "firstname", rename);
            else
                usermanager.updateUserName(id, "lastname", rename);
            break;
        }
        case 6: {
            const bev = read.question("Enter the beverage (Tea | Coffee)to get the people count");
            if (bev === "Coffee")
                console.log(usermanager.beveragesCount("Coffee"));
            if (bev === "Tea")
                console.log(usermanager.beveragesCount("Tea"));
            else
                console.log("Enter the beverages from the menu(Tea | Coffee) ");
        }
    }
}