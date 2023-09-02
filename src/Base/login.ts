import { Events } from "discord.js";
import client from "./client";
import config from "../config";

client.login(config.token);

client.on(Events.ClientReady, () => {
  console.log(
    `\x1b[32m[LOGS] \x1b[33m[Start] \x1b[36m${client.user?.username}\x1b[37m is connected.\x1b[0m`
  );
});
