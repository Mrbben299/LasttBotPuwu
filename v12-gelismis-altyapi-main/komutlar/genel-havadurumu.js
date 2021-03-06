const Discord = require("discord.js");
const weather = require('weather-js');

exports.run =  (bot, message, args) => {
  if (!args[0]) return message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign: | Lütfen Bir Şehir Girin`)

 }});
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
            if (err) message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:${err}`)

 }}); 
            if (!result) {
                message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign: | Lütfen Geçerli Bir Şehir Girin`)

 }}) 
                return; 
            }
            var current = result[0].current; 
            var location = result[0].location;   
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`) 
                .setTimestamp()
                .setAuthor(`${current.observationpoint} Hava Durumu`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86) 
                .addField('Sıcaklık',`${current.temperature} Derece`, true)
                .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
                .addField('Rüzgar',current.winddisplay, true)
                .addField('Rüzgar Hızı',current.windspeed, true)
                .addField('Nem', `%${current.humidity}`, true)
                message.channel.send({embed});
        });
    }


exports.config = {
  name: 'hava-durumu',
  aliases: ['hava-durumu']
};