function gladiatorInventory(array){
let inventory = array[0]
.split(` `);

for (let i = 1; i < array.length; i++) {
   let cmdInfo = array[i]
   .split(` `);    
let cmdType = cmdInfo[0].toLowerCase();




if(cmdType === `buy`){
 let itemName = cmdInfo[1];
    if(!inventory.includes(itemName)){
        inventory.push(itemName)
  }


}
else if(cmdType === `trash`){
    let itemName = cmdInfo[1];
    let itemIndex = inventory.indexOf(itemName)
    if(itemIndex !== -1){
        inventory.splice(itemIndex, 1)
    }
}
else if(cmdType === `repair`){
    let itemName = cmdInfo[1];
    let itemIndex = inventory.indexOf(itemName)
    if(itemIndex !== -1){
        inventory.splice(itemIndex, 1)
        inventory.push(itemName)
    }
}
else if(cmdType === `upgrade`){
    let itemUpgradeName = cmdInfo[1]
    .split(`-`);
    let itemName = itemUpgradeName[0];
    let itemMaterial = itemUpgradeName[1];
    let itemIndex = inventory.indexOf(itemName);
    if(itemIndex !== -1){
        inventory.splice(itemIndex + 1, 0, `${itemName}:${itemMaterial}`)
    }
}






}

console.log(inventory.join(` `));



























}
gladiatorInventory([`SWORD Shield Spear`,
`Buy Bag`,
`Trash Shield`,
`Repair Spear`,
`Upgrade SWORD-Steel`])