// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//Declare a function  called boilingPoint that takes in a number
const boilingPoint = (num) => {
//We are comparing numbers, so use if else statements for each expected outcome
//if statement returning 'num is above boiling point' if variable is above 212
    if (num > 212) {
        return `${num} is above boiling point.` 
//else if statement returning 'num is below boiling point' if variable is above 212
    } else if (num < 212) {
        return `${num} is below boiling point. `
//else if statement returning 'num is at boiling ponit' if variable is 212
    } else if (num === 212) {
        return `${num} is at boiling point.`
    }
}
//will run function and print appropriate statement based on variable 
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//declare a function called mult5 that takes in an array of numbers
const mult5 = (array) => {
//declare new array the multiplied numbers will be pushed to
    let newNum = [ ]
// use a for loop to return an array with all numbers multipled by 5
    for (let i=0; i< array.length; i++) {
//push the numbers in old array after being mulitpled by 5 into new array
        newNum.push(array[i] * 5)
    }
//new array with old array mutlipled by 5
    return newNum 
}
//will print a new array using variable that returns each index multipled by 5
console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//declare a function called mult5 that takes in an array of numbers
const multiply5 = (array) => {
// use the .map method to return an array with all numbers multipled by 5
        return array.map (value => value * 5)
    }
//will print a new array using variable that returns each index multipled by 5
console.log(multiply5(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//declare a function that takes in a string
const noVowels = (string) => {
//declare variable that contains all vowels
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//declare variable that will split the string into an array of substrings
    let arr = string.split("")
//use filter method to go through variable arr of substrings and take out the vowels present in input and then join cohesively at the end
        return arr.filter(value => vowels.indexOf(value) === -1).join("")
}
//print input string without vowels
console.log(noVowels(stringWithVowels1)) 
console.log(noVowels(stringWithVowels2))




// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

//declare a function that takes in an object
const noVowels1 = (object) => {
    //declare variable that contains all vowels
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //if statement to run the function that will return a string with no vowels if a string is entered
    if (typeof object === "string") {
    //declare variable that will split the string into an array of substrings
        let arr = object.split("")
    //use filter method to go through variable arr of substrings and take out the vowels present in input (indicated by -1) and then join cohesively at the end using join method
            return typeof arr.filter(value => vowels.indexOf(value) === -1).join("")
    //else statement to declare not a string if a boolean or number is added
     } else {
        return "not a string"
     }
    }
    //print "not a string" if variable doesn't contain a string
    console.log(noVowels1(notAString1))
    console.log(noVowels1(notAString2))




// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}
]
//declare function that takes in an object
const onlyCats = (object) => {
    //use filter method to go through all values in object and only return the values who contain "cat"
     return object.filter(value => value.animal === "cat")
}
//print the name and aninaml type for cats only
console.log(onlyCats(toonimals))

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonimals1 = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}
]
//declare a function that is taking in an array
const noCats = (array) => {
//create a filter to get rid of all animals that have cat under the animal value in object
    let getRid = array.filter(value => value.animal !=="cat")
//use .map function to go through what values are left after getRid return the names of the cat less animals and join method them so they display the names without being in an array
    return getRid.map(value => value.name).join(" ")
}
console.log(noCats(toonimals1))