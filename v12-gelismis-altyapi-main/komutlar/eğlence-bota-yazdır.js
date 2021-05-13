const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmamı İstediğin Şey Ne ?');
  message.delete();
  message.channel.send(mesaj);
};

exports.config = {
  name: 'yaz',
  aliases: ['yaz']
};