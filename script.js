
function ageAndMembershipCheck() {
  let age = parseInt(prompt("Enter your age:"));
  let hasMembership = prompt("Do you have an active annual membership? (yes/no)").toLowerCase() === "yes";

  if (age >= 18 && hasMembership) {
    console.log("Access granted.");
  } else {
    console.log("Access denied.");
    if (age < 18 && !hasMembership) {
      console.log("Reason: You are under 18 and do not have an active membership.");
    } else if (age < 18) {
      console.log("Reason: You are under 18.");
    } else if (!hasMembership) {
      console.log("Reason: You do not have an active membership.");
    }
  }
}



function temperatureControl() {
  let temp = parseInt(prompt("Enter the current room temperature (°C):"));

  if (temp < 18) {
    console.log("It's too cold.");
  } else if (temp >= 18 && temp <= 22) {
    console.log("The temperature is pleasant.");
  } else {
    console.log("It's too warm.");
  }
}



function weekdayPlanner() {
  let day = parseInt(prompt("Enter a number for the weekday (1-7):"));

  switch (day) {
    case 1:
      console.log("Monday: Coding Session");
      break;
    case 2:
      console.log("Tuesday: Sports");
      break;
    case 3:
      console.log("Wednesday: Study Group");
      break;
    case 4:
      console.log("Thursday: Movie Night");
      break;
    case 5:
      console.log("Friday: Social Evening");
      break;
    case 6:
    case 7:
      console.log("Weekend: Enjoy Leisure Time!");
      break;
    default:
      console.log("Invalid input. Please enter a number between 1 and 7.");
  }
}


function ticketMachine() {
  const BASE_PRICE = 2.5;
  let age = parseInt(prompt("Enter your age:"));
  let isStudent = prompt("Do you have a valid student ID? (yes/no)").toLowerCase() === "yes";

  let price;

  if (age < 6) {
    price = 0;
    console.log("You travel for free.");
  } else if (isStudent && age < 27) {
    price = BASE_PRICE * 0.5;
    console.log("You receive a 50% student discount.");
  } else if (age > 65) {
    price = BASE_PRICE * 0.75;
    console.log("You receive a 25% senior discount.");
  } else {
    price = BASE_PRICE;
    console.log("You pay the full price.");
  }

  console.log(`Final ticket price: €${price.toFixed(2)}`);
}



function countdownAndSum() {
  
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  console.log("Start!");


  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("The sum of numbers from 1 to 100 is:", sum);
}


function positiveNumber() {
  let number = 0;
  while (number <= 0) {
    number = parseInt(prompt("Enter a positive number:"));
  }
  console.log("You entered:", number);
}

function guessingGame() {
  const secret = Math.floor(Math.random() * 10) + 1;
  let guess;

  do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess < secret) {
      console.log("Too low!");
    } else if (guess > secret) {
      console.log("Too high!");
    } else {
      console.log("Congratulations! You guessed the number!");
    }
  } while (guess !== secret);
}
