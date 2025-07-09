/* Q- What Is JavaScript
Ans- JavaScript ek server-side aur client-side scripting language hai. */


/* Q- How It's Work
Ans- js code browser ke andar hi chalta hai. har browser ke paas js-engine hota hai jaise chrome ke paas V8 engine hai, firefox ke paas SPIDER-MONKEY hai jo code ko smjhta hai aur use run krta hai just like compiler. */


//  *variable and constant
/* Q- What is variable and constant 
Ans- Variable ek aisi jagah hoti hai jahan hum data store krte hain aur use baad me use krte hain. Constant bhi variable ki tarah hota hai lekin iski value change nahi hoti. */

//  *let, const, var
/* Q- What is let, const, var
// Ans- let, const, var ye sab variable declare krne ke liye use hote hain. let aur const block scope me kaam krte hain jabki var function scope me kaam krta hai. let aur const ko reassign nahi kiya ja sakta lekin var ko kiya ja sakta hai. */

var name = "John"; // var variable
let name = "John"; // let variable
const name = "John"; // const variable

// SCOPE( BLOCK, GLOBAL, FUNCTION)
/* Q- What is scope
// Ans- Scope ka matlab hota hai ki variable ya constant kis jagah tak accessible hai.

var function scope variable hai. 
let, const block scope function scope hai*/

// REASSIGNMENT( let, var)
/* Q- What is reassignment
// Ans- Reassignment ka matlab hota hai ki variable ki value ko badalna. let aur var ko reassign kiya ja sakta hai lekin const ko nahi.

let age = 25; // let variable
age = 30; // (Allowed) reassigning let variable 

const umar = 25; // const variable   
umar = 30; // (Not Allowed) reassigning const variable  */

// REDECLARATION( var, let)
/*Q- What is redeclaration
 Ans- Redeclaration ka matlab hota hai ki variable ko dobara declare karna. var ko dobara declare kiya ja sakta hai lekin let aur const ko nahi.

let name = "saif"
let name = "sharique" // (Not Allowed) redeclaring let variable

const name = "saif"
const name = "sharique" // (Not Allowed) redeclaring const variable */

// TDZ
/* Q- What is TDZ
Ans- TDZ ka matlab hai Temporal Dead Zone. Ye ek aisi jagah hoti hai jahan variable ya constant ko declare kiye bina use nahi kiya ja sakta. Agar aap variable ya constant ko declare kiye bina use karte hain to error aayega.

console.log(name);

let name = "saif" //Output is empty   
*/