console.log("new tutorial");
//var is globaly scoped. 
//let is blocked scoped.
//let is used mostly.
var a=5;
var b=7;
var c="prem";
console.log(a+b+8);
console.log( typeof a, typeof b, typeof c);

// const a1 = 7;
// a1 = a1+5;

//Not allowed because a1 is constant.

//7 primitive data type
//1.Null 2.Number 3.String 4.Undefined 5.Boolean 6.Symbol 7.BigInt

let x="prem";
let y=2.2;
let z = 22;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


// Object

let o = {
    "name": "parikh",
    "job code": 4500,

}
console.log(o);
o.salary = "10000"
console.log(o);
o.salary = "20000"
console.log(o);
