import { User } from "./users";

export class userManager{
   
    private users: User[]=[];

    addUser(user : User):void{
        
        console.log("User added successfully");
        this.users.push(user);
    }

    listUsers():User[]{
        console.log("users list:");
        return this.users;
    }

    removeUser(id:number):void{
        if(id==undefined){
            console.log("Enter the correct id");
        }
        this.users=this.users.filter(user => user.id !==id);
        console.log(`user ${id} is deleted`);
    }

    searchUser(id:number):User|undefined{
        if(id==undefined)
        {
            console.log("Enter a coorect id");
        }
        return this.users.find(user =>user.id===id)
        // return this.users.filter(user=>this.user.id===id)

    }
}	