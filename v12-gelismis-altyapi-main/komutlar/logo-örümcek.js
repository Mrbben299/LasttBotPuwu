const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let yazi = args.slice(0).join("+")
  if(!yazi)return message.channel.send("**Logoya Ne Yazayım ?**")
  let lg = "https://dynamic.brandcrowd.com/asset/logo/d656041d-bb59-4ed0-91e0-c900862aabb2/logo?v=4&text="+yazi
  const logosj = new Discord.MessageEmbed()
  .setAuthor('İşte Logon')
  .setColor("RANDOM")
  .setImage(lg)
  .setFooter('Ovanakovic Logo Sistemi')
  message.channel.send(logosj)
};

exports.config = {
  name: 'örümcek',
  aliases: ['örümcek']
};