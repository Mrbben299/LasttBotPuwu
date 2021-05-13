const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let yazi = args.slice(0).join("+")
  if(!yazi)return message.channel.send("**Logoya Ne Yazayım ?**")
  let lg = "https://habbofont.net/font/habbo_new/"+yazi+".gif"
  const logosj = new Discord.MessageEmbed()
  .setAuthor('İşte Logon')
  .setColor("RANDOM")
  .setImage(lg)
  .setFooter('Ovanakovic Logo Sistemi')
  message.channel.send(logosj)
};

exports.config = {
  name: 'habbo',
  aliases: ['habbo']
};