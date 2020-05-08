import { Friend } from "../model/friend.class";

export class FriendsListComponent{

}

let friend1: Friend = new Friend("Nick", 40, "Nick@gmail.com", true);
let friend2: Friend = new Friend("Charles", 40, "Charles@gmail.com", false);
let friend3: Friend = new Friend("Ana", 33, "Ana@gmail.com", false);
let friend4: Friend = new Friend("Ngan", 29, "Ngan@gmail.com", false);
let friend5: Friend = new Friend("Megan", 36, "Megan@gmail.com", false);

let friends: Friend[] = [friend1, friend2,friend3,friend4, friend5];
console.log("Name\tAge\tEmail\t\tBFF");
for(let friend of friends){
    console.log(friend.list());
}