let Database = require("../database");
let { RichEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    let pag = 0
    if(args[0]){
        if(args[0] === NaN){
            message.channel.send()
        }
    }
    
    Database.Users.findById(message.author.id, async function (erromano, documano) {
        if(!documano) {
            let novodocumano = new Database.Users({
                _id: message.author.id,
                name: message.author.username
            })

            await novodocumano.save();
        }

        Database.Users.find({}, function (erro, documento) {
            if (documento) {
                var position = documento.map(function (docu) {
                    return {
                        id: docu._id,
                        name: docu.name,
                        rep: docu.rep
                    }
                })
                position = position.sort(function (a, b) {
                    return b.rep - a.rep;
                });
                position = position.filter(function (a) {
                    return client.users.get(a.id)
                })
                let index = 1
                let top = new RichEmbed()
                    .setColor("RANDOM")
                    .setTitle("Top rep")
                    .setDescription(position.slice(0, 10).map((a) => index++ + " - " + client.users.get(a.id).username + " Rep: " + a.rep).join("\n"))
                    .setFooter("Seu rep: " + documano.rep, message.author.displayAvatarURL)
                message.channel.send(top)
            }
        });
    });
}