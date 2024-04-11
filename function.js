//Here function name is i. and parameter is p.
function i(p) {
    console.log("Hey " + p + " How are you?");
    console.log("Hey " + p + " I am good");
    console.log("Hey " + p + " How's going?");
    console.log("Hey " + p + " good");   
}
i("prem");
i("steve");

// function sum(a,b) {
//         console.log(a+b);   
// }
// sum(3,5);

function sum(x,y, z=5) {
   return x+y+z;
}

result = sum(3,5);
result2 =sum(3,3);
result3= sum(3);

console.log("The sum of two number is " , result);
console.log("The sum of two number is " , result2);
console.log("The sum of two number is " , result3);
//NaN stands for not a number

//Arrow function

const fun1 =(a) =>{
    console.log("I am an arrow functionc ", a)
}
fun1(3);

fun1(32);
fun1(372);

