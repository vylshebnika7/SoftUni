function magicSum(roomsStr){
let health = 100;
let coins = 0;
let rooms = roomsStr.split(`|`)
let bestRoom = 1;
let totalCoins = 0;

for(let i = 0; i < rooms.length; i++){
let currentRoom = rooms[i];
let tokens = currentRoom.split(` `)

let commands = tokens[0];
let value = Number(tokens[1])

if(commands[0] === `potion`){
    health += value;
    console.log(`You healed for ${value} hp.`);
    health = 100;
    console.log(`Current health: ${health} hp.`);
    
    
}
if(commands === `potion`){
    if(health + value > 100){
        value = 100 - health
    }
    health += value
    console.log(`You healed for ${value} hp.`);
    console.log(`Current health: ${health} hp.`);
    
}
if(commands === `chest`){
    totalCoins += value;
      console.log(`You found ${value} coins.`);
      value = 0;
      
}
if(commands !== `chest` && commands !== `potion`){
    health -= value
    if(health > 0){
        console.log(`You slayed ${commands}.`);
        
    }else{
        console.log(`You died! Killed by ${commands}.`);
        console.log(`Best room: ${bestRoom}`);
        return;
    }

    
    
    
}

bestRoom++








}




console.log("You've made it!");
console.log(`Coins: ${totalCoins}`);
console.log(`Health: ${health}`);










}
magicSum("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
//"cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"
//"rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"