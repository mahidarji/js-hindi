// Immediately invoked function expressions (IIFE)


(function chai(){
    //named iife
    console.log(`DB connected`);  
})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('mahi')