const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let müzik = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Müzik Menüsü`, client.user.avatarURL())
.addField(`__Müzik Oynat__`,`\`${prefix}oynat\`\n İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`\`${prefix}duraklat\`\n Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`\`${prefix}devam\`\n Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`\`${prefix}atla\`\n Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`\`${prefix}durdur\`\n Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`\`${prefix}kuyruk\`\n Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`\`${prefix}döngü\`\n Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`\`${prefix}ses\`\n Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`\`${prefix}kuyruk-temizle\`\n Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`\`${prefix}karıştır\`\n Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(müzik) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
