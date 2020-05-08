export class Friend{
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string = "", age: number = 0, email: string = "", bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    list(): void{
       let isBff: string;
       if (this.bff){
           isBff = "Yes";
       }
       else {
           isBff = "No"
       }
        //console.log(`${this.name}\t${this.age}\t${this.email}\t\t${this.bff}`);
        console.log(`${this.name}\t${this.age}\t${this.email}\t\t ${isBff}`);
    }

}