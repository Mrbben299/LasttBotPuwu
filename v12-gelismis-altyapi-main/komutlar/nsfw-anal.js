const Discord = require("discord.js");
module.exports.run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Bu Komut Sadece ``NSFW`` Özelliği Açık Kanallarda Kullanılabilir') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`**Anal** Resmi Bulunuyor`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

            var izex_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[Link Burda](${response.body.message})**`)
                .setColor("ff0000")
                .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(izex_nsfw);
        });
    });
}

exports.config = {
  name: 'anal',
  aliases: ['anal']
};