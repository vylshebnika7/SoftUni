function solve(num){
    let sum = 0;
    let numS = num + ``;
    
    for(let i = 0; i < numS.length; i++){
    
        let number = Number(numS[i])
    
    
        sum += number;
    }
    
    
    
    
    console.log(sum);
}
solve(245678);   