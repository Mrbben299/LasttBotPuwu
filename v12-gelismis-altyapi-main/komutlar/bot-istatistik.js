const Discord = require('discord.js');
const moment = require('moment');
const akardiyan = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let akardiyan = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Ovanakovic Bot İstatistik Menüsü')
.addField(":robot: | __**Bot Verileri**__", `**Toplam Sunucu** **=>**  **${client.guilds.cache.size}** \n**Toplam Kullanıcı** **=>** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n**Toplam Kanal** **=>** **${client.channels.cache.size}**`)
.addField(":people_hugging: | __**Botun Yapımında Katkısı Olanlar**__", `**Bot Sahibi**  <@733628096405831710>\n\n**Bot Geliştiricisi**  <@733628096405831710>\n`)
.addField(":gear: | __**Sürümler**__", `  **Discord.js Sürümü** |  **v${Discord.version}** \n  **Node.js Sürümü** **|**  **${process.version}**`)
.addField(":timer: | __**Gecikme**__", `  **${client.ws.ping}** ms`,true)
.addField(":musical_note: | __**Müzik Oynatılan**__",  +client.voice.connections.size + " Sunucu", true)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setColor("#ffffff")
message.channel.send(akardiyan)
}

exports.config = {
name: "botbilgi",
aliases: []
}