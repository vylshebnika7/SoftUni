function softuniReception(arr){
    let recp1 = Number(arr[0]);
    let recp2 = Number(arr[1]);
    let recp3 = Number(arr[2]);
    let students = Number(arr[3]);
    
    let studentsFor1Hour = recp1 + recp2 + recp3;
    let hour = 1;
    
    while(students > 0){
          if(hour % 4 !== 0){
        students -= studentsFor1Hour;
          }
         hour++
    }
    
    
    console.log(`Time needed: ${hour - 1}h.`);
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    softuniReception([5,
        6,
        4,
        20])