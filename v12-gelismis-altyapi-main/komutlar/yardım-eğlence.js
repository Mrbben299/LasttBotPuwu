const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let eğlence = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Eğlence Komutları Menüsü`, client.user.avatarURL())
.addField(`__Balık Tut__`,`\`${prefix}balık-tut\`\n Balık Tutarsınız`,true)
.addField(`__İlginç Bilgi__`,`\`${prefix}ilginç-bilgi\`\n İlginç Bilgi Atar`,true)
.addField(`__Kaç Cm__`,`\`${prefix}kaç-cm\`\n Malafatınızı Ölçer :D`,true)
.addField(`__Tokat At__`,`\`${prefix}tokat-at\`\n Etiketlediğiniz Kişiye Tokat Atarsınız`,true)
.addField(`__Kapak Laf__`,`\`${prefix}kapak-laf\`\n Bot Havalı Sözler Söyler`,true)
.addField(`__Yaz__`,`\`${prefix}yaz\`\n Bota İstediğinizi Yazdırırsınız`,true)
.addField(`__Dünya__`,`\`${prefix}dünya\`\n Dünya Gif Atar`,true)
.addField(`__Nitro__`,`\`${prefix}nitro\`\n Nitro Kazanırsınız`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eğlence) 
  };
exports.config = {
name: "eğlence",
  aliases: ['eğlence']
}
