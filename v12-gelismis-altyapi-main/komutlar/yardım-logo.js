const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let logo = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic Logo Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.addField(`__Bubble Logo__`,`\`${prefix}bubble\`\n Bubble Logo Yapar.`,true)
.addField(`__Comic Logo__`,`\`${prefix}comic\`\n Comic Logo Yapar.`,true)
.addField(`__Cool Logo__`,`\`${prefix}cool\`\n Cool Logo Yapar.`,true)
.addField(`__Elmas Logo__`,`\`${prefix}elmas\`\n Elmas Logo Yapar.`,true)
.addField(`__Steampunk Logo__`,`\`${prefix}steampunk\`\n Steampunk Logo Yapar.`,true)
.addField(`__Yeşil Logo__`,`\`${prefix}yeşil\`\n Yeşil Logo Yapar.`,true)
.addField(`__Şekilli Logo__`,`\`${prefix}şekilli\`\n Şekilli Logo Yapar.`,true)
.addField(`__Efsane Logo__`,`\`${prefix}efsane\`\n Efsane Logo Yapar.`,true)
.addField(`__Flash Logo__`,`\`${prefix}flash\`\n Flash Logo Yapar.`,true)
.addField(`__Örümcek Logo__`,`\`${prefix}örümcek\`\n Örümcek Logo Yapar.`,true)
.addField(`__Köpek Logo__`,`\`${prefix}köpek\`\n Köpek Logo Yapar.`,true)
.addField(`__Gamer Logo__`,`\`${prefix}gamer\`\n Gamer Logo Yapar.`,true)
.addField(`__Ejderha Logo__`,`\`${prefix}ejderha\`\n Ejderha Logo Yapar.`,true)
.addField(`__Roket Logo__`,`\`${prefix}roket\`\n Roket Logo Yapar.`,true)
.addField(`__Habbo Logo__`,`\`${prefix}habbo\`\n Habbo Logo Yapar.`,true)
.addField(`__Kalın Logo__`,`\`${prefix}kalın\`\n Kalın Logo Yapar.`,true)
.addField(`__Kırmızı Logo__`,`\`${prefix}kırmızı\`\n Kırmızı Logo Yapar.`,true)
.addField(`__Altın Logo__`,`\`${prefix}altın\`\n Altın Logo Yapar.`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(logo) 
  };
exports.config = {
name: "logo",
  aliases: ['logo']
}

