let Database = require("../database");
let { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    let member =  message.guild.members.get(args[0]) || message.mentions.members.first();

    if(!member) return message.channel.send("Você esqueceu de mencionar o membro")
    if (member.id === message.author.id) return message.channel.send("Você não pode dar rep para si mesmo!");

    Database.Users.findById(member.id, async (erro, user) => {
        if (user) {
            user.rep += 1;

            user.save();

            message.channel.send(new RichEmbed() .setDescription(`Você deu rep para o usuário **${member}**`));
        } else {
            let pessoa = new Database.Users({
                _id: member.id,
                name: member.user.username,
                rep: 1,
            });

            pessoa.save();
            
            message.channel.send(new RichEmbed() .setDescription(`Você deu rep para o usuário **${member}**`));
        };
    });

};