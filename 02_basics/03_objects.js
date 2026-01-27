//singleton
// Object.create // contructor method

//object literals

const mySym = Symbol("key1")


const JsUser = {
     name : "Mahi",
     "full name" : "MAHI DARJI",
     [mySym]: "mykey1",
     age: 18,
     location: "ahemdabad",
     email: "mahi@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["monday" , "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "mahi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mahi@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());