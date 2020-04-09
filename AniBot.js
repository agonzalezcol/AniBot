const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
});
client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});
client.login("NjgxNjQ1NTQ5NDI1Nzg3MDc4.Xo5k-Q.DvkULPJU55Ynkxw_EIJn7YzYlWU");