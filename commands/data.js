let Database = require("../database");

exports.run = async (client,message,args) => {
    if (message.author.id != "375462796697010176")
 Database.Guilds.findById(message.guild.id, (error, data) => {
     if(!data) {
        let newData = new Database.Guilds({
            _id: message.guild.id
        });

        newData.save();
        message.channel.send("criado")
        return;
     }
     message.channel.send("ja tem")
 })
}