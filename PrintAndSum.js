function ages(low,high){
    let sum = ``;
    let total = 0;
    
    for(let currentNum = low; currentNum <= high; currentNum++){
    
    
    total += currentNum;
    
    sum += currentNum + ` `;
    
    
    
    
    
    
    }
    console.log(sum);
    
    console.log(`Sum: ${total}`);
}
ages(5, 10);