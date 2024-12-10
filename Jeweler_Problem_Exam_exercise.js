function solve(arr){
let sequences = arr.map(str => str.split(' ').map(Number))
let whiteGold = sequences.shift();
let yellowGold = sequences.shift();
let counter = [];
let combinedLeftOvers = 0;











for(let i = 0; i < whiteGold.length; i++){

     if(whiteGold[i] + yellowGold[i] === 10){
        counter.push(whiteGold[i] + yellowGold[i])
     }
      

   if(whiteGold[i] + yellowGold[i] > 10){
    yellowGold[i] = yellowGold[i] - 2;
    if(whiteGold[i] + yellowGold[i] === 10){
        counter.push(whiteGold[i] + yellowGold[i])
    }
   }

 if(whiteGold[i] + yellowGold[i] < 10){
    combinedLeftOvers +=whiteGold[i] + yellowGold[i];
    
 }




}

combinedLeftOvers = combinedLeftOvers / 10;
combinedLeftOvers = Math.floor(combinedLeftOvers);
combinedLeftOvers = combinedLeftOvers * 10;
counter.push(combinedLeftOvers)




if(counter.length >= 7){
    console.log(`Great success, you created ${counter.length} earrings.`);
    
}else if (counter.length < 7){
    console.log(`Keep trying, you need ${7 - counter.length} more earrings.`);
    
}












}
//solve(['2 7 8 5 1 6 1 7 5', 
    //'8 3 2 7 9 4 9 2 3'])
solve(['5 3 2 2 4',
    '5 5 8 2 6'])