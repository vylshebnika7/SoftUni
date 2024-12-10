function solve(arr){
let sentence = arr.shift()
let sentenceSplited = sentence.split(` `)



let word1 = sentenceSplited[0];
let word2 = sentenceSplited[1];
let word1Co = 0;
let word2Co = 0;



for(let i = 0; i < arr.length; i++){
    let checkWord = arr[i];
       
if(word1 === checkWord){
     word1Co++
}


if(word2 === checkWord){
    word2Co++
}



}


//console.log(`${word1} - ${word1Co}`)
//console.log(`${word2} - ${word2Co}`);

if(word1Co > word2Co){
    console.log(`${word1} - ${word1Co}`)
    console.log(`${word2} - ${word2Co}`)
}else{
    console.log(`${word2} - ${word2Co}`)
    console.log(`${word1} - ${word1Co}`)
}



}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'])