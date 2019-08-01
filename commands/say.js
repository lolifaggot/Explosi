exports.run = (client, message) => {
let args = message.content.split(" ").slice(1);
message.delete();
if (args.join(" ") === "@everyone" || args.join(" ") === "@here") return message.channel.send("You ain't making me Ping anyone BOI!");
message.channel.send(args.join(" "));
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
  if(message.author.id != "263228336036118531") return message.channel.send("S-Sorry, you are not my owner!");
name: "say",
description: "Makes the bot repeat your message.",
usage: "say [message]"
};
