var main = function()
{
    var currentWood=0;
    var choppedThisTurn;
    var chopSpeed=1.00;
    var currentAxeDurability=100;
    var maxAxeDurability=100;
    var currentGold=0;
    var currentEnergy=26;
    var maxEnergy=26;
    var strength=5;
    var woodPrice=1.25;
    var axeRepairPrice=50;
    
    var axeUpgPrice=120;
    var energyUpgPrice=200;
    var strUpgPrice=100;
    var tradeUpgPrice=250;
    var speedUpgPrice=150;
    var hpUpgPrice=200;
    
    var curHealth=100;
    var maxHealth=100;
    var townStatus="Newcomer";
    var arenaStatus="Unknown";
    var wantedLevel="Not Wanted";
    var dungFarmInvestPrice=100;
    var tavernInvestPrice=200;
    var goblinInvestPrice=300;
    var investmentResult;
    var quadsBuyPrice=400;
    var quadsSellPrice;
    var playerQuads=0;
    var medFloraCost=250;
    
    var playerNotoriety=0;
    var playerLuck=1;
    var gloryPoints=0;
    var arenaWins=0;
    var arenaLoses=0;
    var bodyCount=0;
    var pitRequiredEnergy=25;
    var pitEntryFee=150;
    
    var mineInvestPrice=400;
    var morningWood = false;
    var morningWoodActivePrice = 500;
    var morningWoodStock =0;
    
    var hiredWorkers = 0;
    var workerChops;
    var workerCosts;
    var working = false;
    
    var opponents = ['Bumbo the Troll','Liko Liko','Pigeon-Man','Johnny The Panty Theif','Yolo The Swag','Dingo The Magic','King Slime','Senko The Pig', 'Fiece The Mad', 'Dinky the Blouse', 'Olivrikos', 'Juts Braun', 'Fry, the God', 'Blago The Hobo'];
    var arenas = ['The Lost Caverns','Summoners Drift', 'Ruins of Zemoria', 'Baldovian Heights', 'The Cursed Forest', 'Arena of The Damned','Rainbow Road', 'The Tavern Basement', 'Under The Bridge'];
    var weapons = ['Frost Dagger', 'Magic Powder', 'Dung Ball', 'Excalibur!!!', 'Bucket of Milk', 'Chicken Eggs', 'Piece of Lumber', 'Saw', 'Rusted Sword', 'Wicked Mace', 'Bow of Madness', 'A Stone', 'Ballzack', 'Fire Bomb', 'Vial of Filth', 'Tainted Blood', 'Summons a werewolf'];
    var housing = ['Shack', 'Small Hut', 'Large Hut', 'Shabby House', 'Decent House', 'Nice House', 'Large House', 'Mansion'];
    
//    var curGoldText = document.getElementById("currentGold").innerHTML = "Gold: " + currentGold;
//    var curEnergyText = document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
//    var curAxeDurText = document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxDurability;
//    var curChopSpeedText = document.getElementById("currentSpeed").innerHTML = chopSpeed;
//    var curStrText = document.getElementById("currentStrength").innerHTML = strength;

    document.getElementById("currentGold").innerHTML = currentGold;
    document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
    document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxAxeDurability;
    document.getElementById("currentSpeed").innerHTML = chopSpeed;
    document.getElementById("currentStrength").innerHTML = strength;
    document.getElementById("marketWoodPrice").innerHTML = woodPrice;
    document.getElementById("playerLuck").innerHTML = playerLuck;
    document.getElementById("healthSupply").innerHTML = curHealth+ "/" + maxHealth;
    document.getElementById("currentTownStatus").innerHTML = townStatus;
    document.getElementById("playerQuads").innerHTML = playerQuads;
    document.getElementById("mornWoodUnlockPrice").innerHTML = "Price: " + morningWoodActivePrice;
    
    document.getElementById("speedUpgradePrice").innerHTML ="Price: " + speedUpgPrice;
    document.getElementById("tradeUpgradePrice").innerHTML ="Price: " + tradeUpgPrice;
    document.getElementById("strUpgradePrice").innerHTML ="Price: " + strUpgPrice;
    document.getElementById("axeUpgradePrice").innerHTML ="Price: " + axeUpgPrice;
    document.getElementById("energyUpgradePrice").innerHTML ="Price: " + energyUpgPrice;
    document.getElementById("hpUpgradePrice").innerHTML ="Price: " + hpUpgPrice;
    
    
    document.getElementById("dungInvestPrice").innerHTML = "Price: " + dungFarmInvestPrice;
    document.getElementById("quadsPrice").innerHTML = "Price: " + quadsBuyPrice;
    document.getElementById("pittsReq").innerHTML = "Requirements: " + pitEntryFee+ " Gold, " + pitRequiredEnergy + " Energy";
    document.getElementById("wLRecord").innerHTML = arenaWins +"/" +arenaLoses;
    document.getElementById("arenaStatus").innerHTML = arenaStatus;
    document.getElementById("wantedLevel").innerHTML = wantedLevel;
    document.getElementById("gloryPoints").innerHTML = gloryPoints;
    document.getElementById("notoriety").innerHTML = playerNotoriety;
    document.getElementById("bodyCount").innerHTML = bodyCount;
    
   $('#chop').on('click',function(){
       
            if(currentEnergy>0 && currentAxeDurability>0)
            {
                choppedThisTurn= Math.floor(Math.random() * strength + chopSpeed);
                currentAxeDurability--;
                currentEnergy--;
                currentWood+=choppedThisTurn;
            }
            
            else if(currentEnergy==0 || currentEnergy<0)
            {
                alert("You don't have enough energy to chop!");
            }
       
            else if(currentAxeDurability==0 || currentAxeDurability<0)
            {
                alert("Your axe is broken!");
            }
                
            document.getElementById("stockpiledWood").innerHTML = currentWood;
            document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxAxeDurability;
            document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
   });
    
   $('#chopMorning').on('click',function(){
       
            if(currentEnergy>=2 && currentAxeDurability>=5 && morningWood == true)
            {
                choppedThisTurn= Math.floor(Math.random() * strength + chopSpeed);
                currentAxeDurability-=5;
                currentEnergy-=2;
                morningWoodStock+=choppedThisTurn;
            }
            else if(currentEnergy==0 || currentEnergy<0)
            {
                alert("You don't have enough energy to chop!");
            }
            else if(currentAxeDurability==0 || currentAxeDurability<0)
            {
                alert("Your axe is broken!");
            }
            else if(morningWood == false)
            {
                alert("Morning Wood has still not been activated yet");
            }
                
            document.getElementById("stockMorningWood").innerHTML = morningWoodStock;
            document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxAxeDurability;
            document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
   });    
    
    $('#sellWoodBtn').on('click', function(){
        if(currentWood>0)
        {
            currentWood--;
            currentGold+=woodPrice;
            
            document.getElementById("stockpiledWood").innerHTML = currentWood;
            document.getElementById("currentGold").innerHTML = currentGold;
        } 
    });
    
    $('#sell5WoodBtn').on('click', function(){
        if(currentWood>5)
        {
            currentWood-=5;
            currentGold+=woodPrice*5;
            
            document.getElementById("stockpiledWood").innerHTML = currentWood;
            document.getElementById("currentGold").innerHTML = currentGold;
        }
    });
    
    $('#sellAllWoodBtn').on('click', function(){
        if(currentWood>0)
        {    
            currentGold+=woodPrice * currentWood;
            currentWood=0;
            
            document.getElementById("stockpiledWood").innerHTML = currentWood;
            document.getElementById("currentGold").innerHTML =currentGold;
        }    
    });
    
    $('#sellAllMornWoodBtn').on('click', function(){
        if(morningWoodStock>0 && morningWood==true)
        {    
            currentGold+=(woodPrice * 2) * morningWoodStock;
            morningWoodStock=0;
            
            document.getElementById("stockMorningWood").innerHTML = currentWood;
            document.getElementById("currentGold").innerHTML =currentGold;
        }
    });
    
    $('#buySCokeBtn').on('click', function(){
        if(currentGold>5 && currentEnergy<maxEnergy)
        {
            currentEnergy+=2;
            currentGold-=5;
            
            document.getElementById("energySupply").innerHTML = currentEnergy + "/" + maxEnergy;
            document.getElementById("currentGold").innerHTML = currentGold;
        }
        else
        {
            alert("You can't handle more energy!");
        }    
        
    });
    
        $('#buyLCokeBtn').on('click', function(){
        if(currentGold>50 && currentEnergy<maxEnergy)
        {
            currentEnergy=maxEnergy;
            currentGold-=50;
            
            document.getElementById("energySupply").innerHTML = currentEnergy + "/" + maxEnergy;
            document.getElementById("currentGold").innerHTML = currentGold;
        }
        else
        {
            alert("You can't handle more energy!");
        }    
        
    });
    
    $('#buyMedBtn').on('click', function(){
        if(curHealth<maxHealth && currentGold>=medFloraCost)
        {
            currentGold-=medFloraCost;
            curHealth+=20;
            
            document.getElementById("healthSupply").innerHTML = curHealth+ "/" + maxHealth;
            document.getElementById("currentGold").innerHTML = currentGold;
        }
        else
        {
            if(currentGold<medFloraCost)
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
        if(currentGold>=axeRepairPrice)
        {
            currentAxeDurability = maxAxeDurability;
            currentGold-=axeRepairPrice;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxAxeDurability;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#axeUpBtn').on('click', function(){
        if(currentGold>=axeUpgPrice)
        {
            currentGold-=axeUpgPrice;
            maxAxeDurability+= 25;
            axeUpgPrice+= 100;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("axeSupply").innerHTML = currentAxeDurability + "/" + maxAxeDurability;
            document.getElementById("axeUpgradePrice").innerHTML = "Price: " + axeUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#energyUpBtn').on('click', function(){
        if(currentGold>=energyUpgPrice)
        {
            currentGold-=energyUpgPrice;
            maxEnergy+=25;
            energyUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("energySupply").innerHTML =currentEnergy + "/" + maxEnergy;
            document.getElementById("energyUpgradePrice").innerHTML ="Price: " + energyUpgPrice;
        }
        else
        {
           alert("You have insufficient gold!");
        }
        });
    
    $('#strUpBtn').on('click', function(){
        if(currentGold>=strUpgPrice)
        {
            currentGold-=strUpgPrice;
            strength+=1;
            strUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("currentStrength").innerHTML = strength;
            document.getElementById("strUpgradePrice").innerHTML = "Price: " + strUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
        
    $('#tradeUpBtn').on('click', function(){
        if(currentGold>=tradeUpgPrice)
        {
            currentGold-=tradeUpgPrice;
            woodPrice+=0.25;
            tradeUpgPrice+=200;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("marketWoodPrice").innerHTML = woodPrice;
            document.getElementById("tradeUpgradePrice").innerHTML = "Price: " + tradeUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#speedUpBtn').on('click', function(){
        if(currentGold>=speedUpgPrice)
        {
            currentGold-=speedUpgPrice;
            chopSpeed+=0.10;
            speedUpgPrice+=150;
            
            document.getElementById("currentGold").innerHTML =currentGold;
            document.getElementById("currentSpeed").innerHTML = chopSpeed;
            document.getElementById("speedUpgradePrice").innerHTML ="Price: " + speedUpgPrice;
        }
        else
        {
            alert("You have insufficient gold!");
        }
        });
    
    $('#dungInvestBtn').on('click', function(){
        if(currentGold >= dungFarmInvestPrice)
        {
            currentGold-=dungFarmInvestPrice;
            investmentResult= Math.round(Math.random());
                
            if(investmentResult==1)
            {
                currentGold+=dungFarmInvestPrice * 2;
                document.getElementById("currentGold").innerHTML =currentGold;
                alert("Your investment paid off! You earned: " + dungFarmInvestPrice *2 + " gold!");
            }
            else
            {
                document.getElementById("currentGold").innerHTML =currentGold;
                alert("Your investment didn't pay off.")
            }
        }
        else
        {
            alert("You need more gold to make an investment!");
        }
    });
    
    $('#tavernInvestBtn').on('click',function(){
        if(currentGold>= tavernInvestPrice)
        {
            currentGold-=tavernInvestPrice;
            investmentResult = Math.round(Math.random());
            
            if(investmentResult>0)
            {
                currentGold+=tavernInvestPrice*2;
                document.getElementById("currentGold").innerHTML =currentGold;
                alert("Your investment in the tavern paid off! The tavern owner pays you " + tavernInvestPrice*2 +" Gold for your help!" );
            }
            else
            {
                document.getElementById("currentGold").innerHTML =currentGold;
                alert("The tavern owner gambled your money away! You will receive nothing for your help!");
            }
        }
        else
        {
            alert("You need more gold to help out the tavern owner!");
        }
    });
    
        $('#goblinInvestBtn').on('click',function(){
        if(currentGold>= goblinInvestPrice)
        {
            currentGold-=goblinInvestPrice;
            investmentResult = Math.round(Math.random()*100);
            console.log(investmentResult);
            
                if (investmentResult<=25)
                {
                    currentGold+=goblinInvestPrice;
                    document.getElementById("currentGold").innerHTML= currentGold;
                    alert("The Goblins storm into your house and throw your money back at you specifically aiming for your face! You get your " +goblinInvestPrice+" gold back.");
                }
                        
                else if (investmentResult>=26 && investmentResult<=40)
                {
                    currentGold+=goblinInvestPrice*2;
                    document.getElementById("currentGold").innerHTML= currentGold;
                    alert("A random goblin stops you on your way back into the village and give you " +goblinInvestPrice*2 +" gold. Your investment seems to have paid off!");    
                }
                    
                else if (investmentResult>=41 && investmentResult<=51)
                {
                    currentGold-=currentGold;
                    document.getElementById("currentGold").innerHTML= currentGold;
                    alert("As you walk home from the forest late at night, you find a group of goblins waiting near the road. Next thing you know you are being assualted by them! When they finally leave you alone, you find that you are missing all of your gold!");
                }
                        
                else if (investmentResult>=52 && investmentResult<=75)
                {
                        currentGold+=goblinInvestPrice*4;
                        document.getElementById("currentGold").innerHTML= currentGold;
                    alert("As you are walking down the village streets, you get pulled into a dark alley by a small goblin. He drops a pouch in from of you and runs away. Inside the pouch there is " + goblinInvestPrice*4 +" It seems the goblins were really thankful for the gold you gave them!");
                }
                else if (investmentResult>=76 && investmentResult<=100)
                {
                    document.getElementById("currentGold").innerHTML= currentGold;
                    alert("It's been a while since you threw money at the goblins and there has still not been any sign of you getting a profit. It seems the goblins just couldn't return to you with any profit.");
                }
            document.getElementById("currentGold").innerHTML= currentGold;
            }
        else
        {
            alert("You need more gold to go and throw at the goblins!");
        }
    });
    
            $('#mineInvestBtn').on('click',function(){
        if(currentGold>= mineInvestPrice)
        {
            currentGold-=mineInvestPrice;
            investmentResult = Math.round(Math.random()*100);
            console.log(investmentResult + playerLuck);
            
                if (investmentResult<=25)
                {
                    alert("A day after purchasing the stake, you see that the the booth is no longer at the village center. Shortly afterwords you find out that you have been tricked.");
                    document.getElementById("currentGold").innerHTML= currentGold;
                }
                        
                else if (investmentResult>=26 && investmentResult<=50)
                {
                    alert("Months after your purchased the stake, you find out from the person you bought the stake from, that the expedition got wipped out by monsters on the mountains. All of the Via-Gra was lost and you in turn will be receiving no profits.");
                    document.getElementById("currentGold").innerHTML= currentGold;
                }
                        
                else if (investmentResult>=51 && investmentResult<=75)
                {
                    currentGold+=mineInvestPrice*2;
                    alert("The expedition was a success, yeilding in a nice quantity of Via-Gra. After the Via-Gra was sold, you ended up receiving " + mineInvestPrice*2 +" gold from your purchased stake.");
                    document.getElementById("currentGold").innerHTML= currentGold;
       
                }
                else if (investmentResult>=76 && investmentResult<=100)
                {
                    currentGold+=mineInvestPrice*2;
                    alert("The expedition was a huge success! The yeild ended up being larger and of better quality then initally expected. After the Via-Gra was sold, you ended up receiving " + mineInvestPrice*3 +" gold from your purchased stake.");
                    currentGold+=dungFarmInvestPrice*3;
                    document.getElementById("currentGold").innerHTML= currentGold;                
                }
        }
        else
        {
            alert("You need more gold to purchase a stake in the mining expedition!");
        }
    });
    
    $('#quadsGetBtn').on('click', function(){
        if(currentGold>=quadsBuyPrice)
        {
            currentGold-=quadsBuyPrice;
            playerQuads++;
            document.getElementById("currentGold").innerHTML=currentGold;
            document.getElementById("playerQuads").innerHTML= playerQuads;
        }
        else
        {
            alert("You don't have enough gold to buy any quads!");
        }
    });
    
    $('#quadsLoseBtn').on('click', function(){
        if(playerQuads>0)
        {
            playerQuads--;
            quadsSellPrice=Math.round(Math.random()*1000);
            currentGold+=quadsSellPrice;
            
            alert("You sold quads for " + quadsSellPrice + " gold!");
            document.getElementById("currentGold").innerHTML=currentGold;
            document.getElementById("playerQuads").innerHTML= playerQuads;
        }
        else
        {
            alert("You don't have any quads to sell!");
        }    
    });
    
    $('#mornWoodUnlockBtn').on('click',function(){
        if(currentGold>=morningWoodActivePrice)
        {
            currentGold-=morningWoodActivePrice;
            morningWood=true;
            document.getElementById("currentGold").innerHTML=currentGold;
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
        if(currentEnergy>=pitRequiredEnergy && currentGold>=pitEntryFee)
        {
            currentEnergy-=pitRequiredEnergy;
            currentGold-=pitEntryFee;
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
            var playerWeapStr = Math.round(Math.random()*100 + strength);
            
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
            
            if(oppWeapStr>playerWeapStr)
            {
                alert("The die has been cast!");
                alert("The results of the draw have pitted you in battle against " + selectedOpp+" within " +selectedArena+ "!");
                alert("You approach your fierce opponent and you both put your fortunes to the test hoping you draw the right weapon from the pots. " + selectedOpp + " draws " + selectedOppWeap + " with a strength of " + oppWeapStr + ". You draw " + selectedPlayWeap + " with a strength of " + playerWeapStr + ".");
                alert("Though you fight bravely, your opponent is just that much better then you. You lose the battle in the arena!");
                
                if(dmgTaken>=curHealth)
                {
                    alert("You have been slain in battle! So ends your legend!");
                    window.location.reload(false);
                }
                else
                {
                    curHealth-=dmgTaken;
                    arenaLoses++;
                    alert("You lose " +dmgTaken+" Health points!");
                    document.getElementById("healthSupply").innerHTML = curHealth+ "/" + maxHealth;
                    document.getElementById("wLRecord").innerHTML = arenaWins +"/" +arenaLoses; 
                }
            }
            else if (oppWeapStr<playerWeapStr)
            {
                alert("The die has been cast!");
                alert("The results of the draw have pitted you in battle against " + selectedOpp+" within " +selectedArena+ "!");
                alert("You approach your fierce opponent and you both put your fortunes to the test hoping you draw the right weapon from the pots. "  + selectedOpp+ " draws " + selectedOppWeap + " with a strenth of " + oppWeapStr  + ". You draw " + selectedPlayWeap + " with a strength of " + playerWeapStr + "."); 
                alert("You rush forward wielding your " + selectedPlayWeap+ " like a true warrior. You exchange blows with your opponent, but in a single split second manage to break through his guard. Within that split second the battle was over. Your opponent falls to the ground and you are declared the victor!");
                
                arenaWins++;
                bodyCount++;
                gloryPoints+=Math.round(Math.random()*10);
                currentGold+=matchPrize;
                alert("You have won " +matchPrize+" gold from the match!");
                document.getElementById("currentGold").innerHTML = currentGold;
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
                
                currentGold+=pitEntryFee;
                document.getElementById("currentGold").innerHTML = currentGold;
            }
            document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
            document.getElementById("healthSupply").innerHTML=curHealth+"/"+maxHealth;
            document.getElementById("currentGold").innerHTML = currentGold;
        }
        else
        {
            alert("You do not meet the requirements to enter the pitts! Try again later!");
        }
    });
    
    $('#robHouseBtn').on('click',function(){
        if(currentEnergy>=25 && playerNotoriety<100)
        {
            currentEnergy-=25;
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
                    alert("You have successfully robbed the house for a total of " +earnedRich+" gold.");
                }
                else
                {
                    playerNotoriety+=notorietyGain;
                    alert("You were caught as you attempted to rob the home! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }
            }
            else if(roll >= 6 && roll <= 8)
            {
                alert("You have targeted the an establishment in town!");
                if(roll2 > 5)
                {
                     currentGold+=earnedEst;
                    alert("You have successfully robbed the establishment for a total of " +earnedEst+" gold.");
                }
                else
                {
                    playerNotoriety+=notorietyGain;
                    alert("You were caught as you attempted to rob the establishment! They got a quick look at your face, but they could hardly make out who you were in the darkness. You manage to escape but your notoriety has gone up by " + notorietyGain);
                }
            }
            else if(roll >= 3 && roll <= 5)
            {
                alert("You have targeted the home of a middle class family.");
                if(roll2 > 5)
                {
                    currentGold+=earnedMid;
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
            document.getElementById("energySupply").innerHTML= currentEnergy + "/" + maxEnergy;
            document.getElementById("currentGold").innerHTML = currentGold;
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