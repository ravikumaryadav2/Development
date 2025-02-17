// write an arrow function that returns the square of a number 'n'.

// const sqr = (n) => (n *n);

// write a function that prints "hello world" 5 times at intervals of 2s each.

let id = setInterval  (() => {
    console.log("Hello World");
    
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
    
},10000); 