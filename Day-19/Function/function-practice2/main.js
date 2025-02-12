// Create a Function that returns the sum of numbers from 1 to n.
// function getSum(n){
//     let sum = 0;

//     for (let i = 0; i <= n; i++) {
//         sum += i;
        
//     }
//     return sum;
// }

let str = ["hi", "hello","bye", "!"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
      result += str[i];
        
    }
    return result;
}
console.log(concat(str));
