const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if(message.author.bot) return;
let args = message.content.split(" ");
     if (message.content === "start") {
message.channel.send(`#rep <@256646248931655681>`)
}
});






client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEEN);
