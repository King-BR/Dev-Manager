let Database = require("../database");
const Discord = require('discord.js');

module.exports = (client, member,) => {
    if(member.guild.id != "666447067970928650") return;
    let server = client.guilds.get("666447067970928650")

    let log = server.channels.get("666447067975122946")
    let saida = new Discord.RichEmbed()
        .setDescription(`${member.user.username}#${member.user.discriminator} saiu do servidor`)
        .setColor("RED")
        .setTimestamp()
    log.send(saida)

    
    let bot = server.members.filter(a => a.user.bot).size;
    let totalmembros = server.memberCount;

    let canalMembro = server.channels.get("667378472641101834")
    canalMembro.edit({
        name: `${totalmembros - bot} membros`
    })

    let canalBot = server.channels.get("667378564399759437")
    canalBot.edit({
        name: `${bot} bots`
    })
}