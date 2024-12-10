function hospital(input){
let index = 0;
let periodTime = Number(input[index]);
index++;
let treatedPatiens = 0;
let untreatedPatiens = 0;
let doctors = 7;


for(let i = 0; i < periodTime; i++){
let pationsEachDay = Number(input[index]);
index++;

if(periodTime % 3 === 0){
    doctors++;
}

if (pationsEachDay > doctors) {
    treatedPatiens += doctors;  
    untreatedPatiens += (patients - doctors);
} else {
    treatedPatiens += doctors;  
   
}









}













}
hospital([`4`,
    `7`,
    `27`,
    `9`,
    `1`,
    ]);