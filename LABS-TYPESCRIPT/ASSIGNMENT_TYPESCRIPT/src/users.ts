// defining the interfaces for the users
export interface User{
    id:number;
    firstname:string;
    lastname:string;
    dateofbirth:Date;
    address:string;
    // optional property
    beverages?:"Tea" | "Coffee";
    gender:"Female" | "Male";
    // ? makes the property as optional
    jsskill?:number;
    payment:string;
}