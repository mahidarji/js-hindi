// primitive

// 7 types : String,Number,Boolean,null,undefined, Symbol(create unique value) , BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = ('123')

console.log(id == anotherId);

const bigNumber = 3121477889955555n

// Reference type or non primitive
// Array , Objects , Functions

const heros = ["shaktiman","Mahi","nagraj"]
let myObj = {
    name:"mahi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , heap (non primitive use)

let myYoutubename = "mahidarjidotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.Email = "mahi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);