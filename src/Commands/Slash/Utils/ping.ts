import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("핑")
    .setDescription("핑을 보여줍니다"),
  run(interaction: ChatInputCommandInteraction, client: Client) {
    const embed = new EmbedBuilder()
      .setTitle("🏓퐁!")
      .setDescription(
        `봇 지연시간: ${
          Date.now() - interaction.createdTimestamp
        }ms\nAPI 지연시간: ${client.ws.ping}ms`
      )
      .setColor("Green")
      .setTimestamp();

    interaction.editReply({ embeds: [embed] });
  },
};
