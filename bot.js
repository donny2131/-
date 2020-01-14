const Discord = require("discord.js");
const client = new Discord.Client();
client["on"]('message', message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ");
if(args[0]["toLowerCase"]() == prefix + `start`) {
message["channel"]["send"](`**#rep <@256646248931655681>**`)a}
});
client.login(process.env.BOT_TOKEN);