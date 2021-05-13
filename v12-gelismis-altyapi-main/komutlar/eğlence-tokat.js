const Discord = require("discord.js");

exports.run = function(client, message, args) {
const akardiyan = message.mentions.users.first();

if (!akardiyan) return message.reply("Lütfen Tokat Atacağın Kişiyi Etiketle");

const GamerWolf = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`> :wave: | Birisi Birine Tokat Attı\n> Tokat Atan => <@${message.author.id}>\n> Attığı Kişi => ${akardiyan}`)
    .setImage("https://media.giphy.com/media/J07H1nnjD6I6i18ouB/giphy.gif")
  
 return message.channel.send(GamerWolf);
};

exports.config = {
  name: 'tokat-at',
  aliases: ['tokat-at']
};