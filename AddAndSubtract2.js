function AddAndSubtract(num1,num2,num3){
    let res = sum(num1,num2)
    let sumres = subtract(res,num3)
    console.log(sumres);
    
    
    function sum(a,b){
    return a + b;
    
    } function subtract(a,b){
    
    return a - b;
    
    } 
    
    
    }
    AddAndSubtract(23,6,10)