import { ActivityType, Client, Events } from "discord.js";
import { Logger } from "../../Function/Function";

module.exports = {
  name: Events.ClientReady,
  async run(client: Client) {
    Logger(`${client.user?.username}(으)로 로그인되었습니다.`);

    let number = 0;
    const list = ["ㅌㅌ", "테스트중"];
    setInterval(() => {
      if (number == list.length) number = 0;
      client.user!.setActivity(list[number], { type: ActivityType.Playing });
      number++;
    }, 5000);
  },
};
