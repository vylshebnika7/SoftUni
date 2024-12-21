function solve(arr){
let sentence = arr.shift().split(` `);
let tracker1 = 0;
let tracker2 = 0;
let[word1,word2] = sentence;




for(let i = 0; i < arr.length; i++){
    let counter = arr[i];
    

    if(word1 === counter){
        tracker1++;
    }

    if(word2 === counter){
        tracker2++;
    }
    
}



if(tracker1 > tracker2){
    console.log(`${word1} - ${tracker1}`);
    console.log(`${word2} - ${tracker2}`);
    
}else{
    console.log(`${word2} - ${tracker2}`);
    console.log(`${word1} - ${tracker1}`);
}




}
solve(['this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )