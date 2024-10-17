console.log("Welcome to UserManagement System!!!")
import { userManager } from "./userManager"
import { User } from "./users";
const usermanager=new userManager;
let id=1;
const ananya:User={
        id:id++,
        firstname:"Ananya",
        lastname:"Raju",
        dateofbirth:new Date("2002-08-29"),
        address:"Bangaluru",
        beverages:"Coffee",
        gender:"Female",
        jsskill:50,
        payment:"Cash"
    }
const amulya:User={
    id:id++,
    firstname:"Amulya",
    lastname:"Raju",
    dateofbirth:new Date("2005-05-01"),
    address:"Bangaluru",
    beverages:"Tea",
    gender:"Female",
    jsskill: 80,
    payment:"Card"
}
const raju:User={
    id:id++,
    firstname:"Raju",
    lastname:"Hanu",
    dateofbirth:new Date("1973-05-01"),
    address:"Bangaluru",
    beverages:"Tea",
    gender:"Male",
    jsskill: 60,
    payment:"Card"
}

// adding the users
usermanager.addUser(ananya);
usermanager.addUser(amulya);
usermanager.addUser(raju);
// Display
console.log(usermanager.listUsers());
// searching the user
console.log(usermanager.searchUser(2));
usermanager.removeUser(3);
// console.log(--id);
usermanager.addUser(raju);
console.log(usermanager.listUsers());
// updating the name of the user
usermanager.updateUserName(1,"lastname","RajRathna");
console.log(usermanager.listUsers());
// count the beverages selections
console.log(usermanager.beveragesCount("Coffee"));