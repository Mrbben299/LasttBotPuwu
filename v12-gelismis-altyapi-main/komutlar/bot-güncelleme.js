const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;

const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`Ovanakovic Son Güncellemeler`, client.user.avatarURL())
.setDescription('• Logo Sistemi Eklendi\n• Nsfw Sistemi Eklendi\n• Bazı Hatalar Giderildi\n• Performans İyileştirmeleri Yapıldı\n• Site İstatistikleri Güncellendi\n• Bazı Sorunlardan Dolayı Oluşan Ping Yükselmesi Düzeltildi\n\n• Yeni Sürüm =>**1.0.1**')
.setFooter(`Ovanakovic Bot`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
  name: 'güncelleme',
   aliases: ["güncelleme"]
 };