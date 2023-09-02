import { Client, Events, Interaction } from "discord.js";
import index from "../../index";
import { ErrorEmbed, LoadEmbed } from "../../Function/Function";
const commands = index.buttoncommands;

module.exports = {
  name: Events.InteractionCreate,
  async run(interaction: Interaction, client: Client) {
    if (!interaction.isButton()) return;

    const command = commands.get(interaction.customId);
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
