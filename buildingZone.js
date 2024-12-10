function buldAWall(arr){
let cubicYards = 195;
let cubicPrice = 1900;
let total = 0;
let m = [];
let totalCost = 0;


while(true){
let dailyUsage = 0;
let allCompleted = true;

for(let i = 0; i < arr.length; i++){
 
if(arr[i] < 30){
    arr[i] += 1;
dailyUsage += cubicYards;

allCompleted = false;

}



}
if(allCompleted){
    break;

}

m.push(dailyUsage);
total += dailyUsage;
totalCost = total * cubicPrice;




}
console.log(m.join(`, `));
console.log(`${totalCost} pesos`);














}
buldAWall([21, 25, 28])