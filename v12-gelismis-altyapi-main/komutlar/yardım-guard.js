const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let guard = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic Koruma Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.addField(`__Rol Koruma__`,`\`${prefix}rol-koruma\`\n Sunucunuzdaki Rolleri Silmeye Karşı Korur`,true)
.addField(`__Anti Raid Koruma__`,`\`${prefix}anti-raid\`\n Sunucunuzu Olası Bir Spam Saldırısına Karşı Korur`,true)
.addField(`__Anti Raid Bot İzni__`,`\`${prefix}bot-izni\`\n Sunucunuzdaki Bir Botu Spam Koruması İçin Devre Dışı Alabilirsiniz`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(guard) 
  };
exports.config = {
name: "guard",
  aliases: ['koruma']
}

