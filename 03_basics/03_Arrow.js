const user = {
    username: "mahi",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.username} , welcome to website`);    
        console.log(this);
        
    }

}

// user.welcomeMassage()
// user.username = "darji"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "mahi"
//     console.log(this.username);  
// }

// chai()

// const chai = function(){
//     let username = "mahi"
//     console.log(this.username); 
// }

const chai = () => {
    let username = "mahi"
    console.log(this); 
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "mahi"})

console.log(addTwo(3 , 4))


// const myArray = [2,5,4,7,6,8]

// myArray.forEach(() => {})