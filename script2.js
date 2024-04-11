console.log("hello, this is a tutorial")

let age=18;
// let grace=2;

// // console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age%grace);
// console.log(age**grace);



// if(age+grace >18)
// {
//     console.log('you can drive');
// }
// else{
//     console.log("you can't");
// }

if(age == 18)
{
    console.log('you can drive');
}
else if(age == 0)
{
    console.log('are you kidding?');
}else if(age == 1)
{
    console.log('are you again kidding?');
}
else{
    console.log("you can't");
}
//=== operator used to check equal value and type.


// logical operator 
// a=6 b=3
// a!=b && b!=a
// true
// a!=b && b==a
// false
// a!=b || b==a
// true

//ternary operator
x=2;
y= 6;
let z= x > y ? (x-y) : (y-x);
console.log(z)

//is translate to or equal to following code.
// if(x>y){
//     let z=x-y;
// }
// else{
//     let z = x+y;
// }