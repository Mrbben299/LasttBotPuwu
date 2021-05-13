const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");
let davet = akardiyan.davet

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;

const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(`Ovanakovic Davet Menüsü`, client.user.avatarURL())
.setDescription('**\n• [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=777498134828810272&scope=bot&permissions=8)**\n')
.setFooter(`Ovanakovic Bot`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["davet"]
 };