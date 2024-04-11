//String is immutable. You cann't change a string . However, You can add new string.


console.log("hii");

let a="prem";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[7]);

console.log(a.length);


let name="prem";
let friend="xyz";

console.log("His name is " + name + " His friend name is " + friend);
// template literals
console.log(`His name is ${name} & His friends name is ${friend}`);


let b="parikh";

console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log(b.slice(2,5));
console.log(b.slice(2));

console.log(b.replace("pa", "22"));
console.log(b.concat(name, "hey"));


console.log(b.startsWith("pa"));
//Answer true or false. In this scenario it's true.


