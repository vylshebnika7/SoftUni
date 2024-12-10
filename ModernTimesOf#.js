function solve(text){
    let words = [];
    let species = text.split(` `);
    
    for (const word of species) {
        let pattern = /^[A-Za-z]+$/;
        if(word.startsWith('#') && word.length > 1){
           let tag = word.slice(1);
         if(pattern.test(tag)){
            console.log(tag);
            
         }
        }
    }
    
    
    //for (const element of words) {
        //let subEle = element.substring(1,element.length);
           //console.log(subEle);
           
    //}
    
    
    
    
    
    }
    solve(`Nowadays everyone uses # to tag a #special word in #socialMedia`)