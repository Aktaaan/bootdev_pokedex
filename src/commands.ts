// commands.ts

import {commandExit} from "./command_exit.js";
import type { CLICommand } from "./state.js";
import {commandHelp} from "./command_help.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import {commandExplore} from "./command_explore.js";

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

        // can add more commands here
    };
}
