//command_help.ts
import type { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log("");
    for (const commandName in state.commands) {
        const command = state.commands[commandName];
        console.log(`${commandName}: ${command.description}`);
    }
}