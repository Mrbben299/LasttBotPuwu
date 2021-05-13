const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let otocevap = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Oto Cevap Menüsü`, client.user.avatarURL())
.addField(`__Oto Cevap Ekle__`,`\`${prefix}otocevap-ekle\`\n Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`\`${prefix}otocevap-liste\`\n Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`\`${prefix}otocevap-sil\`|n Sunucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(otocevap) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
