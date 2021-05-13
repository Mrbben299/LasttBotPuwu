const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let yazi = args.slice(0).join("+")
  if(!yazi)return message.channel.send("**Logoya Ne Yazayım ?**")
  let lg = "https://dynamic.brandcrowd.com/asset/logo/a88088f5-1782-4ebe-b8cb-e69645c2c873/logo?v=4&text="+yazi
  const logosj = new Discord.MessageEmbed()
  .setAuthor('İşte Logon')
  .setColor('RANDOM')
  .setImage(lg)
  .setFooter('Ovanakovic Logo Sistemi')
  message.channel.send(logosj)
};

exports.config = {
  name: 'comic',
  aliases: ['comic']
};