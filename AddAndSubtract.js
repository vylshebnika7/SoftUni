function AddAndSubtract(arr){
let newArr = [];
let sumArr1 = 0;
let sumArr2 = 0;


for(let i = 0; i < arr.length; i++){
let currentNum = arr[i];
sumArr1 += currentNum;
if(currentNum % 2 === 0){
    currentNum += i;

}else
 {
    currentNum -= i
    

}

sumArr2 += currentNum

newArr.push(currentNum)


}



console.log(newArr);
console.log(sumArr1);
console.log(sumArr2);








}
AddAndSubtract([5,
    15,
    23,
    56,
    35]);