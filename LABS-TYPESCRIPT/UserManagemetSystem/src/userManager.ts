import { User } from "./users";

export class userManager {

    private users: User[] = [];

    addUser(user: User): void {

        console.log("User added successfully");
        this.users.push(user);
    }

    listUsers(): User[] {
        console.log("users list:");
        return this.users;
    }

    removeUser(id: number): void {
        if (id == undefined) {
            console.log("Enter the correct id");
        }
        this.users = this.users.filter(user => user.id !== id);
        console.log(`user ${id} is deleted`);
    }

    searchUser(id: number): User | undefined {

        return this.users.find(user => user.id === id)
        // return this.users.filter(user=>this.user.id===id)

    }

    updateUserName(id: number, label: "firstname" | "lastname", updatedValue: string): void {
        let cur_user = this.users.find(user => user.id === id);

        if (cur_user) {
            // Use bracket notation to update the property dynamically
            cur_user[label] = updatedValue;
            console.log("UPDATED!!!");
        } else {
            console.log("User not found!");
        }
    }

    beveragesCount(beverages: "Tea" | "Coffee") {
        return this.users.filter(user => user.beverages === beverages).length
    }

}	