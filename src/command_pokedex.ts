// command_pokedex.ts

import type { State, CLICommand } from "./state.js";

export const commandPokedex = async (state: State): Promise<void> => {
    const pokemonNames = Object.keys(state.caughtPokemon);

    if (pokemonNames.length === 0) {
        console.log("Your Pokedex is empty.");
        return;
    }

    console.log("Your Pokedex:");
    for (const name of pokemonNames) {
        console.log(` - ${name}`);
    }
};