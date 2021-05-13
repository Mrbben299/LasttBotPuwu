const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
const moment = require('moment');
moment.locale('tr');

exports.run = async(client, message, args) => {

const roller = message.guild.roles.cache.filter(a => a.name !== 'everyone' && !a.managed).sort((a, b) => a.position - b.position).map(c => c).reverse().splice(0, 10).join(' ')

let emoji = message.guild.emojis.cache.map(morly => `${morly}`).splice(0, 10).join(' ')

const bilgi = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL({ dynamic:true }))
.setAuthor(`${message.guild.name} Sunucunun Blgileri`)
.setDescription(`

**Sunucu İsmi**: \`${message.guild.name}\`

**Sunucu ID**: \`${message.guild.id}\`

**Sunucu Sahibi**: <@${message.guild.ownerID}>

**Kuruluş Tarihi**: ${moment(message.guild.createdAt).format('D MMMM YYYY | HH:MM:SS')}

**Boost Sayısı**: ${message.guild.premiumTier} Boost | ${message.guild.premiumSubscriptionCount} Seviye

**Toplam Kullanıcı** \`${message.guild.memberCount}\`

**Toplam Yazı Kanalı**: \`${message.guild.channels.cache.filter(ch => ch.type == 'text').size}\`

**Topam Sesli Kanalı** \`${message.guild.channels.cache.filter(ch => ch.type == 'voice').size}\`

**Toplam Kategori**: \`${message.guild.channels.cache.filter(ch => ch.type == 'category').size}\`

`)
.addField(`Roller [${message.guild.roles.cache.size-1}]`,roller ? roller : 'Hiç Rol Bulunmuyor!')
.addField(`Emojiler [${message.guild.emojis.cache.size}]`,emoji ? emoji: 'Emoji Yok')
.setFooter(`${message.guild.name}`)
.setTimestamp()
message.channel.send(bilgi)
  
};

exports.config = {
  name: 'sunucu-bilgi',
  aliases: ['sunucu-bilgi']
};