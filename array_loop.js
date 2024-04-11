
//loops in array : We can find a length of array using a for loop
let xx=[2,4,5,6,4]
for (let index = 0; index < xx.length; index++) {
    const element = xx[index];
    console.log(element);
}

//Here value is a 2 & Index is a 1 & arr is a 2,4,5,6,4.
//We can use any variable instead of value index arr
xx.forEach((values,index,arr) => {
    console.log(values,index,arr)
    
});


//using forin loop we can find a keys and element of object.
obj = {
    a:"1",
    b:"2",
    c:"3",
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        console.log(key,element);
    }
}
//forofLoop 
//Used to find value of array
//Here we can iterator is variable
for (const iterator of xx) {
    console.log(iterator);
    
}


//MAP (): create a new array by performing some operation on each array elements
let ab=[1,2,3,5,6]
// let newab=[]
// for (let index = 0; index < ab.length; index++) {
//     const element = ab[index];
//     newab.push(element**2);
    
// }
// console.log(newab);

// Instead of this we use a MAP 
//create a new array by performing some operation on each array elements.

let newab = ab.map((e)=>{
    return(e**2);
})

console.log(newab);

//filter(): filters an araay with values that passes a test & creat a new array:
//for example a.filter(greater_then_five): pass a array whos values more then 5. 
let abc=[2,4,5,7,88,887];

//1st way
const greatherthanfive =(e)=>
{
    if(e>5){
        return true;
    }
return false;
}
console.log(abc.filter(greatherthanfive))

//or also we can written like this 
//2nd way
console.log(abc.filter((e) =>{
    if(e>5){
        return true;
    }
return false;
}   ))


//Reduce method: reduce an array to a single value
//reduece is not used compare to map or filter;
//here red is a function , def is a variable name, a,b is parameter.
let def=[1,2,3,4,5,6]

const red =(a,b)=>{
    return a*b;
    
}
console.log(def.reduce(red));

//array.from : used to create an array from any other object.

let af = Array.from("prem");
console.log(af);


