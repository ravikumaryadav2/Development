// function sum  (a,  b = 3) {  // b = 3 it already given it take by default.
//     return a + b;
// }
// sum(2);

// let arr = [ 1,3,4,5,5,6,67,8,0];

// Math.min(...arr);

// console.log(..."Ravi Kumar yadav");


// let arr = [ 1,2 ,3, 4,5,6];

// let newArr = [...arr];


// let chars = [... "hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8];

// let nums = [ ...even, ...odd];

// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// let dataCopy = {
//     ...data, id:123
// };

// Rest

function sum(...args){
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us:", args[i]);
        
        
    }
}