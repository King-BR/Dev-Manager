const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTitle("Prefixo: m!")
        .addField("**rep**", "da rep para o usuario mencionado que tenha te ajudado")
        .addField("**unrep**", "tira rep do usuario mencionado (somente staffs podem usar)")
        .addField("**top**", "mostra o placar de rep do servidor")
        .addField("**help**", "essa mensagem")
    message.channel.send(embed)
}