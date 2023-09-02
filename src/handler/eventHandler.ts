import { Client, Collection } from "discord.js";
import * as fs from "fs";

import { Event } from "../Interface/event";
import { Logger } from "../Function/Function";

async function loadEvents(client: Client) {
  const eventFolders = fs.readdirSync("./src/Events");
  for (const folder of eventFolders) {
    const eventFiles = fs
      .readdirSync(`./src/Events/${folder}`)
      .filter((file) => file.endsWith(".ts"));
    for (const file of eventFiles) {
      const event = require(`../Events/${folder}/${file}`) as Event;
      if (event.once) {
        client.once(event.name, (...args) => event.run(...args, client));
      } else {
        client.on(event.name, (...args) => event.run(...args, client));
      }
      Logger(`${event.name} 이벤트가 추가되었습니다.`);
    }
  }
}

export = loadEvents;
