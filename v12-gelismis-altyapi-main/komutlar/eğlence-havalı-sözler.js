const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Kapak Laf Geliyor...").then(message => {

    var poc = [
 
      "Yanlışım Varsa Yanlışım Vardır",
      "Sadece Gülüşümü Yakala Öfkem Ağır Gelir Sana",
      "Boşuna Dönüyorsun Dünya Okeyin 2si Bende",
      "Geceyi Seviyoruz Diye Kimse Yıldız Olmasın",
      "İnsan Konuşmayı Bildiği Kadar Susmayıda Bilmeli",
      "Beni Çekemeyen Besmele Çeksin Sayemde İmana Gelsin",
      "Biz Eskiye Dönersek Sizler Deliye Dönersiniz",
      "Sahne Senin Devam Et Ama Sıra Bana Gelmesin Dua Et"
    ];

    var poc = poc[Math.floor(Math.random() * poc.length)];

    message.edit(`${poc}`);
  });
};

exports.config = {
  name: 'kapak-laf',
  aliases: ['kapak-laf']
};