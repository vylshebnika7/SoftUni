function train(arr){
let nums = arr[0]
     .split(` `)
    .map(x => Number(x));
let maxCapacity = +arr[1];

for(let i = 2; i < arr.length; i++){
let cmdInfo = arr[i]
.split(` `);
let passangerCount = 0;
if(cmdInfo[0] === `Add`){
  passangerCount = +cmdInfo[1];
  nums.push(passangerCount)


}
else {
    passangerCount = +cmdInfo[0];
       for(let b = 0; b < nums.length ; b++){
        let wagonPassangers = nums[b];
        if(wagonPassangers + passangerCount <= maxCapacity){
            nums[b] += passangerCount;
            break;
        }

       }
}










}


console.log(nums.join(` `));




}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])