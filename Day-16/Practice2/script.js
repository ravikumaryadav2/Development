const favMovie = "avatar";
let guess= prompt("guess my favmovie");

while ((guess != favMovie) && (guess != "quite")) {
    guess = prompt("wrong guess.please try again");
    
}
if (guess == favMovie) {
    console.log("congrats!!");
    
}
else {
    console.log(" you quite it");
    
}