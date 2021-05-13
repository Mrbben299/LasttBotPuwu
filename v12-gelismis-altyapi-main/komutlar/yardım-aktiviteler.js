const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let aktivite = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic Aktivite Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.addField(`__Youtube Together__`,`\`${prefix}aktivite <kanal id> yt\`\n YouTube Together Oynarsınız`,true)
.addField(`__Poker Night__`,`\`${prefix}aktivite <kanal id> pkr\`\n Poker Night Oynarsınız.`,true)
.addField(`__Betrayal.io__`,`\`${prefix}aktivite <kanal id> bio\`\n Betrayal.io Oynarsınız.`,true)
.addField(`__Fishington.io__`,`\`${prefix}aktivite <kanal id> fio\`\n Fishington.io.`,true)
.setDescription('Aktivite Sistemi Discordun Yeni Güncellemesi İle Sizlerle Birlikte')
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir  \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(aktivite) 
  };
exports.config = {
name: "aktiviteler",
  aliases: ['aktiviteler']
}

