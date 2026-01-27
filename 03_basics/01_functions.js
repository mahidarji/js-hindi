const { use } = require("react");

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1 , number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3 , 5)

// console.log("Result: " , result);


function loginUserMessage(username = "mah"){
    if (!username) {
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("mahi"));
// console.log(loginUserMessage("mahi"))


function calculateCartPrice(val1 , val2, ...num1){// rest operator(...)
    return num1
}

// console.log(calculateCartPrice(200, 400 , 500 , 2000))


const user = {
    username: "mahi",
    price: 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400 , 500 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400 , 500 , 600]));