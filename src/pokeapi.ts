// pokeapi.ts
import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor(cacheInterval = 5000) {
        this.cache = new Cache(cacheInterval);
    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }

        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.cache.get<Location>(url);
        if (cached) {
            return cached;
        }

        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const cached = this.cache.get<Pokemon>(url);
        if (cached) {
            return cached;
        }

        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{
        name: string;
        url: string;
    }>
};

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }>;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
};



export type Location = {
    id: number;
    name: string;
    region: {
        name: string;
        url: string;
    }
    names: Array<{
        name: string;
        language: {
            name: string;
            url: string;
        };
    }>;
    pokemon_encounters: Array<{
        pokemon: {
            name: string;
            url: string;
        };
        version_details: Array<{
            encounter_details: Array<{
                chance: number;
                condition_values: Array<string>;
                method: {
                    name: string;
                    url: string;
                };
            }>;
            max_chance: number;
            version: {
                name: string;
                url: string;
            };
        }>;
    }>;
};