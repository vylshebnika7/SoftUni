function solve(arr){

let parking = [];



for (const car of arr) {
    let carNum = car.split(`, `);
    
    if(carNum[0] === `IN`){
        parking.push(carNum[1]);
    }

    if(carNum[0] === `OUT`){
        let index = parking.indexOf(carNum[1]);
        parking.splice(index, 1);
    }
    
    
}

parking.sort();


if(parking.length > 0){


console.log(parking.join("\n"));
}else {
    console.log(`Parking Lot is Empty`);
    
}





}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);