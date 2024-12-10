function DistinctArray(arr){

    let newArr = arr.filter((num,index) => arr.indexOf(num) === index);
    console.log(newArr.join(` `));
    
    
    
    
    }
    DistinctArray([1,
        2,
        3,
        4])