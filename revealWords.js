function solve(wordsToFill,sentence){
    let theW = wordsToFill.split(`, `);
    
    for (const word of theW) {
       let starCount = word.length;
       let starWord = "*".repeat(starCount);
       sentence = sentence.replace(starWord,word);
    
    }
    
    console.log(sentence);
    
    
    
    }


    solve('great',
'softuni is ***** place for learning new programming languages')