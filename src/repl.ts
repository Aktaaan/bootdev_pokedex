// repl.ts
import { type State } from "./state.js";

export function cleanInput(userInput: string): string[] {
    return userInput.trim().toLowerCase().split(/\s+/).filter(s => s.length > 0);
}

export async function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", async (line: string) => {
        const words = cleanInput(line);
        const args = words.slice(1);

        if (words.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = words[0];
        const command = state.commands[commandName];

        try {
            if (command) {
                await command.callback(state, ...args);
            } else {
                console.log("Unknown command");
            }
        } catch (error) {
            console.log((error as Error).message);
        }

        state.readline.prompt();
    });
}
