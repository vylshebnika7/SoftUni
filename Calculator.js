function Calculator(num1,oper,num2){
    let Number1 = Number(num1);
    let Number2 = Number(num2);
    let newOper = oper.split(" ")
    
    let result = eval(Number1 + oper + Number2)
    
    console.log(result.toFixed(2));
    
    
    
    
        
        
        
        
        
        }
Calculator(`5`,`+`,`10`);
