const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sayMessage = args.join(" ");

    message.channel.send("You now have all adm- who am i kidding get bruhed. ")
};

module.exports.help = {
    name: "admin",
    aliases: ["a"]
};
