//function ek block of code hota hai jo ki kisi bhi task ko perform karne ke liye use hota hai. function ko call karne par hi wo execute hota hai.

//function ko define karne ke liye function keyword ka use hota hai, uske baad function ka naam aur parentheses me parameters diye jate hai.


function greet() {

    //function ke andar jo bhi code likha hota hai wo function ke call hone par execute hota hai.
    console.log("Hello, World!");
}

//function ko call karne ke liye function ka naam aur parentheses ka use hota hai
greet(); // Function call

//==========================================================================================

//function expressions me function ko variable me assign kiya jata hai. isme function ka naam nahi hota, sirf variable ka naam hota hai.

let abcd = function() {
    console.log("Hello, from function expression!");
    
} // Function call using variable

//fat arrow function ek shorthand syntax hai function expressions ke liye. isme function ka naam nahi hota, sirf arrow ka use hota hai.
const greetAdmin = () => {
    console.log("Hello, Admin!");
}
greetAdmin(); // Function call using fat arrow function

//==========================================================================================

//parameters function ke andar diye jate hai, jo ki function ko call karte waqt values pass karne ke liye use hote hai.

//arguments wo values hote hai jo function ko call karte waqt pass kiye jate hai. parameters aur arguments me difference ye hai ki parameters function definition me hote hai, jabki arguments function call me hote hai.

function greetUser(name) {
    console.log("Hello, " + name + "!");
}       
greetUser("Alice"); // Function call with argument "Alice"

//default, rest, and spread parameters kya hote hai:
//default parameters wo hote hai jo function ko call karte waqt agar argument nahi diya j   ata hai to use kiya jata hai. isme function definition me parameter ke sath default value di jati hai.
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}   
greetUser(); // Function call without argument, uses default value

//rest parameters wo hote hai jo function ko call karte waqt multiple arguments pass karne ke liye use hote hai. isme function definition me parameter ke sath ... (spread operator) ka use hota hai.
function greetUsers(...names) { 
    names.forEach(name => {
        console.log("Hello, " + name + "!");
    });
}   
greetUsers("Alice", "Bob", "Charlie"); // Function call with multiple arguments

//return values function ke andar return statement ka use karke function se value return karne ke liye use hota hai. isme function call karne par wo value return hoti hai jo function ke andar return statement me di jati hai.