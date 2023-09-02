import { EmbedBuilder } from "discord.js";

export function ErrorEmbed(message: String) {
  const embed = new EmbedBuilder()
    .setTitle("오류가 발생했습니다")
    .setDescription(`\`\`\`${message}\`\`\``)
    .setColor("Red");
  return embed;
}
