const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) {
        let hEmbed = new discord.RichEmbed()
          .setTitle("-=- Help -=-")
          .setThumbnail(bot.user.avatarURL)
          .setColor("RANDOM")
          .setDescription(` Fun \n Moderation \n Animecmds \n Misc \n Economy (SOON)`)
          .setFooter(`Do ?help <command type> to use`)
        return message.channel.send(hEmbed);
      }

      if(args[0] == "help") return message.channel.send("Just do .help instead!")

      if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
          command = bot.commands.get(command);
          var ahembed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("-=- Help -=-")
            .setThumbnail(bot.user.avatarURL)
            .setDescription(`The bot prefix is: ?\n\n**Command:** ${command.help.name}\n**Description:** ${command.help.description || "No Description"}\n**Usage:** ${command.help.usage || "No Usage"}\n **Accessable By:** ${command.help.accessableby || "Members"}\n**Aliases:** ${command.help.noalias || command.help.aliases}`)
          message.channel.send(ahembed);
        }}

        if (args[0].toLowerCase() == "moderation") {
          let modEmbed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Moderation Commands")
            .setDescription(".ban \n .kick \n .lockdown \n .mute \n .unban \n .timedlockdown \n .unlockdown \n .setgame \n .tempmute \n .purge (limit 100) \n .addrole ")
            .setThumbnail(bot.user.avatarURL)
          return message.channel.send(modEmbed)
    }
        if (args[0].toLowerCase() == "fun") {
          let funEmbed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Fun Commands")
            .setDescription("***.ascii \n .meme \n .rps***")
            .setThumbnail(bot.user.avatarURL)
        return  message.channel.send(funEmbed)
    }
       if (args[0].toLowerCase() == "animecmds") {
          let nekoEmbed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Anime Commands")
            .setDescription("***.anime \n .animememes***")
            .setThumbnail(bot.user.avatarURL)
        return  message.channel.send(nekoEmbed)

    }
      if (args[0].toLowerCase() == "misc") {
          let miscEmbed = new discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Misc. Commands")
            .setDescription("***.help \n .afk \n .avatar \n .userinfo \n .votekick \n .ping \n .say ***")
            .setThumbnail(bot.user.avatarURL)
        return  message.channel.send(miscEmbed)
    }
};

module.exports.help = {
  name: "help",
  aliases: ["cmds", "commands"],
  usage: ".help",
  description: "Shows all the commands.",
  accessableby: "Members"
};
