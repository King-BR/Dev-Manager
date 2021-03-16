const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	if (message.author.id === "375462796697010176") {
 		try {
 			let argumentos = args.join(" ");
 			if(!args.join(' ')) return message.reply("tu é burro pa krl")
 			let código = eval(argumentos);

 			if (typeof código !== 'string')
 			código = require('util').inspect(código, { depth: 0 });
 			let embed = new Discord.RichEmbed()
 				.setColor('BLACK')
 				.addField('Input', `\`\`\`js\n${argumentos}\`\`\``)
 				.addField('Output', `\`\`\`js\n${código}\n\`\`\``)
 			message.channel.send(embed)
 		} catch(e) {
 			message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
 		}
 	} else {
 		return message.reply("somente o dono do bot pode usar esse comando")
 	}
}