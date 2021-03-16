let Database = require("../database");
const Discord = require('discord.js');

module.exports = (client, member,) => {
    if(member.guild.id != "666447067970928650") return;
    let server = client.guilds.get("666447067970928650")
    member.addRole("667724698548830250")

    let log = server.channels.get("666447067975122946")
    let entrou = new Discord.RichEmbed()
        .setDescription(`${member} Bem vindo ao servidor!\nLeia as <#666448257660223498> e reaja na ultima mensagem para ter acesso ao resto dos canais`)
        .setColor("GREEN")
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL)
    log.send(member, entrou)

    let stafflog = server.channels.get("667012587476746256")
    let entroustaff = new Discord.RichEmbed()
        .setTitle("Novo membro")
        .setDescription(`nome: ${member.user.username}\ntag:${member.user.discriminator}\nID:${member.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor("GREEN")
        .setTimestamp()
    stafflog.send(entroustaff)

    
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