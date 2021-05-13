const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let yazi = args.slice(0).join("+")
  if(!yazi)return message.channel.send("**Logoya Ne Yazayım ?**")
let lg = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+yazi
  const logosj = new Discord.MessageEmbed()
  .setAuthor('İşte Logon')
  .setColor("RANDOM")
  .setImage(lg)
  .setFooter('Ovanakovic Logo Sistemi')
  message.channel.send(logosj)
};

exports.config = {
  name: 'cool',
  aliases: ['cool']
};