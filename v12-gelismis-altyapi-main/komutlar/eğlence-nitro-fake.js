const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const nitro = new Discord.MessageEmbed()

.setColor("PURPLE")
.setImage("https://media.discordapp.net/attachments/776071448078974997/795578758425739264/unknown.png")
.setTitle("Nitro Kazandın Moruq");

  message.channel.send(nitro);
}; 

exports.config = {
  name: 'nitro',
  aliases: ['nitro']
};