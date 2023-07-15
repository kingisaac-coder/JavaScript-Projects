// This application is a dog years calculator, built entirely with Javascript

const myAge = 18;

const earlyYears = 2 * 10.5;
//Now we multiply the arlyYears by 10.5 and reassign it to earlyears..This is what we call reassign..
//Assigning laterYears
var laterYears = myAge - 2;
//we multiply laterYear by 4
laterYears * 4;
//now we add the early and later years and store in in a variable called myAgeInDogYears..
let myAgeInDogYears = earlyYears + laterYears;

//Now we use a string method to test the name
const myName = "JOHN".toLowerCase();

console.log(
  "my name is" +
    " " +
    myName +
    "." +
    " " +
    "I am" +
    " " +
    myAge +
    " " +
    "years old in human years which is" +
    " " +
    myAgeInDogYears +
    " " +
    "years old in dog years"
);
