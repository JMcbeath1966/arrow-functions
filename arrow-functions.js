/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
const addTwoNumbers = (a, b) => {
//code block is between curly braces
    return a + b;
    }
    let sum = addTwoNumbers(3, 5);

    console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2 (6, 4);
console.log(sum2);
// Single Line Arrow Function With Parameters
const sayName = message => console.log(message);
sayName('James');
// Implicit Returns
const sayHello = () => console.log('hello');
sayHello()
// Returning Multiple Lines
const returnAddress = () => (
    `<p>
    This is a multiline string
    42 Feldspar Close
    Kent
    </p>`
)
console.log(returnAddress());
