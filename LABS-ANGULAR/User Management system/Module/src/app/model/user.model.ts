// export class User{
//     id?:number;
//     name?:string;
//     lname?:string;
//     dob:Date=new Date("2024-10-26");
//     address?:string;
//     beverage:string='Coffee';
//     gender:string='Female';
//     js_skill:number=0;
//     payment:string='';
// }


export class User {
    id: number;
    name: string;
    lastname: string;
    dob: Date;
    address?: string;
    beverage?: string;
    gender: string;
    js_skill: number;
    payment: string;  
    constructor(
      id: number,
      name: string,
      lastname: string,
      dob: Date,
      beverage: string,
      gender: string,
      js_skill: number,
      payment: string,  
      address?: string
    ) {
      this.id = id;
      this.name = name;
      this.lastname = lastname;
      this.dob = dob;
      this.beverage = beverage;
      this.gender = gender;
      this.js_skill = js_skill;
      this.payment = payment;  
      this.address = address;
    }
  }
  