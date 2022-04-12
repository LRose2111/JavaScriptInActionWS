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

// 2 Random Number

function getRandomNumber(min,max){
     return Math.floor(Math.random() * (max - min + 1)) + min;
}

numberPicked = getRandomNumber(0,10)

if (numberPicked < 3){
    console.log("Beatles");
}
else if (numberPicked < 6){
    console.log("Stones");
}
else if (numberPicked < 9){
    console.log("Floyd");
}
else {
    console.log("Hendrix");
}

// LOOPS

// 1 For Loop

for (let i = 1; i<8; i++){
    alert("JavaScript is cool!" + i)
}

for (let i = 0; i<11 ; i++){
    alert(i)
}

for (let i =1; i<11 ; i++){
    if (i%2 == 0){
        alert("GoodBye");
    }
    else {
        alert("Hello");
    }
}



