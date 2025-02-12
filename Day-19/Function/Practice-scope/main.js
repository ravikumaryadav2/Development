let greet = "hello"; // this is global scope.

function changeGreet(){
    let greet = "namaste"; // this is function scope.
    console.log(greet);
    function innerGreet(){
        console.log(greet); // does not work becz we donot callback innnergreet. this is lexical scope.
        
    }
     innerGreet(); // here we put this value then namaste also work and it is lexical scope
}

console.log(greet);
changeGreet(); // call back function.
