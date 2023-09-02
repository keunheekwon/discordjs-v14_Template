import { Events } from "discord.js";
import mongoose from "mongoose";
import config from "../../config";
import { Logger } from "../../Function/Function";

module.exports = {
  name: Events.ClientReady,
  run() {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(config.database)
      .then(() => Logger(`데이터베이스 로드 완료`));
  },
};
