// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend. //.toLowercase returns the string lowercase
let user = prompt("What's the day of the week?").toLowerCase()
if (user === "saturday" || user === "sunday") {
  console.log("It's the weekend, yay!!!")
} else {
  console.log("It's a week day, yay school!!!!!!")
}


// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("What is your age?")

age = parseInt(age)
console.log(typeof age)
if (age < 0){
  console.log("That's not an age")
}
if (age <= 12 ) {
  console.log("You are a child!")
}else if (age <= 18){
  console.log("You are a teen")
} else {
  console.log("RIP you lived a good life")
}
  

// WHILE LOOPS
// Print 1 to 5
let i = 1
while (i <= 5){
  console.log(i)
  i++
}




// Print from a certain number to 1




// Summing up to 5
let sum = 0 // we will be adding numbers to this variable

let counter = 1 

while (counter <= 5){
  sum = counter + sum
  counter++
}
console.log("Sum of 1-5", sum)
// Using prompt


let mysteryStudent = "Zyaire"

let user2 = prompt("Enter a student's name")


while(mysteryStudent !== user2.toLowerCase()){
  user2 = prompt("Try again, guess a different student")
}
console.log("Good Job!")