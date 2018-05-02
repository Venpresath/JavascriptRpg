
    let playerHealth = 40;
    let grantHealth = 10;
    let done = false;
    let wins = 0;

    function startGame(){
        let gameStart = prompt("Would you like to play?");
        if (gameStart === "yes") {
            playerName = prompt("What's your name?");
            startCombat();
        }
    }

    function getDamage(){
        grantDamage = Math.floor(Math.random() * 5) + 1;
        userDamage = Math.floor(Math.random() * 5) + 1;
        playerHealth -= grantDamage;
        grantHealth -= userDamage;
    }

    function startCombat(){
        
        while (done != true) {
            attack = prompt("Wanna attack?");
            if(attack === "yes"){
                getDamage();
                console.log(`${playerName}'s health is ${playerHealth}`);
                console.log(`Grant's health is ${grantHealth}`);
            } else {
                done = true;
            }

            //check win conditions
            if (grantHealth <= 0) {
                wins++
                if (wins === 3) {
                    done = true;
                    console.log(`${playerName} is the winner!`);
                } else {
                    grantHealth = 10;
                }
            }
            else if (playerHealth <= 0) {
                done = true;
                console.log("Grant is the winner!");
                break;
            }
        }
    }