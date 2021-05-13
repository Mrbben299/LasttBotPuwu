const Discord = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
    if (!city) return message.channel.send('Bir Şehir Giriniz');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 3GG9gE6IaWmTU6k4R4GhZ9:0z4RAa8yu1TDQD6F9ylMUG"
        }
    }).then(res => {
        const messageEmbed = new Discord.MessageEmbed().setDescription(`
           > **${city}** için iftar saati => **${res.data.result[0].time}.**
           \`\`\`İftara Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send(messageEmbed);
    }).catch(err => {
        message.channel.send('Bir Sorun Oluştu Lütfen Tekrar Deneyin');
        console.log(err);
    });
};

exports.config = {
  name: 'iftar',
  aliases: ['iftar']
};