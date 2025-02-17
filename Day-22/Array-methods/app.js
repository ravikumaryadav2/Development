// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//     console.log(el);
    
// }

// arr.forEach(print);

// //OR

// arr.forEach(function(el){
//     console.log(el);
    
// });

//forEach.

// let arr = [{
//     name: "aman",
//     marks: 94,

// },
// {
//     name: "ravi",
// marks: 95,
// },
// {
//     name : "pradeep",
//     marks: 92,
// }, ];
// map
// let gpa = arr.map((el) => {
//     return el.marks/10;
// });

// arr.forEach((student) =>{
//     console.log(student.name );
    
// });


//Map
// let num =[1, 2, 3, 4];

// let double = num.map((el) => {
//     return el*el;
// });

// Filter

// let num = [ 2, 4, 1, 5, 6, 8, 9 ,11, 42 ,65];
// let ans = num.filter((el) => {
//     return el % 2 != 0; // even -> true, odd --> false
// });

// Every

//  let num = [2,4,6,10].every((el) => {
//     return el%2 == 0;
// })

// Reduce

let num = [1,2,3,4,12].reduce((res, el) => (res + el) );