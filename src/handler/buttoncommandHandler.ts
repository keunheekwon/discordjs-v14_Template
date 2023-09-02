import { Client } from "discord.js";
import fs from "fs";

import collection from "../index";
import { Logger } from "../Function/Function";
const buttonCommands = collection.buttoncommands;

async function loadButtonCommands(client: Client) {
  const commandsCategoryPath = "./src/Commands/Button";
  const commandsCategoryFiles = fs.readdirSync(commandsCategoryPath);

  for (const category of commandsCategoryFiles) {
    const commandsPath = `./src/Commands/Button/${category}`;
    const commandsFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".ts"));
    for (const file of commandsFiles) {
      const command = require(`../Commands/Button/${category}/${file}`);
      buttonCommands.set(command.default.id, command.default);
      Logger(`${command.default.data.id} 버튼이 추가되었습니다.`);
    }
  }
}

export = loadButtonCommands;
