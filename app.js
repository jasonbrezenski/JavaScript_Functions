console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if(count < 0) {
        console.log("Not valid - please give a positive count.");
        return;
    }

    for(i = 1; i <= count; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

printOdds(-50);
printOdds(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if(!userName || !age){
        console.log("Not a valid input - please provide your name and age.")
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16) {
        return console.log(belowSixteen);
    }
    else {
        return console.log(aboveSixteen);
    }
}

checkAge("Johnny", 18);
