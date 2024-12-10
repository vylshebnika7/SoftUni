function loading(num){


    let numPercantage = num / 10;
    let sign = `%`;
    let dots = `.`;
    
    
    
    
    
    if(num === 100){
        console.log(`${num}% Complete!`);
        console.log(`[${sign.repeat(numPercantage)}]`);
        
    }else{
    
    
    
    console.log(`${num}% [${sign.repeat(numPercantage)}${dots.repeat(10 - numPercantage)}]`);
    console.log(`Still loading...`);
    
    }
    
    
    
    }
    loading(3);