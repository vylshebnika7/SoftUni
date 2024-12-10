function disneyLand(costMoney,months){
let savedMoney = 0;


for(let i = 1; i <= months; i++){


if(i % 2 !== 0 && i !== 1){
    savedMoney *= 0.84;
}

if(i % 4 === 0){
    savedMoney += savedMoney * 0.25;
}

savedMoney += costMoney * 0.25;

}


if(savedMoney >= costMoney){
    console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - costMoney).toFixed(2)}lv. for souvenirs.`);
    
}
else{
    console.log(`Sorry. You need ${(costMoney - savedMoney).toFixed(2)}lv. more.`);
    
}










}
disneyLand(1000,4)
disneyLand(3265,3)