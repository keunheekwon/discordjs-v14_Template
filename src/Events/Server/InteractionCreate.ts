import {
  Events,
  Client,
  ChannelType,
  Interaction,
  ChatInputCommandInteraction,
} from "discord.js";
import index from "../../index";
import { LoadEmbed, ErrorEmbed } from "../../Function/Function";
const commands = index.slashcommands;

module.exports = {
  name: Events.InteractionCreate,
  async run(interaction: Interaction, client: Client): Promise<any> {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);
    if (!command) return;

    try {
      if (command.hide === true) {
        await interaction.reply({ embeds: [LoadEmbed()], ephemeral: true });
      } else {
        await interaction.reply({ embeds: [LoadEmbed()], ephemeral: false });
      }
      command.run(interaction, client);
    } catch (err) {
      await interaction.editReply({ embeds: [ErrorEmbed(`${err}`)] });
      console.log(err);
    }
  },
};
