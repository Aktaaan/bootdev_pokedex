// commands.ts

import {commandExit} from "./command_exit.js";
import type { CLICommand } from "./state.js";
import {commandHelp} from "./command_help.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import {commandExplore} from "./command_explore.js";
import {commandCatch} from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,

        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays the next 20 location areas",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 location areas",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Explores the given area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempts to catch a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a caught Pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays all caught Pokemon",
            callback: commandPokedex,
        },

        // can add more commands here
    };
}
