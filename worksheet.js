// VARIABLES

// 1 Day of Week

dayOfWeek = 'Monday'
console.log(dayOfWeek);
dayOfWeek = 'Friday'
console.log("I can't wait for" + dayOfWeek)

// 2 User Input

animalInput = prompt("What is your favorite animal?");
colorInput = prompt("What is your favorite color?");

console.log("I've never seen a" + colorInput + "" + animalInput)

// CONDITIONALS

// 1 Meals

timeOfDay = "1200"
let aFavoriteMeal = ["Wings", "Steak", "Pasta"]

let userInput = prompt("What is the time?: ");

if (userInput < timeOfDay){
    alert("Breakfast Time!! Lets have " + aFavoriteMeal[0]);
}
else if (userInput > timeOfDay , userInput < "1700"){
    alert("Lunch Time!! Lets have" + aFavoriteMeal[1]);
}
else {
    alert("Dinner Time!! Lets have" + aFavoriteMeal[2]);
}
