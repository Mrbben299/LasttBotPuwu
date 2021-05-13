const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('`Yetersiz Yetki!`')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("YELLOW")
.setDescription("Nuke İşlemi Uygulanıyor...")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setAuthor(`✅ | Nuke Işlemi Başarılı`)
    .setColor('GREEN')
    .setImage('https://cdn.discordapp.com/attachments/797762266622853150/839520421014536202/tenor.gif')
    .setTimestamp()
    .setFooter(`Ovanakovic Nuke Sistemi`)
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)


};

exports.config = {
  name: 'nuke',
  aliases: ['nuke']
};