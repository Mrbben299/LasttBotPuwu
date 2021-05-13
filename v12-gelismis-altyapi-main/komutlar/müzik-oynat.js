const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const Dogru = "#22BF41";
const Hata = "#f30707";
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 003 •")
.setThumbnail(`https://media.tenor.com/images/c7463075c551b137548f34f15ec656a3/tenor.gif`)
.setDescription(`Müzik oynatabilmek için bir ses kanalında olmanız gerekmektedir!**`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata3 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 002 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`Müzik oynatabilmek için aranacak kelime veyahut kelimeler giriniz!**`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
  if (!args[0]) return message.channel.send(hata3)

//------------------------------------------------//  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
  const kuyrukekle = new Discord.MessageEmbed()
  .setColor(Dogru)
  .setTitle("Kuyruğa Ekle")
  .setDescription(`\`${sarki.name}\` **adlı müzik,**\n${message.author} **tarafından kuyruğa eklendi!**`)
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());   
message.channel.send(kuyrukekle)
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
  const oynanan = new Discord.MessageEmbed()
  .setColor(Dogru)
  .setTitle("Oynatılan Şarkı")
  .setDescription(`\`${sarki.name}\` **adlı müzik şu anda oynatılıyor.**`)
  .setThumbnail(client.user.avatarURL())
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());   
message.channel.send(oynanan)
sarki.queue.on('end', () => {
  const bitti = new Discord.MessageEmbed()
  .setColor(Dogru)
  .setTitle("Kuyruk Bitti!")
  .setDescription(`Kuyruktaki tüm müzikler oynatıldı`)
  .setThumbnail(client.user.avatarURL())
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
message.channel.send(bitti)
})
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal"]
};