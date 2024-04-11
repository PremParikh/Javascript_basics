// Create a faulty calculator using javascript
// This faulty calculator does following 
//1. It takes two number as input from the user.
//2. It performs various operation as follows.
// + --> -
// * --> +
// - --> /
// / --> **
// It performs various operation 10% of times

let random = Math.random();
console.log(random);
let a1 = prompt("Enter first number");
let c1 = prompt("Enter operation");
let b1 = prompt("Enter second number");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.4)
{
    //perform correct calculation
    console.log(`the result is ${a1} ${c1} ${b1}`)
    alert(`The result is ${eval(`${a1} ${c1} ${b1}`)}`)
}

else{
    //perform wrong calculation
    c1 = obj[c1];
    alert(`The result is ${eval(`${a1}, ${c1} ${b1}`)}`)
}