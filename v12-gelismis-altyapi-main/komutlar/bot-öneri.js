const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("Öneri Sistemi")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Öneri Sistemi")
.setDescription("Öneriniz için teşekkür ederiz")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "782297349929435166"; // Sunucu ID
 
  var channelID = "782305555875889222"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("• Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("• Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("• Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("• Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 