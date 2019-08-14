const discord = require("discord.js");;
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "497227982382039051") return message.channel.send("Sorry, you are not Ashi!");
    

let sayMessage = args.join(" ");

message.delete().catch()

message.channel.send(sayMessage)

};

module.exports.help = {
  name: "say",
  aliases: [],
  usage: ".say <message>",
  description: "Say a message.",
  accessableby: "Members",
  noalias: "No Aliases"
};
