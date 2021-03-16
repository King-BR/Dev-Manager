let Database = require("../database");
let { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    let member = message.guild.members.get(args[0]) || message.mentions.members.first();


    if (!message.member.roles.has("667133054615027734")) return message.channel.send(new RichEmbed() .setDescription("Você não tem permissão de tirar rep de usuários."));

    if(!member) return message.channel.send("Você esqueceu de mencionar o membro")
    if (member.id === message.author.id) return message.channel.send(new RichEmbed() .setDescription("Você não pode retirar rep de si mesmo!"));
    if(!args[1]) return message.channel.send("Você esqueceu de definir a quantidade de rep a ser tirado")

    Database.Users.findById(member.id, (erro, user) => {
        if (user) {

            if (user.rep === 0) return message.channel.send(new RichEmbed() .setDescription(`O usuário ${member} não tem nenhuma rep para tirar.`));
            let aux;

            if ((user.rep - args[1]) <= 0) {
                aux = user.rep
                user.rep = 0;
            } else {
                user.rep -= args[1]
                aux = args[1]
            }

            user.save();

            message.channel.send(new RichEmbed() .setDescription(`Você tirou a quantidade ${aux} de rep do usuário **${member}**`));
        } else {

            let pessoa = new Database.Users({
                _id: member.id,
                name: member.user.username,
                rep: 0,
            });

            pessoa.save();

            message.channel.send(new RichEmbed() .setDescription(`O usuário ${member} não tem nenhuma rep para tirar.`));
        };
    });
};