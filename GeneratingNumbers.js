function processCommands(initialSequence, commands) {
    
    sequence = initialSequence.split(" ").map(Number); 

  
    for (i = 0; i < commands.length; i++) { 
        command = commands[i]; 
        if (command === "END") break;

        parts = command.split(" "); 

        if (parts[0] === "add" && parts[1] === "to" && parts[2] === "start") {
            
            sequence.unshift(...parts.slice(3).map(Number));
        } 
        else if (parts[0] === "remove" && parts[1] === "greater" && parts[2] === "than") {
           
            value = Number(parts[3]); 
            sequence = sequence.filter(function(num) {
                return num <= value;
            });
        } 
        else if (parts[0] === "replace") {
            
            value = Number(parts[1]); 
            replacement = Number(parts[2]); 
            index = sequence.indexOf(value); 
            if (index !== -1) {
                sequence[index] = replacement;
            }
        } 
        else if (parts[0] === "remove" && parts[1] === "at" && parts[2] === "index") {
           
            index = Number(parts[3]); 
            if (index >= 0 && index < sequence.length) {
                sequence.splice(index, 1);
            }
        } 
        else if (parts[0] === "find") {
            if (parts[1] === "even") {
               
                console.log(sequence.filter(function(num) {
                    return num % 2 === 0;
                }).join(" "));
            } else if (parts[1] === "odd") {
               
                console.log(sequence.filter(function(num) {
                    return num % 2 !== 0;
                }).join(" "));
            }
        }
    }

    
    return sequence.join(", ");
}




initialSequence = "1 2 3 10 10 6 4 10"; 
commands = [
    "add to start 1 2 3",
    "remove greater than 5",
    "find even",
    "END"
]; 

result = processCommands(initialSequence, commands); 
console.log(result); 