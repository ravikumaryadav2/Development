// function hello(){
//     console.log("hello");
    
// }
// hello();

// function printName() {
//     console.log("Ravi yadav");
    
// }
// printName();

// function printNum(){
//     for (let i = 0; i <=5; i++) {
//         console.log(i);
        
        
//     }
// }

// printNum();

// function isadult(){
//     let age = 19;
//     if (age >= 18) {
//         console.log("adult");
        
//     }else{
//         console.log("Not adult");
        
//     }
// }

// isadult();

// Functions with Arguments(Value we pass to function)

// function printName(name){
// console.log(name);

// }
// printName("Ravi Yadav")

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
    
// }
// printInfo("Ravi Yadav", 24);

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(sum(1, 2), 3));


// let sum = 54; // Global Scope
//  function calSum(a, b){
//     let sum = a+b; // Function Scope ----> if wwe compare in specity then function global specity is more than as compare to global scope.
//     console.log(sum);
    
//  }
//  calSum(1, 2);
//  console.log(sum);
 
// {
//     let a = 25;

// }
// console.log(a);


// for (let in = 0; index < array.length; index++) {

    
// }

// for (let i = 0; i <= 5; i++) {
//    console.log(i);  // block scope.
   
    
// }


// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
        
        
//     }
//     innerFunc();
// }

// Higher Order Functions.

// function multipleGreet(func, n){
// for (let i = 0; i < n; i++) {
//     func();
    
// }
// }
// let greet = function() {
//     console.log("hello");
    
// }

// multipleGreet(greet, 12);

// function oddEvenTest(request){
//  if (request == "odd") {
//     return function(n){
//         console.log(!(n%2 == 0));
        
//     }
//  }else if (request == "even") {
//     return function(n){
//         console.log(n%2 == 0);
        
//     }
//  }else {
//     console.log("wrong request");
    
//  }
// }



const calculator = {
    
    add: function(a, b){
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b){
        return a * b;
    }
}