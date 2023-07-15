//Building a racing app with Vanilla Js

let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge = 24;
let isRegisteredEarly = true;

if (isRegisteredEarly && runnerAge >= 18) {
  raceNumber += 1000;
}
console.log(raceNumber);

if (isRegisteredEarly && runnerAge >= 18) {
  console.log("You will race at 9:30am and your race number is", raceNumber);
} else if (runnerAge >= 18 && !isRegisteredEarly) {
  console.log("You will race at 11:00am and your race number is", raceNumber);
} else if (runnerAge < 18) {
  console.log("You would race at 12:30pm and your race number is", raceNumber);
}
