const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(` > 🔐 Sunucunuzda **${bans.size}** banlanmış üye bulunmaktadır!   `))
        .catch(console.error);

}

module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};

