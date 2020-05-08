import { ActorService } from "../service/actor.service";
import { Actor } from "../model/actor.class";

// read input
let readline = require('readline-sync');

// use service from actor.service.ts
let actorSvc: ActorService = new ActorService();

// create 2 actors
let a1: Actor = new Actor(0, "Disha", "Patani", "F", new Date("1992-06-13"));
let a2: Actor = new Actor(1, "Scarlett", "Johansson", "F", new Date("1984-11-22"));

// add actors to the list
actorSvc.add(a1);
actorSvc.add(a2);

console.log("Welcome to the bmdb Actor List");
console.log("--------------------------------");

let command: string = "";

while (command != "exit") {

    console.log("COMMAND MENU");
    console.log("-----------------------");
    console.log("list - list all actors");
    console.log("get - get an actor");
    console.log("add - add an actor");
    console.log("del - delete an actor");
    console.log("exit - exit the app\n");
    // get command
    command = readline.question("Command? ");

    switch (command) {
        case "list":
            console.log("Actor List:");
            console.log("---------------------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());
            });
            break;
        case "get":
            console.log("Get an actor by ID:");
            console.log("---------------------------");
            let id: number = readline.questionInt("Actor ID?");
            let actor: Actor = actorSvc.get(id);
            console.log(actor.about());
            break;
        case "add":
            console.log("Add an actor:");
            console.log("---------------------------");
            id = readline.questionInt("ID?");
            let firstName: string = readline.question("First Name?");
            let lastName: string = readline.question("Last Name?");
            let gender: string = readline.question("Gender?");
            let birthDate: Date = readline.prompt({ prompt: '[$<localeDate>]> ' });
            actor = new Actor(id, firstName, lastName, gender, birthDate);
            actorSvc.add(actor);
            break;
        case "del":
            console.log("Delete an actor:");
            console.log("---------------------------");
            id = readline.questionInt("ID?");
            actorSvc.delete(id);
            console.log("Actor deleted");
            break;
        case "exit":
            break;
        default:
            console.log("Invalid command");
            break;
    }
}