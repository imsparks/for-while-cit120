//Create selectors for the three statements at the end.
var ele1 = document.body.querySelector(".first")
var ele2 = document.body.querySelector(".second")
var ele3 = document.body.querySelector(".third")

//Set variable for condition for easier control of loop.
var condition = true
var dragonDamage = 0
var userDamage = 0

//Create a WHILE loop.
while(condition){
    var inputNumber = Number(prompt("Enter a number of hits you will attempt on the dragon up to 5:"))
//Add original dragon damage to build sum each loop.
    var randomNumber = Math.ceil((Math.random() * inputNumber))
    if(randomNumber > 5){
        randomNumber = 1;
    }
    dragonDamage = randomNumber + dragonDamage;

//Set conditions for win.
    if(dragonDamage >= 10) {
        condition = false;
        ele1.innerHTML = "Damage to dragon: " + dragonDamage;
        ele2.innerHTML = "Damage to user: " + userDamage;
        ele3.innerHTML = "User wins! TRYHARD";
    }
//User damage is random between 1 and 2. Add 1.5 and use Math.floor to keep values between 1 and 2.
//Set conditions for lose.
    userDamage = Math.floor(Math.random() + 1.5) + userDamage
    if(userDamage >= 5){
        condition = false
        ele1.innerHTML = "Damage to dragon: " + dragonDamage;
        ele2.innerHTML = "Damage to user: " + userDamage;
        ele3.innerHTML = "User loses! TOO BAD UR BAD AT THE GAME";
    }

}
//Success, seems to favor dragon winning more often.