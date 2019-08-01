const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sayMessage = args.join(" ");

    message.channel.send("No memes for you! HAH ")
};

module.exports.help = {
    name: "memes",
    aliases: ["m"]
};
