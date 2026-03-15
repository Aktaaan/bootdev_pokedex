// command_catch.ts

import type { State } from "./state.js";

export const commandCatch = async (state: State, ...args: string[]): Promise<void> => {
    if (args.length === 0) {
        console.log("No Pokemon found!");
        return;
    }
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    try {
        const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

        const catchChance = 1 - (pokemon.base_experience / 500);
        const random = Math.random();

        if (random < catchChance) {
            console.log(`${pokemonName} was caught!`);
            state.caughtPokemon[pokemonName] = pokemon;
        } else {
            console.log(`${pokemonName} escaped!`)
        }
    } catch (error) {
        console.log(`Error catching ${pokemonName}: ${error}`)
    }

}