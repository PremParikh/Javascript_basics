
//simple for loop
let a=1;

for (let i = 0; i < 100; i++) 
{
   console.log(a+i);
    
}
//for in loop
let boj={
    name:"prem",
    role:"frontend",
    company:"codewithPrem",
}

for (const key in boj) {
   console.log(key)
        
}
//forof loop used for the array. 
for (const i of "prem") 
{
    console.log(i);    
}

//While loop
let i=2;

while (i<6) {
    console.log(i);
    i++;
}

//do while loop
let x=1;
do {
    console.log(x);
    x++;
} while (x<7);