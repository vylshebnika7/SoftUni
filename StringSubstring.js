function solve(wordd,sentence){

    sentence = sentence.toLowerCase().split(` `);
    
    if(sentence.includes(`${wordd}`)){
        console.log(wordd);
        
    }else{
        console.log(`${wordd} not found!`);
        
    }
    
    
    
    
    
    
    }
    solve(`javascript`,
        `JavaScript is the best programming language`)