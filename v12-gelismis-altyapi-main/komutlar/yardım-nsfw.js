const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let nsfw = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic NSFW Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.addField(`__Pussy Gif__`,`\`${prefix}pussy\`\n Pussy Gif Atar.`,true)
.addField(`__Anal Gif__`,`\`${prefix}anal\`\n Anal Gif Atar.`,true)
.addField(`__Ass Gif__`,`\`${prefix}ass\`\n Ass Gif Atar.`,true)
.addField(`__Hentai Gif__`,`\`${prefix}hentai\`\n Hentai Gif Atar.`,true)
.addField(`__4k Gif__`,`\`${prefix}4k\`\n 4k Gif Atar.`,true)
.addField(`__Holo Gif__`,`\`${prefix}holo\`\n Holo Gif Atar.`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` => Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` => Botun İstatistiklerini Gösterir \n\`${prefix}güncelleme\` => Botta Yapılan Son Güncellemeleri Görürsünüz`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(nsfw) 
  };
exports.config = {
name: "nsfw",
  aliases: ['nsfw']
}

