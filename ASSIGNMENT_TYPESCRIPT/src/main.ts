console.log("Welcome to UserManagement System!!!")
import { userManager } from "./userManager"
import { User } from "./users";
const usermanager=new userManager;

const ananya:User={
        id:1,
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
    id:2,
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
    id:3,
    firstname:"Raju",
    lastname:"Hanu",
    dateofbirth:new Date("1973-05-01"),
    address:"Bangaluru",
    beverages:"Tea",
    gender:"Male",
    jsskill: 60,
    payment:"Card"
}

usermanager.addUser(ananya);
usermanager.addUser(amulya);
usermanager.addUser(raju);
console.log(usermanager.listUsers());
console.log(usermanager.searchUser(2));
usermanager.removeUser(3);
console.log(usermanager.listUsers());