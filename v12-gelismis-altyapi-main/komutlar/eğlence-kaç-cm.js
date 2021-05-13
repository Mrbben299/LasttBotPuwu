const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Hemen Ölçüyorum Az Bekle").then(message => {

    var FwhyCode = [

      "**Senin Malafatın  18CM ** :eggplant: ",
      "**Senin Malafatın  11CM ** :eggplant:",
      "**Senin Malafatın  32CM ** :eggplant:",
      "**Senin Malafatın  35CM ** :eggplant:",
      "**Senin Malafatın   8CM ** :eggplant:",
      "**Senin Malafatın  65CM ** :eggplant:",
      "**Senin Malafatın   5CM ** :eggplant:",
      "**Senin Malafatın  31CM ** :eggplant:",
      "**Senin Malafatın  14CM ** :eggplant:",
      "**Senin Malafatın   1CM ** :eggplant:"

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  
  });
};

exports.config = {
  name: 'kaç-cm',
  aliases: ['kaç-cm']
};