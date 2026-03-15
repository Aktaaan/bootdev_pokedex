import readline from "readline";
import {getCommands} from "./commands.js";

export function cleanInput(userInput: string):string[] {
    return userInput.trim().toLowerCase().split(/\s+/).filter(s => s.length > 0);
}

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    rl.prompt();

    rl.on("line", (line: string) => {
        const words = cleanInput(line);

        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = words[0];
        const commands = getCommands();
        const command = commands[commandName];

        try {
            if (command) {
                command.callback(commands);
            } else {
                console.log("Unknown command");
            }
        } catch (error) {
            console.log(error);
        }

        rl.prompt();
    });
}

