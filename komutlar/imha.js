const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
if(message.author.id !== "756549670443941968") return message.channel.send(new AsreaperDiscord.MessageEmbed().setColor("RANDOM").setDescription("Bu komutu sadece sahibim kullanabilir."))
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setDescription("Sunucu imha işlemi başladı. 1 dakika içinde bu sunucudaki herkes Guardian tarafından banlanacaktır. İptal etmek için `;iptal`")
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'imha',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};