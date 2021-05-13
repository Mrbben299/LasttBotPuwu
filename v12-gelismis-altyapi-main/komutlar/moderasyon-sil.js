const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = function(client, message,  args) {
let codeworkprefix = args.slice(0).join('!');
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`);
       if (talkedRecently.has(message.author.id)) {
           return message.reply("Bu Özelliği ``10`` Saniyede Bir Kullanabilirsin!");
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
if(!args[0]) return message.reply("Lütfen 1-99 Arası Sayı Girin!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:white_check_mark: | ${message.member} ${args[0]} Adet Mesaj Başarıyla Silindi`).then(codework => codework.delete({timeout: 5000}));
})
}

exports.config = {
  name: 'sil',
  aliases: ['sil']
};