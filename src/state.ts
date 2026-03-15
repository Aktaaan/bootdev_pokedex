// state.ts
import { createInterface, type Interface } from "readline";
import {getCommands} from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};


export async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    process.exit(0);
}

export type State = {
    readline: ReturnType<typeof createInterface>;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};


export function initState(): State {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    const pokeapi = new PokeAPI();
    const commands = getCommands();

    return {
        readline,
        commands,
        pokeapi,
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
}