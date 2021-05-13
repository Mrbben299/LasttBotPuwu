const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Ovanakovic Bot - Komut Sayısı`)
    .setDescription('**\nToplam**  **`' + client.commands.size + '`** **Komutum Mevcut!**')
    .setColor("#ffffff")
    .setThumbnail('https://cdn.discordapp.com/avatars/777498134828810272/904b1c180c4960c5cc321ffa8cfe2de8.webp')
    .setTimestamp()
    .setFooter("Ovanakovic Bot | Gelişmiş Türkçe Bot | 2021" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

