var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);



var fight = function (enemyName) { //hey 
}



for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

// Alert players that they are starting the round
window.alert("Welc0me to R0b0t Gladiat0rs!")

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


// if player choses to fight, then fight 
if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value of enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so that we know that it worked.
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    //  check enemys health 
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died! ");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
    }

    // Subtrack the value of enemyAttack from the value of player Health and use that result to update the value in the playerHealth variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }



    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");


    // if yes (true) , leave fight 
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}


// run fight function to start game

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
