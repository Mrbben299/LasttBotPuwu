const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let dızcılaraselam = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);

  if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`Yetkilileri banlayamam`);
  message.guild.member(dızcılaraselam).ban();

  const banned = new Discord.MessageEmbed()
  .setAuthor('✅ | İşlem Başarılı')
  .setColor("BLUE")
  .setDescription(`Banlayan Yetkili => <@${message.author.id}>\nBanlanan Kullanıcı => ${dızcılaraselam}\nBan Sebebi => **${reason}**`)
  .setImage('https://cdn.discordapp.com/attachments/836535637741010967/839839706849476628/tenor_2.gif')
  .setFooter('Ovanakovic Ban Sistemi')
  message.channel.send(banned)
     
};

exports.config = {
  name: 'ban',
  aliases: ['ban']
};