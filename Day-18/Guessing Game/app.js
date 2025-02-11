const max = prompt("enter the maximum number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("guess the number");

while (true) {
    if (guess == "quite") {
        console.log("user quite");
        break;
    }
    if (guess == random) {
        console.log("you are right ! CONGRATS!! random number was", random);
        break;
    }
    else if(guess < random) {
      guess = prompt("hint: your guess was too small. please try again");
        
    }else{
        guess = prompt("hint: tyour guess was too large. please try again")
    }
}
