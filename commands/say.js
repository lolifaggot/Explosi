const discord = require("discord.js");;
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
    if(message.author.id != "263228336036118531") return message.channel.send("S-Sorry, you are not my owner!");

let sayMessage = args.join(" ");

message.delete().catch()

message.channel.send(sayMessage)

};

module.exports.help = {
  name: "say",
  aliases: [],
  usage: "?say <message>",
  description: "Say a message.",
  accessableby: "Members",
  noalias: "No Aliases"
};
