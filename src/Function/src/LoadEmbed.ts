import { EmbedBuilder } from "discord.js";
import client from "../../Base/client";

export function LoadEmbed() {
  const embed = new EmbedBuilder()
    .setAuthor({
      name: `${client.user?.username}`,
    })
    .setColor("Red")
    .addFields({
      name: "\u0020",
      value: `\`\`\`로딩중 . . .\`\`\``,
    })
    .setColor("Green");
  return embed;
}
