var main = function()
{
    
    //PLAYER OBJECT AND RELATED VARIABLES
    var player = {    
    chopSpeed: 1,
    maxEnergy: 26,
    currentEnergy: 26,
    strength: 5,
    curHealth: 100,
    maxHealth: 100,
    luck: 1
    };

    //ITEM RELATED VARIABLES/OBJECTS    
    var axe = {
    currentAxeDurability: 100,
    maxAxeDurability: 100,
    axeUpgPrice: 120,
    axeRepairPrice: 50
    };
    
    //STORAGE/ECONOMY RELATED VARIABLES/OBJECTS
    
    var playerStorage = {
        currentWood: 0,
        morningWoodStock: 0,
        playerQuads: 0,
        currentGold: 500
    };
    
    var choppedThisTurn;
    
    var localMarket = {
        woodPrice: 1.25,
        medFloraCost: 250,
        quadsBuyPrice: 400,
        morningWood: false,
        morningWoodActivePrice: 500
    };
    
    var quadsSellPrice;
       
    //EVENT RELATED VARIABLES
    var dungFarmInvestPrice = 100;
    var tavernInvestPrice = 200;
    var goblinInvestPrice = 300;
    var pitRequiredEnergy = 25;
    var pitEntryFee = 150;
    var mineInvestPrice = 400;
    var investmentResult;

    //STATS UPGRADE RELATED VARIABLES/OBJECTS
    var statsUpgrade = {
        energyUpgPrice: 200,
        strUpgPrice: 100,
        tradeUpgPrice: 250,
        speedUpgPrice: 150,
        hpUpgPrice: 200,
    };
    
    //REPUTATION RELATED VARIABLES
    var townStatus="Newcomer";
    var arenaStatus="Unknown";
    var wantedLevel="Not Wanted";
    var playerNotoriety=0;
    var gloryPoints=0;
    var arenaWins=0;
    var arenaLoses=0;
    var bodyCount=0;
    
    //NPC VARIABLES
    var hiredWorkers = 0;
    var workerChops;
    var workerCosts;
    var working = false;
    
    // ARENA EVENT ARRAYS
    var opponents = ['Bumbo the Troll','Liko Liko','Pigeon-Man','Johnny The Panty Theif','Yolo The Swag','Dingo The Magic','King Slime','Senko The Pig', 'Fiece The Mad', 'Dinky the Blouse', 'Olivrikos', 'Juts Braun', 'Fry, the God', 'Blago The Hobo'];
    var arenas = ['The Lost Caverns','Summoners Drift', 'Ruins of Zemoria', 'Baldovian Heights', 'The Cursed Forest', 'Arena of The Damned','Rainbow Road', 'The Tavern Basement', 'Under The Bridge'];
    var weapons = ['Frost Dagger', 'Magic Powder', 'Dung Ball', 'Excalibur!!!', 'Bucket of Milk', 'Chicken Eggs', 'Piece of Lumber', 'Saw', 'Rusted Sword', 'Wicked Mace', 'Bow of Madness', 'A Stone', 'Ballzack', 'Fire Bomb', 'Vial of Filth', 'Tainted Blood', 'Summons a werewolf'];
    
    //HOUSING STATUS ARRAY
    var housing = ['Shack', 'Small Hut', 'Large Hut', 'Shabby House', 'Decent House', 'Nice House', 'Large House', 'Mansion'];
    
//    var curGoldText = document.getElementById("currentGold").innerHTML = "Gold: " + currentGold;
//    var curEnergyText = document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
//    var curAxeDurText = document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxDurability;
//    var curChopSpeedText = document.getElementById("currentSpeed").innerHTML = chopSpeed;
//    var curStrText = document.getElementById("currentStrength").innerHTML = strength;

    //IN DOCUMENT POPULATION OF PLAYER/MARKET VALUES 
    document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
    document.getElementById("energySupply").innerHTML= player.currentEnergy + "/" + player.maxEnergy;
    document.getElementById("axeSupply").innerHTML = axe.currentAxeDurability + "/" + axe.maxAxeDurability;
    document.getElementById("currentSpeed").innerHTML = player.chopSpeed;
    document.getElementById("currentStrength").innerHTML = player.strength;
    document.getElementById("marketWoodPrice").innerHTML = localMarket.woodPrice;
    document.getElementById("playerLuck").innerHTML = player.luck;
    document.getElementById("healthSupply").innerHTML = player.curHealth+ "/" + player.maxHealth;
    document.getElementById("currentTownStatus").innerHTML = townStatus;
    document.getElementById("playerQuads").innerHTML = playerQuads;
    document.getElementById("mornWoodUnlockPrice").innerHTML = "Price: " + localMarket.morningWoodActivePrice;
    
    //IN DOCUMENT POPULATION OF UPGRADE PRICES
    document.getElementById("speedUpgradePrice").innerHTML ="Price: " + statsUpgrade.speedUpgPrice;
    document.getElementById("tradeUpgradePrice").innerHTML ="Price: " + statsUpgrade.tradeUpgPrice;
    document.getElementById("strUpgradePrice").innerHTML ="Price: " + statsUpgrade.strUpgPrice;
    document.getElementById("axeUpgradePrice").innerHTML ="Price: " + axe.axeUpgPrice;
    document.getElementById("energyUpgradePrice").innerHTML ="Price: " + statsUpgrade.energyUpgPrice;
    document.getElementById("hpUpgradePrice").innerHTML ="Price: " + statsUpgrade.hpUpgPrice;
    
    //IN DOCUMENT POPULATION OF EVENT PRICES/REQUIREMENTS
    document.getElementById("dungInvestPrice").innerHTML = "Price: " + dungFarmInvestPrice;
    document.getElementById("quadsPrice").innerHTML = "Price: " + localMarket.quadsBuyPrice;
    document.getElementById("pittsReq").innerHTML = "Requirements: " + pitEntryFee+ " Gold, " + pitRequiredEnergy + " Energy";
    
    //IN DOCUMENT POPULATION OF ARENA STATUS
    document.getElementById("wLRecord").innerHTML = arenaWins +"/" +arenaLoses;
    document.getElementById("arenaStatus").innerHTML = arenaStatus;
    document.getElementById("wantedLevel").innerHTML = wantedLevel;
    document.getElementById("gloryPoints").innerHTML = gloryPoints;
    document.getElementById("notoriety").innerHTML = playerNotoriety;
    document.getElementById("bodyCount").innerHTML = bodyCount;
    
   $('#chop').on('click',function(){
       
            if(player.currentEnergy>0 && axe.currentAxeDurability>0)
            {
                choppedThisTurn= Math.floor(Math.random() * player.strength + player.chopSpeed);
                axe.currentAxeDurability--;
                player.currentEnergy--;
                playerStorage.currentWood += choppedThisTurn;
            }
            
            else if(player.currentEnergy==0 || player.currentEnergy<0)
            {
                alert("You don't have enough energy to chop!");
            }
       
            else if(axe.currentAxeDurability==0 || axe.currentAxeDurability<0)
            {
                alert("Your axe is broken!");
            }
                
            document.getElementById("stockpiledWood").innerHTML = playerStorage.currentWood;
            document.getElementById("axeSupply").innerHTML = axe.currentAxeDurability + "/" + axe.maxAxeDurability;
            document.getElementById("energySupply").innerHTML= player.currentEnergy + "/" + player.maxEnergy;
   });
    
   $('#chopMorning').on('click',function(){
       
            if(player.currentEnergy>=2 && axe.currentAxeDurability>=5 && localMarket.morningWood == true)
            {
                choppedThisTurn= Math.floor(Math.random() * player.strength + player.chopSpeed);
                axe.currentAxeDurability-=5;
                player.currentEnergy-=2;
                playerStorage.morningWoodStock += choppedThisTurn;
            }
            else if(player.currentEnergy==0 || player.currentEnergy<0)
            {
                alert("You don't have enough energy to chop!");
            }
            else if(axe.currentAxeDurability==0 || axe.currentAxeDurability<0)
            {
                alert("Your axe is broken!");
            }
            else if(localMarket.morningWood == false)
            {
                alert("Morning Wood has still not been activated yet");
            }
                
            document.getElementById("stockMorningWood").innerHTML = playerStorage.morningWoodStock;
            document.getElementById("axeSupply").innerHTML = axe.currentAxeDurability + "/" + axe.maxAxeDurability;
            document.getElementById("energySupply").innerHTML= player.currentEnergy + "/" + player.maxEnergy;
   });    
    
    $('#sellWoodBtn').on('click', function(){
        if(playerStorage.currentWood > 0)
        {
            playerStorage.currentWood--;
            playerStorage.currentGold+=localMarket.woodPrice;
            
            document.getElementById("stockpiledWood").innerHTML = playerStorage.currentWood;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        } 
    });
    
    $('#sell5WoodBtn').on('click', function(){
        if(playerStorage.currentWood > 5)
        {
            playerStorage.currentWood -= 5;
            playerStorage.currentGold += localMarket.woodPrice*5;
            
            document.getElementById("stockpiledWood").innerHTML = playerStorage.currentWood;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }
    });
    
    $('#sellAllWoodBtn').on('click', function(){
        if(playerStorage.currentWood > 0)
        {    
            playerStorage.currentGold += localMarket.woodPrice * playerStorage.currentWood;
            playerStorage.currentWood = 0;
            
            document.getElementById("stockpiledWood").innerHTML = playerStorage.currentWood;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }    
    });
    
    $('#sellAllMornWoodBtn').on('click', function(){
        if(playerStorage.morningWoodStock>0 && localMarket.morningWood==true)
        {    
            playerStorage.currentGold+=(localMarket.woodPrice * 2) * playerStorage.morningWoodStock;
            playerStorage.morningWoodStock=0;
            
            document.getElementById("stockMorningWood").innerHTML = playerStorage.currentWood;
            document.getElementById("currentGold").innerHTML =playerStorage.currentGold;
        }
    });
    
    $('#buySCokeBtn').on('click', function(){
        if(playerStorage.currentGold>5 && player.currentEnergy<player.maxEnergy)
        {
            player.currentEnergy+=2;
            playerStorage.currentGold-=5;
            
            document.getElementById("energySupply").innerHTML = player.currentEnergy + "/" + player.maxEnergy;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }
        else
        {
            alert("You can't handle more energy!");
        }    
        
    });
    
    $('#buyLCokeBtn').on('click', function(){
        if(playerStorage.currentGold>50 && player.currentEnergy<player.maxEnergy)
        {
            player.currentEnergy=player.maxEnergy;
            playerStorage.currentGold-=50;
            
            document.getElementById("energySupply").innerHTML = player.currentEnergy + "/" + player.maxEnergy;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }
        else
        {
            alert("You can't handle more energy!");
        }    
        
    });
    
    $('#buyMedBtn').on('click', function(){
        if(player.curHealth < player.maxHealth && playerStorage.currentGold >= localMarket.medFloraCost)
        {
            playerStorage.currentGold -= localMarket.medFloraCost;
            player.curHealth+=20;
            
            document.getElementById("healthSupply").innerHTML = player.curHealth+ "/" + player.maxHealth;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }
        else
        {
            if(playerStorage.currentGold < localMarket.medFloraCost)
            {
                alert("You can't afford to buy the Medical Flora!");
            }
            else
            {
                alert("You can't handle anymore health!");
            }
        }
    });
    
    $('#repairAxeBtn').on('click', function(){
        if(playerStorage.currentGold >= axe.axeRepairPrice)
        {
            axe.currentAxeDurability = axe.maxAxeDurability;
            playerStorage.currentGold -= axe.axeRepairPrice;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("axeSupply").innerHTML = axe.currentAxeDurability + "/" + axe.maxAxeDurability;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#axeUpBtn').on('click', function(){
        if(playerStorage.currentGold >= axe.axeUpgPrice)
        {
            playerStorage.currentGold -= axe.axeUpgPrice;
            axe.maxAxeDurability+= 25;
            axe.axeUpgPrice+= 100;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("axeSupply").innerHTML = axe.currentAxeDurability + "/" + axe.maxAxeDurability;
            document.getElementById("axeUpgradePrice").innerHTML = "Price: " + axe.axeUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#energyUpBtn').on('click', function(){
        if(playerStorage.currentGold >= statsUpgrade.energyUpgPrice)
        {
            playerStorage.currentGold -= statsUpgrade.energyUpgPrice;
            player.maxEnergy+=25;
            statsUpgrade.energyUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("energySupply").innerHTML = player.currentEnergy + "/" + player.maxEnergy;
            document.getElementById("energyUpgradePrice").innerHTML ="Price: " + statsUpgrade.energyUpgPrice;
        }
        else
        {
           alert("You have insufficient gold!");
        }
        });
    
    $('#strUpBtn').on('click', function(){
        if(playerStorage.currentGold >= statsUpgrade.strUpgPrice)
        {
            playerStorage.currentGold -= statsUpgrade.strUpgPrice;
            player.strength+=1;
            statsUpgrade.strUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("currentStrength").innerHTML = player.strength;
            document.getElementById("strUpgradePrice").innerHTML = "Price: " + statsUpgrade.strUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
        
    $('#tradeUpBtn').on('click', function(){
        if(playerStorage.currentGold >= statsUpgrade.tradeUpgPrice)
        {
            playerStorage.currentGold -= statsUpgrade.tradeUpgPrice;
            localMarket.woodPrice+=0.25;
            statsUpgrade.tradeUpgPrice+=200;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("marketWoodPrice").innerHTML = localMarket.woodPrice;
            document.getElementById("tradeUpgradePrice").innerHTML = "Price: " + statsUpgrade.tradeUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#speedUpBtn').on('click', function(){
        if(playerStorage.currentGold >= statsUpgrade.speedUpgPrice)
        {
            playerStorage.currentGold -= statsUpgrade.speedUpgPrice;
            player.chopSpeed+=0.10;
            statsUpgrade.speedUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("currentSpeed").innerHTML = player.chopSpeed;
            document.getElementById("speedUpgradePrice").innerHTML ="Price: " + statsUpgrade.speedUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#healthUpgBtn').on('click', function(){
        if(playerStorage.currentGold >= statsUpgrade.hpUpgPrice)
        {
            playerStorage.currentGold -= statsUpgrade.hpUpgPrice;
            player.chopSpeed+=0.10;
            statsUpgrade.hpUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("currentSpeed").innerHTML = player.chopSpeed;
            document.getElementById("speedUpgradePrice").innerHTML ="Price: " + statsUpgrade.hpUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#dungInvestBtn').on('click', function(){
        if(playerStorage.currentGold >= dungFarmInvestPrice)
        {
            playerStorage.currentGold -= dungFarmInvestPrice;
            investmentResult = Math.round(Math.random());
                
            if(investmentResult==1)
            {
                playerStorage.currentGold += dungFarmInvestPrice * 2;
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
                alert("Your investment paid off! You earned: " + dungFarmInvestPrice *2 + " gold!");
            }
            else
            {
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
                alert("Your investment didn't pay off.")
            }
        }
        else
        {
            alert("You need more gold to make an investment!");
        }
    });
    
    $('#tavernInvestBtn').on('click',function(){
        if(playerStorage.currentGold >= tavernInvestPrice)
        {
            playerStorage.currentGold -= tavernInvestPrice;
            investmentResult = Math.round(Math.random());
            
            if(investmentResult>0)
            {
                playerStorage.currentGold += tavernInvestPrice*2;
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
                alert("Your investment in the tavern paid off! The tavern owner pays you " + tavernInvestPrice*2 +" Gold for your help!" );
            }
            else
            {
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
                alert("The tavern owner gambled your money away! You will receive nothing for your help!");
            }
        }
        else
        {
            alert("You need more gold to help out the tavern owner!");
        }
    });
    
    $('#goblinInvestBtn').on('click',function(){
        if(playerStorage.currentGold >= goblinInvestPrice)
        {
            playerStorage.currentGold -= goblinInvestPrice;
            investmentResult = Math.round(Math.random()*100);
            console.log(investmentResult);
            
                if (investmentResult<=25)
                {
                    playerStorage.currentGold += goblinInvestPrice;
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                    alert("The Goblins storm into your house and throw your money back at you specifically aiming for your face! You get your " + goblinInvestPrice + " gold back.");
                }
                        
                else if (investmentResult>=26 && investmentResult<=40)
                {
                    playerStorage.currentGold += goblinInvestPrice*2;
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                    alert("A random goblin stops you on your way back into the village and give you " + goblinInvestPrice*2 +" gold. Your investment seems to have paid off!");    
                }
                    
                else if (investmentResult>=41 && investmentResult<=51)
                {
                    playerStorage.currentGold -= playerStorage.currentGold;
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                    alert("As you walk home from the forest late at night, you find a group of goblins waiting near the road. Next thing you know you are being assualted by them! When they finally leave you alone, you find that you are missing all of your gold!");
                }
                        
                else if (investmentResult>=52 && investmentResult<=75)
                {
                        currentGold+=goblinInvestPrice*4;
                        document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                    alert("As you are walking down the village streets, you get pulled into a dark alley by a small goblin. He drops a pouch in from of you and runs away. Inside the pouch there is " + goblinInvestPrice*4 +" It seems the goblins were really thankful for the gold you gave them!");
                }
                else if (investmentResult>=76 && investmentResult<=100)
                {
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                    alert("It's been a while since you threw money at the goblins and there has still not been any sign of you getting a profit. It seems the goblins just couldn't return to you with any profit.");
                }
            document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
            }
        else
        {
            alert("You need more gold to go and throw at the goblins!");
        }
    });
    
    $('#mineInvestBtn').on('click',function(){
        if(playerStorage.currentGold >= mineInvestPrice)
        {
            playerStorage.currentGold -= mineInvestPrice;
            investmentResult = Math.round(Math.random()*100);
            console.log(investmentResult + player.luck);
            
                if (investmentResult<=25)
                {
                    alert("A day after purchasing the stake, you see that the the booth is no longer at the village center. Shortly afterwords you find out that you have been tricked.");
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                }
                        
                else if (investmentResult>=26 && investmentResult<=50)
                {
                    alert("Months after your purchased the stake, you find out from the person you bought the stake from, that the expedition got wipped out by monsters on the mountains. All of the Via-Gra was lost and you in turn will be receiving no profits.");
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
                }
                        
                else if (investmentResult>=51 && investmentResult<=75)
                {
                    playerStorage.currentGold += mineInvestPrice*2;
                    alert("The expedition was a success, yeilding in a nice quantity of Via-Gra. After the Via-Gra was sold, you ended up receiving " + mineInvestPrice*2 +" gold from your purchased stake.");
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
       
                }
                else if (investmentResult>=76 && investmentResult<=100)
                {
                    playerStorage.currentGold += mineInvestPrice*2;
                    alert("The expedition was a huge success! The yeild ended up being larger and of better quality then initally expected. After the Via-Gra was sold, you ended up receiving " + mineInvestPrice*3 +" gold from your purchased stake.");
                    playerStorage.currentGold += dungFarmInvestPrice*3;
                    document.getElementById("currentGold").innerHTML= playerStorage.currentGold;                
                }
        }
        else
        {
            alert("You need more gold to purchase a stake in the mining expedition!");
        }
    });
    
    $('#quadsGetBtn').on('click', function(){
        if(playerStorage.currentGold >= localMarket.quadsBuyPrice)
        {
            playerStorage.currentGold -= localMarket.quadsBuyPrice;
            playerStorage.playerQuads++;
            document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
            document.getElementById("playerQuads").innerHTML= playerStorage.playerQuads;
        }
        else
        {
            alert("You don't have enough gold to buy any quads!");
        }
    });
    
    $('#quadsLoseBtn').on('click', function(){
        if(playerStorage.playerQuads > 0)
        {
            playerStorage.playerQuads--;
            quadsSellPrice = Math.round(Math.random()*1000);
            playerStorage.currentGold += quadsSellPrice;
            
            alert("You sold quads for " + quadsSellPrice + " gold!");
            document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
            document.getElementById("playerQuads").innerHTML= playerStorage.playerQuads;
        }
        else
        {
            alert("You don't have any quads to sell!");
        }    
    });
    
    $('#mornWoodUnlockBtn').on('click',function(){
        if(playerStorage.currentGold >= localMarket.morningWoodActivePrice)
        {
            playerStorage.currentGold -= localMarket.morningWoodActivePrice;
            localMarket.morningWood = true;
            document.getElementById("currentGold").innerHTML= playerStorage.currentGold;
            $('#mornWoodUnlockBtn').addClass("disabled");
            $('#chopMorning').removeClass("disabled");
            $('#sellAllMornWoodBtn').removeClass("disabled");
            alert("You have now gained access to Morning Wood - it's sell price is the current wood price x2.");
        }
        else
        {
            alert("You have insufficient gold!");
        }
    });
    
    $('#pittFightBtn').on('click',function(){
        if(player.currentEnergy >= pitRequiredEnergy && playerStorage.currentGold >= pitEntryFee)
        {
            player.currentEnergy -= pitRequiredEnergy;
            playerStorage.currentGold -= pitEntryFee;
            alert("You have been granted access to the pitts!");
            
            var arena = Math.floor(Math.random() * arenas.length);
            var selectedArena = arenas[arena];
            
            var playerOpp = Math.floor(Math.random() * opponents.length);
            var selectedOpp = opponents[playerOpp];
            
            var oppWeap = Math.floor(Math.random() * weapons.length);
            var selectedOppWeap = weapons[oppWeap];
            
            var oppWeapStr = Math.round(Math.random()*100)

            var playerWeap = Math.floor(Math.random() * weapons.length);
            var selectedPlayWeap = weapons[playerWeap];            
            var playerWeapStr = Math.round(Math.random()*100 + player.strength);
            
            var winnings = [200,500,900,1000,50,70,600,700,100,60,50,25];
            var matchWin = Math.floor(Math.random() * winnings.length);
            var matchPrize = winnings[matchWin];
            
            var dmgTaken= oppWeapStr;
            
            console.log(selectedArena);
            console.log(selectedOpp);
            console.log(selectedOppWeap);
            console.log(oppWeapStr);
            console.log(selectedPlayWeap);
            console.log(playerWeapStr);
            
            if(oppWeapStr > playerWeapStr)
            {
                alert("The die has been cast!");
                alert("The results of the draw have pitted you in battle against " + selectedOpp+" within " +selectedArena+ "!");
                alert("You approach your fierce opponent and you both put your fortunes to the test hoping you draw the right weapon from the pots. " + selectedOpp + " draws " + selectedOppWeap + " with a strength of " + oppWeapStr + ". You draw " + selectedPlayWeap + " with a strength of " + playerWeapStr + ".");
                alert("Though you fight bravely, your opponent is just that much better then you. You lose the battle in the arena!");
                
                if(dmgTaken >= player.curHealth)
                {
                    alert("You have been slain in battle! So ends your legend!");
                    window.location.reload(false);
                }
                else
                {
                    player.curHealth-=dmgTaken;
                    arenaLoses++;
                    alert("You lose " + dmgTaken +" Health points!");
                    document.getElementById("healthSupply").innerHTML = player.curHealth+ "/" + player.maxHealth;
                    document.getElementById("wLRecord").innerHTML = arenaWins +"/" +arenaLoses; 
                }
            }
            else if (oppWeapStr < playerWeapStr)
            {
                alert("The die has been cast!");
                alert("The results of the draw have pitted you in battle against " + selectedOpp+" within " +selectedArena+ "!");
                alert("You approach your fierce opponent and you both put your fortunes to the test hoping you draw the right weapon from the pots. "  + selectedOpp+ " draws " + selectedOppWeap + " with a strenth of " + oppWeapStr  + ". You draw " + selectedPlayWeap + " with a strength of " + playerWeapStr + "."); 
                alert("You rush forward wielding your " + selectedPlayWeap+ " like a true warrior. You exchange blows with your opponent, but in a single split second manage to break through his guard. Within that split second the battle was over. Your opponent falls to the ground and you are declared the victor!");
                
                arenaWins++;
                bodyCount++;
                gloryPoints += Math.round(Math.random()*10);
                playerStorage.currentGold += matchPrize;
                alert("You have won " +matchPrize+" gold from the match!");
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
                document.getElementById("gloryPoints").innerHTML = gloryPoints;
                document.getElementById("wLRecord").innerHTML = arenaWins +"/" +arenaLoses;
                document.getElementById("bodyCount").innerHTML = bodyCount;
            }
            else
            {
                alert("The die has been cast!");
                alert("The results of the draw have pitted you in battle against " + selectedOpp+" within " +selectedArena+ ".");
                alert("You approach your fierce opponent and you both put your fortunes to the test hoping you draw the right weapon from the pots. " + selectedOpp + " draws " + selectedOppWeap + " with a strength of " + oppWeapStr + ". You draw " + selectedPlayWeap + " with a strength of " + playerWeapStr + "."); 
                alert("Though you both exchanged fierce blows with one another, none of you gave up any ground. After several minutes of intense fighting the time limit runs out - You are declared equals and the match ends in a draw!");
                
                playerStorage.currentGold += pitEntryFee;
                document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            }
            document.getElementById("energySupply").innerHTML= player.currentEnergy + "/" + player.maxEnergy;
            document.getElementById("healthSupply").innerHTML= player.curHealth + "/" + player.maxHealth;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
        }
        else
        {
            alert("You do not meet the requirements to enter the pitts! Try again later!");
        }
    });
    
    $('#robHouseBtn').on('click',function(){
        if(player.currentEnergy >=25 && playerNotoriety < 100)
        {
            player.currentEnergy-=25;
            var notorietyGain = 20;
            var roll = Math.round(Math.random()*10);
            var roll2 = Math.round((Math.random()*10) + playerLuck);
            
            var earnedRich = Math.round(Math.random()*1000);
            var earnedEst = Math.round(Math.random()*700);
            var earnedMid = Math.round(Math.random()*500);
            var earnedPoor = Math.round(Math.random()*250);
            
            if(roll>8)
            {
                alert("You have targeted the home of a rich family.");
                if(roll2>5)
                {
                    currentGold+=earnedRich;
                    alert("You have successfully robbed the house for a total of " + earnedRich +" gold.");
                }
                else
                {
                    playerNotoriety += notorietyGain;
                    alert("You were caught as you attempted to rob the home! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }
            }
            else if(roll >= 6 && roll <= 8)
            {
                alert("You have targeted the an establishment in town!");
                if(roll2 > 5)
                {
                     playerStorage.currentGold += earnedEst;
                    alert("You have successfully robbed the establishment for a total of " +earnedEst+" gold.");
                }
                else
                {
                    playerNotoriety += notorietyGain;
                    alert("You were caught as you attempted to rob the establishment! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }
            }
            else if(roll >= 3 && roll <= 5)
            {
                alert("You have targeted the home of a middle class family.");
                if(roll2 > 5)
                {
                    playerStorage.currentGold += earnedMid;
                    alert("You have successfully robbed the house for a total of " +earnedMid+" gold.");
                }
                else
                {
                    playerNotoriety+=notorietyGain;
                    alert("You were caught as you attempted to rob the home! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }    
            }
            else if(roll <= 2)
            {
                alert("You have targeted the home of a poor family.");
                if(roll2 > 5)
                {
                    currentGold+=earnedPoor;
                    alert("You have successfully robbed the house for a total of " +earnedPoor+" gold.");
                }
                else
                {
                    playerNotoriety+=notorietyGain;
                    alert("You were caught as you attempted to rob the home! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }
            }
            document.getElementById("energySupply").innerHTML= player.currentEnergy + "/" + player.maxEnergy;
            document.getElementById("currentGold").innerHTML = playerStorage.currentGold;
            document.getElementById("notoriety").innerHTML = playerNotoriety;
        }
        else
        {
            alert("You do not meet the requirements to rob houses!");
        }
    });  
    
//    $('#hireWorker').on('click', function(){
//        if(currentGold>=50)
//        {
//            hiredWorkers++;
//            currentGold-=50;
//            document.getElementById("currentGold").innerHTML = currentGold;
//            console.log(hiredWorkers);
//        }
//        else
//        {
//            alert("You don't have enough gold to hire a worker!");
//        }
//    });
//    
//    $('#startWorking').on('click', function(){
//        
//        if(hiredWorkers>0 && working == false)
//        {
//                setInterval(function(){
//                var workerHaul= 3 + hiredWorkers;
//                currentWood+=workerHaul;
//                workerChops++;
//        document.getElementById("currentGold").innerHTML = currentGold;
//        document.getElementById("stockpiledWood").innerHTML = currentWood;
//                working = true; 
//                console.log("Worker haul = "+ workerHaul + "Hired workers = " + hiredWorkers + "Worker chops = " + workerChops);    
//                
//                if(workerChops=5)
//                {
//                    workerCost = hiredWorkers * 15;
//                    currentGold-=workerCosts;
//                    workerChops=0;
//                }      
//            },3000);
//        }
//        else if(hiredWorkers>0 && working == true)
//        {
//            console.log("we are in the if else of the working");
//            working = false;
//            window.clearInterval();
//        }
//        else
//        {
//            alert("You don't have enough workers!");
//        }
//        document.getElementById("currentGold").innerHTML = currentGold;
//        document.getElementById("stockpiledWood").innerHTML = currentWood;
//    });
//    
};

$(document).ready(main)