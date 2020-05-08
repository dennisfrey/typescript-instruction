// read input
let readline = require('readline-sync');

console.log("\nWelcome to Bowling");

let choice: string = readline.question("\nWanna Bowl? (Y/N):");

while (choice == "Y" || choice == "y") {
    let total: number = 0;
    let scoreboard: number[][] = [];


    for (let i: number = 1; i <= 10; i++) {
        let turn1: number = Math.floor(Math.random() * 11);
        let turn2: number = 0
        let turn3: number = 0

        if (turn1 != 10) {
            turn2 = Math.floor(Math.random() * (11 - turn1));
        }
        else if (turn1 == 10 && i == 10) {
            turn2 = Math.floor(Math.random() * 11);
        }

        if (i == 10 && turn2 == 10) {
            turn3 = Math.floor(Math.random() * 11);
        }
        else if
            (i == 10 && turn1 + turn2 == 10) {
            turn3 = Math.floor(Math.random() * (11 - turn2));
        }

        let lineScore: number[] = [turn1, turn2, turn3, 0, 0];
        scoreboard[i] = lineScore;

    }

    // update totals and print
    for (let i: number = 1; i <= 10; i++) {

        // calculate base line score before strike and spare logic
        scoreboard[i][3] = scoreboard[i][0] + scoreboard[i][1] + scoreboard[i][2]
        // strike logic
        if (scoreboard[i][0] == 10 && i < 10) {
            if (scoreboard[i + 1][0] == 10 && i+1 < 10) {
                scoreboard[i][3] += scoreboard[i + 1][0] + scoreboard[i + 2][0];
            }
            else if (scoreboard[i + 1][0] == 10 && i == 10) {
                scoreboard[i][3] += scoreboard[i + 1][0] + scoreboard[i + 1][1];
            }
            else {
                scoreboard[i][3] += scoreboard[i + 1][0] + scoreboard[i + 1][1];
            }
        }
        // spare logic
        else if (scoreboard[i][0] + scoreboard[i][1] == 10 && i < 10) {
            scoreboard[i][3] += scoreboard[i + 1][0];
        }
        // add line score to total
        total += scoreboard[i][3];
        // running total in array
        scoreboard[i][4] = total;

        // 10th frame logic
        if (i == 10 && scoreboard[i][0] + scoreboard[i][1] >= 10) {
            let tenth1: string = scoreboard[i][0] == 10 ? "X" : scoreboard[i][0].toString();
            let tenth2 = "";
            let tenth3 = "";
            if (scoreboard[i][1] == 10) {
                tenth2 = "X";
            }
            else if (scoreboard[i][0] != 10 && scoreboard[i][0] + scoreboard[i][1] == 10) {
                tenth2 = "/";
            }
            else {
                tenth2 = scoreboard[i][1].toString();
            }
            if (scoreboard[i][2] == 10) {
                tenth3 = "X"
            }
            else if (scoreboard[i][1] != 10 && scoreboard[i][1] + scoreboard[i][2] == 10) {
                tenth3 = "/"
            }
            else {
                tenth3 = scoreboard[i][2].toString();
            }

            console.log(`\nRound ${i} [${tenth1}][${tenth2}][${tenth3}] Score(R${i}) ${scoreboard[i][3]} Total ${scoreboard[i][4]}`);

        }
        else {
            if (scoreboard[i][0] == 10) {
                console.log(`\nRound ${i} [X] Strike!!! Score(R${i}) ${scoreboard[i][3]} Total ${scoreboard[i][4]}`);
            }
            else {
                console.log(`\nRound ${i} [${scoreboard[i][0]}][${(scoreboard[i][0] + scoreboard[i][1] == 10 ? "/" : scoreboard[i][1])}] Score(R${i}) ${scoreboard[i][3]} Total ${scoreboard[i][4]}`);
            }
        }
    }
    console.log(`\nTotal score is ${total}`);
    choice = readline.question("\nWanna Bowl Again? (Y/N):");
}

console.log("Goodbye!");