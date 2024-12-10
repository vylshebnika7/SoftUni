function blackFlag(arr){
let daysPlunder = Number(arr[0]);
let dailyPlunder = Number(arr[1]);
let expectedPlunder = Number(arr[2]);
let totalPlunder = 0;



for(let i = 1; i <= daysPlunder; i++){

totalPlunder += dailyPlunder



if(i % 3 === 0){
totalPlunder += dailyPlunder * 0.5;

}

if(i % 5 === 0){
  totalPlunder *= 0.7;
}


}



if(totalPlunder >= expectedPlunder){
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    
}else {
    let percentage = (totalPlunder / targetPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}








}
blackFlag([`5`,`40`,`100`])