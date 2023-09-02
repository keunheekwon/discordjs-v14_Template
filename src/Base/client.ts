import { Client, Partials } from "discord.js";

const client = new Client({
  intents: [131071],
  partials: [Partials.Channel],
});

export default client;
