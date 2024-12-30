function organizeDestinations(arr) {

    let squad = [];
    let ore = ``;
    let price = 0;
    let goldPrice = 0;
    let silverPrice = 0;
    let copperPrice = 0;
    
    for(let i = 0; i < arr.length; i++){
    
    
        if(i % 2 === 0){
            ore = arr[i];
            
            if(!squad.includes(ore)){
                squad.push(ore);
            }
        }
        
        if(i % 2 === 1){
             price = Number(arr[i]);
           
            
            if(ore.toLowerCase() === `gold`){
            goldPrice += price;
            }
    
            if(ore.toLowerCase() === `silver`){
                silverPrice += price;
            }
           
            if(ore.toLowerCase() === `copper`){
                copperPrice+= price;
            }
        
        }
            
        
    
    
    
    
    }
    
    
    console.log(`${squad[0]} -> ${goldPrice}`);
    console.log(`${squad[1]} -> ${silverPrice}`);
    console.log(`${squad[2]} -> ${copperPrice}`);
    
    
    
    
    
    
    
    
    }
    organizeDestinations([
            'gold',
            '155',
            'silver',
            '10',
            'copper',
            '17',
            'gold',
            '15'
            ]);