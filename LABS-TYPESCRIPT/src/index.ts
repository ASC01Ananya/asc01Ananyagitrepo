console.log("annuuu")

// FUNCTION 

function add(a:number,b: number)
{
    return a+b;
}

const res=add(5,8);
console.log(res);


// classes and interfaces
interface User{
    firstname :string;
    lastname:string;
    dateofbirth:number;
    addres:string;
}

const anu: User={
    firstname:"Ananya",
    lastname:"Raju",
    dateofbirth:29,
    addres:"Bangalore"
};
const amu: User={
    firstname:"Amulya",
    lastname:"Raju",
    dateofbirth:12,
    addres:"Bangalore"
};
console.log(anu);
console.log(amu);


// classes and inheritence

// class Animal{
//     constructor(public name: String){}
    
//     makesound(): void{
//     console.log(`${this.name} makes a sound `);
//     }
// }

// class Dog extends Animal{
//     makesound(): void {
//         console.log(`${this.name} barks`);
//     }
// }

// const animal=new Animal("Cat");
// animal.makesound();

// const dog=new Dog("Buddy");
// dog.makesound();



class Animal{
constructor(public name:string){}

makessound():void{
    console.log(`${this.name} badkotavle`)
}
}
class Dog extends Animal {
    makessound(): void {
        console.log(`${this.name} barks`)
    } 
        
}
const animal=new Animal("Cat");
animal.makessound();

const dog=new Dog("Buddy");
dog.makessound();

// GENERICS
function indentity<T>(args:T):T{
    return args;
}

console.log(indentity<number>(54));
console.log(indentity<string>("ananya"));

// ENUMS
// enum Directions{
//     up,
//     down,
//     right,
//     left
// }
// console.log(Directions[2]);
// console.log(Directions[Directions.up]);


enum Directions{
    up=1,
    down=4,
    right=50,
    left
}
console.log(Directions.up);
console.log(Directions.down);
console.log(Directions.right);
console.log(Directions.left);

// MODULES
// impoert and exportss


// UNION TYPES
let a:number=10;
let b:string="Hello";
let c: boolean=true;
let d:any=10;
let e:any="Hello";
let g:number[]=[1,2,3];
let k:string[]=["anu","ananya",'anna'];
let l:object={name:"annaya",
    age:"22",
    emails:
    {
        mail:"anu@mail.com"
    },
    pref:["drawing","dancing"]
}