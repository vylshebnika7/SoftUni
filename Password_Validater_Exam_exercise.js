function solve(commands) {
    let password = commands.shift();  

    for (const command of commands) {
        let splitedCommands = command.split(' ');

       
        if (splitedCommands[0] === `Make` && splitedCommands[1] === `Upper`) {
            index = Number(splitedCommands[2]);
            password = password.replace(password[index], password[index].toUpperCase());
            console.log(password);
            continue;
        }

        if (splitedCommands[0] === `Make` && splitedCommands[1] === `Lower`) {
            index = Number(splitedCommands[2]);
            password = password.replace(password[index], password[index].toLowerCase());
            console.log(password);
            continue;
        }

        
if (splitedCommands[0] === "Insert") {
           
    let index = Number(splitedCommands[1]);
            
    let char = splitedCommands[2];

            
            
    if (index < 0 || index > password.length) {
                continue;  
            }

            
            password = password.slice(0, index) + char + password.slice(index);
            console.log(password);
            continue;
        }

      
        if (splitedCommands[0] === "Replace") {
            
            let char = splitedCommands[1];
            let value = Number(splitedCommands[2]);

            
            if (password.includes(char)) {
                let newChar = String.fromCharCode(char.charCodeAt(0) + value);
                password = password.replaceAll(char, newChar); 
                console.log(password);
            }
            continue;
        }

        
     if (splitedCommands[0] === "Validation") {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            if (!/^[a-zA-Z0-9_]+$/.test(password)) {
                console.log("Password must consist only of letters, digits and _!");
            }
            if (!/[A-Z]/.test(password)) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!/[a-z]/.test(password)) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!/[0-9]/.test(password)) {
                console.log("Password must consist at least one digit!");
            }
        }

        
        if (splitedCommands[0] === "Complete") {
            break;
        }
    }
}

solve([
    `invalidpassword*`,
`Add 2 p`,
`Replace i -50`,
`Replace * 10`,
`Make Upper 2`,
`Validation`,
`Complete`]);

solve([
    `123456789`,
    `Insert 3 R`,
    `Replace 5 15`,
    `Validation`,
    `Make Lower 3`,
    `Complete`
]);
