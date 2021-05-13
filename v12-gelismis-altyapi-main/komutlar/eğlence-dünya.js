const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const dünya = new Discord.MessageEmbed()
  .setAuthor('Buraya İyi Bak Bi Zaman Sonra Asla Göremeyeceksin...')
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription('')
  .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(dünya);
};

exports.config = {
  name: 'dünya',
  aliases: ['dünya']
};