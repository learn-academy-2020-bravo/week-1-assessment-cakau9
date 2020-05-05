// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

//create a describe that refers to my function
describe("addThemUp", () => {
    //create variables to use for my input values and output value
    let num1 = 9
    let num2 = 10
    let output = 19
    //create my test
    test("return number that is the summation of the two variables", () => {
        //create my expect to be 19 since inputs are 9 and 10
        expect(addThemUp(num1,num2)).toEqual(output)
    })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

//create a function that takes in two numbers
const addThemUp = (num1,num2) => {
// return both numbers added together
    return num1+num2
}



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triangle and returns the area. The area of a triangle is the base times the height divided by two.

//create a describe that refers to my function
describe("triangleArea", () => {
    //create variables to use for input and output values
    let base = 10
    let height = 12
    let output = 60
    //create my test ()
    test("return the total of the two variables multiplied together and divided by two", () => { 
        //create my expect ()
        expect(triangleArea(base,height)).toEqual(output)
    })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

//create a function that takes in two numbers
const triangleArea = (base, height) => {
    //create a new variable that multiplies the base and height togehter
    let mult2 = (base * height)
    //have the function return mult2 and divide that by 2 to give the area of a triangle
    return mult2/2
}
