import { Client, Collection, Events } from "discord.js";
import config from "./config";

import client from "./Base/client";

import { SlashCommand } from "./Interface/slashcommand";
const slashcommands: Collection<string, SlashCommand> = new Collection();

import { ButtonCommand } from "./Interface/buttoncommand";
const buttoncommands: Collection<string, ButtonCommand> = new Collection();

export default { slashcommands, buttoncommands };

import loadSlashCommands from "./handler/slashcommandHandler";
import loadEvents from "./handler/eventHandler";
import Server from "./DashBoard/index";
import loadButtonCommands from "./handler/buttoncommandHandler";
loadEvents(client);
client.on(Events.ClientReady, () => {
  loadSlashCommands(client);
  loadButtonCommands(client);
  Server(3002);
});

client.login(config.token);
