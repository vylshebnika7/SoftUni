function employ(arr){
let employList = {};
let counter = 0;
let num = {};
let w = `Personal Number:`;

for (const element of arr) {
   //let details = element.split(` `);
   
//console.log(details[0].length + details[1].length + 1);
   
//console.log(`Name: ${details[0]} ${details[1]} -- Personal Number: ${(details[0].length + details[1].length + 1)}`);
counter = element.length
employList[element] = counter;

    
//console.log(employList);
//console.log(`${employList.join(` `)} -- Personal Number: ${counter}`);


}


for (const name in employList) {
   console.log(`Name: ${name} -- Personal Number: ${employList[name]}`);
   
}





}
employ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

employ([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )