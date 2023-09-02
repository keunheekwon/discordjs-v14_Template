import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("").setDescription(""),
  async run(interaction: ChatInputCommandInteraction, client: Client) {},
};
