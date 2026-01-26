// arrays

const myArr = [0 , 1 , 2 , 3 , 4 , 5]

const myHeros = ["saktimam" , "naagraj"]// 2nd define type
const myArr2 = new Array(1,2,3,4)// 3rd type with new keywork define array
// console.log(myArr[0]);

//Array methods
//  myArr.push(6)// add element in array
//  myArr.push(7)
//  myArr.pop()// remove last element

// myArr.unshift(9)// add element in start
// myArr.shift()//remove unshift value

// console.log(myArr.includes(9));// check value in element yes or no
// console.log(myArr.indexOf(9));// define index of element

// const newArr =  myArr.join() // combine and convert array into string
// console.log(myArr);
// console.log(newArr);

//slice , splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);
