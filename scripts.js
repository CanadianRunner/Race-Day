let raceNumber = Math.floor(Math.random() * 1000);
let earlyEntry = true;
let age = 28;

if (earlyEntry && age > 18) {
    raceNumber += 1000;
}

if (earlyEntry && age > 18) {
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
}