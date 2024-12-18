// defining the interfaces for the users
export interface User{
    id:number;
    firstname:string;
    lastname:string;
    dateofbirth:Date;
    address:string;
    // optional property
    beverages?:string;
    gender:string;
    // ? makes the property as optional
    jsskill?:number;
    payment:string;
}