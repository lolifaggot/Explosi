const discord = require("discord.js");

const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let embed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username}'s Avatar`)
        .setImage(user.avatarURL)
    message.channel.send(embed);
};

module.exports.help = {
  name: "avatar",
  aliases: [],
  usage: "?avatar <user>",
  description: "Get someone's avatar.",
  accessableby: "Members",
  noalias: "No Aliases"
};
