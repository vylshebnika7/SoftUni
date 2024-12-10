function palindrome(num){
let t = `true`;
let f = `false`




for(let i = 0; i < num.length;i++){
let currentNum = num[i];
currentNum = currentNum + ``;
let reverseNum = currentNum.split(``).reverse().join(``)

if(currentNum === reverseNum){
    console.log(t);
    
}else{
    console.log(f);
    
}




}


















}
palindrome([123,323,421,121])