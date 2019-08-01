const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "263228336036118531") return message.channel.send("S-Sorry, you are not my owner!");

    if (!args[0]) {
        message.channel.send("Please, provide a command to reload.")
    }

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)
};

module.exports.help = {
  name: "reload",
  aliases: [],
  usage: ".reload <command>",
  description: "Reloads a command.",
  accessableby: "Members",
  noalias: "No Aliases"
};
