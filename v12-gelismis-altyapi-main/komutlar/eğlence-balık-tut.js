const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message) => {
  message.channel.send("Bakalım Ne Tuttun").then(message => {
    var baliklar = [
      "Sazan Tuttun :fish:",
      "Köpek Balığı Tuttun :fish:",
      "Uskumru Tuttun :fish:",
      "Mezgit Tuttun :fish:",
      "Japon Balığı Tuttun :fish:",
      "Hamsi Tuttun :fish:",
      "Levrek Tuttun :fish:",
      "Hiçbirşey Tutamadın Maalesef :fish:",
      "Alabalık Tuttun :fish:",
      "Maalesef Balık Oltadan Kaçtı :fish:",
      "İstavrit Tuttun :fish:",
      "Gümüş Balığı Tuttun :fish:",
      "Çukra Tuttun :fish:",
      "Balon Balığı Tuttun :fish:",
      "Yılan Balığı Tuttun :fish:"
    ];
    var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
    message.edit(`${balik}`);
  });
};

exports.config = {
  name: 'balık-tut',
  aliases: ['balık-tut']
};