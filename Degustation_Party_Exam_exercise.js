function solve(arr) {
    let people = {};  
    let mealsDontLike = 0;  

    for (let command of arr) {
        if (command === 'Stop') {
            break;  
        }

        let [action, guest, meal] = command.split('-');

        if (action === 'Like') {
            
            if (people[guest] === undefined) {
                  people[guest] = [];
            }
            
           
       if (people[guest].indexOf(meal) === -1) {
                 people[guest].push(meal);
            }
        }

        if (action === 'Dislike') {
            
            if (people[guest] === undefined) {
                console.log(`${guest} is not at the party.`);
            } else {
                
                if (people[guest].indexOf(meal) === -1) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                } else {
                  
                    people[guest] = people[guest].filter(p => p !== meal);
                    console.log(`${guest} doesn't like the ${meal}.`);
                    mealsDontLike++;
                }
            }
        }
    }

  
    for (let guest in people) {
        let meals = people[guest].join(', ');
        console.log(`${guest}: ${meals}`);
    }

    
    console.log(`Unliked meals: ${mealsDontLike}`);
}


solve([
    'Like-Krisi-shrimps',
    'Dislike-Vili-carp',
    'Dislike-Krisi-salad',
    'Stop'
]);
