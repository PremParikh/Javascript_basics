let arr = [22,33,2,4,55,43,535]
//Index   [0  1  2 3  4  5   6]

arr[0] = 5666;

//typeof array is object.
console.log(typeof arr);


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);


console.log(arr.toString());


console.log(arr.join(" and "));

console.log(arr.pop());

console.log(arr.push(100));
console.log(arr);
//Even we can add a string
console.log(arr.push("prem"));

console.log(arr.shift(""));
console.log(arr);

console.log(arr.unshift("pp"))
console.log(arr);

//concat used to join a array.
let a1=[1,2,3];
let b1=[4,5,6];
let c1=[7,8,9];

a1.concat(b1,c1);
console.log(a1);

//splice meaning delete the number of index whatever you written
//In this scenario index 1 and 2 will be deleted. 
let ar=[2,3,544,55,666];
console.log(ar.splice(1,2));


const are=[2,3,54,55,66];
console.log(are.slice(1,2));
