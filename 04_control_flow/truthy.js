const userEmail = []

// if (userEmail) {
//     console.log("Got user mail"); 
// } else{
//     console.log("Dont have user mail");
// }


// truthy values
// "0",'false',[],{},function(){}," "


//falsy values
// 0,-0,BigInt 0n,"",null,undefined,Nan

// if (userEmail.length === 0) {
//     console.log("array is empty");   
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10


console.log(val1);


//terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

