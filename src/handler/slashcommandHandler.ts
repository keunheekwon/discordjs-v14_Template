import { Client, REST, Routes } from "discord.js";
import * as fs from "fs";
import config from "../config";

// const slashcommands: Collection<string, any> = require("../index");
import collection from "../index";
import { Logger } from "../Function/Function";
const slashcommands = collection.slashcommands;

/**
 *
 * @param {Client} client
 */

async function loadSlashCommands(client: Client) {
  const commands = [];

  const commandsCategoryPath = "./src/Commands/Slash";
  const commandsCategoryFiles = fs.readdirSync(commandsCategoryPath);

  for (const category of commandsCategoryFiles) {
    const commandsPath = `./src/Commands/Slash/${category}`;
    const commandsFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".ts"));
    for (const file of commandsFiles) {
      const command = require(`../Commands/Slash/${category}/${file}`);
      slashcommands.set(command.default.data.name, command.default);
      commands.push(command.default.data);
      Logger(`${command.default.data.name} 명령어가 추가되었습니다.`);
    }
  }

  const rest = new REST({ version: "10" }).setToken(config.token);

  rest
    .put(Routes.applicationCommands(config.clientId), {
      body: commands,
    })
    .then((command: any) => {
      Logger(`${command.length}개의 명령어를 푸쉬하였습니다.`);
    })
    .catch((err) => {
      console.log(err);
    });
}

export = loadSlashCommands;
