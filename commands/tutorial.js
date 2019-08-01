const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    // Your command code
};

module.exports.help = {
  name: "example",
  aliases: ["ex"],
  usage: "No Usage",
  description: "Example Command",
  accessableby: "Members",
  noalias: "No Aliases"
};
