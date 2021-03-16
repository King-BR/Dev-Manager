const Discord = require("discord.js")

module.exports = (client, message) => {

  if (message.channel.id === "667102529489993745") {
    if(message.content.startsWith(">>>") || message.content.startsWith(">")) return;
    message.react("667144408201691136").then(a => {
       message.react("667144407996432417");
    });
  }

  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd) return;
  cmd.run(client, message, args);

  if(message.content.startsWith(`<@${client.user.id}>`)) {
    let embed = new Discord.RichEmbed()
        .setDescription("Meu prefixo é m!\nuse m!help para mais informações")
        .setColor('RANDOM')
    message.channel.send(embed)
  } 
};