// const sum = (a,b) => {
//     console.log(a + b);
    
// }

// const cube = (n) => {
//     return n*n*n;
// }

// const pow = (a, b) => {
//     return a**b;
// }

// const mul = (a, b) => (a * b);

// console.log("hi there!");

// setTimeout(( ) => {
//     console.log("Ravi yadav");
    
// }, 4000);

// console.log("welcome to");

// console.log("hello");


// let id = setInterval( () => {
//     console.log("Ravi Yadav");
    
// }, 2000);

// console.log("Amazing this concept to learn");
// clearInterval(id)  


const student = {
    name :"Aman",
    marks:97,
    prop : this, 
    getName : function () {
        console.log(this); // global scope
        return this.name;
        
    },
    getMarks : () => {
console.log( this); // parent's scope --> window
return this.marks;

    },
    getInfo1 : () => {
        setTimeout(() => {
            console.log(this); // student as call
            
        }, 2000);
        
    },
    getInfo2: function()  {
        setTimeout( function () {
            console.log(this); // window as call here
            
        }, 2000);
    }
};