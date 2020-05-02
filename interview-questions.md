# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: A function helps manipulate data using data types.  Your end goal of a function is a certain return that can then be summed up when console.logging.

  Researched answer: A reusable set of instructions that performs a task or calculates a value.  To use a function, you must define it somewhere in the scope from which you wish to call it. Functions need a return value.



2. What is the difference between map and filter?

  Your answer: Map is a method that goes through an entire array and gives back a new array with the same amount of indexes.  A filter method gives us a specifc place in the index and will return a shorter array than a method because it's filtering.

  Researched answer:  Both .map and .filter are methods used in higher order functions.  .map returns a new array of elements as an array that is the same length as the input array. 
  .filter creates an array filled with all array elements that pass a test implemented by the provided function.  



3. What is the difference between console.log() and return?

  Your answer: console.log() prints your code to the screen, tells the computer to run your code.  return is part of a function that specifies exactly what you want the function to return when you 

  Researched answer: console.log() will display the parameter passed to the log method in the console window.  A return statement makes the function stop executing and return the specified value.



4. In regards to functions, what is an argument?

  Your answer: An argument is what you are trying to find so when you write out a function, it's what would go in the parantheses as the placeholder.  
  Ex. const test = (argument) => {
  }

  Researched answer: Function arguments are the real values passed to (and received by) the function.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Proper pair programming is between two people (there's another term for groups of 3 or more).  One person is the "Driver" the other is the "Navigator".  The "Driver" is the person who is at the keyboard and tackles the obstacles as they come.  "Navigator" looks at the road ahead and helps keep the team focused on what the objective is.  Benefits would be consistent code, "two heads are better than one," more focus.

  Researched answer: Pair programming consists of two programmers sharing a single workstation.  The programmer at the keyboard is the "driver", the other is the "navigator" who is actively involed in the programming as well but their focus is more of an overall approach.  Swap at appropriate increments.



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: TDD - Test Driven Development - probably got that acronym wrong, but I know it's when we use a testing program to check our code.  Jest would be an example of a program that does TDD. 

  Researched answer: Test-driven development is a programming methodology with which one can tackle the design, implementation, and testing of units of code, and to some extent the expected funcitonality of a program.  Has three cycles: writing a failing test, making the test pass, and then refactoring the implemenation.



7. What is something we did in class this week you found helpful?  

  Your answer: Everything we did this week in class was helpful in some way or another.  I'm glad I'm finally learning what exactly git and GitHub do and are capable of.  I was able to set up git on a PC I use to pratice code using the terminal which was pretty awesome since I could understand what it was doing and the commands I used to install it made sense to me instead of just looking like a bunch of random words. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React - a JavaScript library for building user interfaces
- Yarn - is a new open source JavaScript package manager developed by Facebook that can replace your whole npm workflow.
- React State - React components have a built-in state object.  The state object is wher eyuo store property values that belongs to the component.  When the state object changes, the component re-renders. 
- CRUD - the four basic functions that models should be able to do.  Create, read, update, and delete.    If an action cannot be described by one of these four operations, then it shoudl be a model of its own.  It's common in constructing web applications.  
- this - a keyword in Javascript that refers to an object, that object which is executing the current bit of javascript code.  We just need to know how, when, and from where the function is called and does not matter how and where the function is declared or defined.  
