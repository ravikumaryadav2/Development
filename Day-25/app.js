let btns =document.querySelectorAll("button")

for(btn of btns) {
    // btn.onclick = sayHello ;
    // btn.onclick = sayName;
    // btn.addEventListener("click", sayHello ) ;
    // btn.addEventListener("click",sayName)


    btn.addEventListener("dblclick", sayHello);
    // btn.onmouseenter = function () {
    //     console.log("Hey ravi Are you hover with mouse!");
        
    // }
    
    // console.dir(btn)
}
    
function sayHello(){
alert("hello Ravi!");
}

function sayName (){
    alert("Hey Ravi");
}


