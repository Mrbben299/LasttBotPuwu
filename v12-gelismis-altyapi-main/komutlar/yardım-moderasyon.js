const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let moderasyon = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Moderasyon Menüsü`, client.user.avatarURL())
.addField(`__Otomatik Rol__`,`\`${prefix}otorol\`\n Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`\`${prefix}ban\`\n Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`\`${prefix}kick\`\n Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`\`${prefix}unban\`\n yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`\`${prefix}modlog\`\n Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`\`${prefix}bansay\`\n Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`\`${prefix}bansorgu\`\n Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`\`${prefix}küfürengel\`\n Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Nuke__`,`\`${prefix}nuke\`\n Kanalı Silip Tekrar Oluşturur.`,true)
.addField(`__Reklam Engel__`,`\`${prefix}reklamengel\`\n Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`\`${prefix}reklam-kick\`\n Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`\`${prefix}sil\`\n Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`\`${prefix}yavaşmod\`\n Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`\`${prefix}sa-as\`\n Sunucunuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`\`${prefix}yasaklı-tag\`\n Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(moderasyon) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
