// command_map.ts
import { type State } from "./state.js";

export async function commandMapForward(state: State) {
    const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    locations.results.forEach((location) => {
        console.log(location.name);
    });
}

export async function commandMapBack(state: State) {
    if (!state.prevLocationsURL === undefined) {
        throw new Error("you're on the first page");
    }

    const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    locations.results.forEach((location) => {
        console.log(location.name);
    });
}