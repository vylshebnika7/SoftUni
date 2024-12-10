function MergeArrays(arr,arr2){
    let newArr = [];
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
    let currentNum = arr[i];
    let currentNum2 = arr2[i]
    
    
    if(i % 2 === 0){
        sum = Number(currentNum) + Number(currentNum2)
        newArr.push(sum)
    }else {
        newArr.push(currentNum + currentNum2)
    }
    
    
    
    
    
    
    
    
    }
    
    
    console.log(newArr.join(` - `));
    
    
    
    
    }
    MergeArrays(["5", "15", "23", "56", "35"],
        ["17", "22", "87", "36", "11"])
