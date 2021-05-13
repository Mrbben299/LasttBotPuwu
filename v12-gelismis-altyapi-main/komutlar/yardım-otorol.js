const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let otorol = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Otorol Menüsü`, client.user.avatarURL())
.addField(`__Oto Rol Ayarla__`,`\`${prefix}otorol-ayarla\`\n Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`\`${prefix}otorol-kapat\`\n Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`\`${prefix}otorol-mesaj\`\n Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`\`${prefix}otorol-mesaj-sıfırla\`\n Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(otorol) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
