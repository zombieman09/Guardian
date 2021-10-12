const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');

module.exports.run = async (bot, message, args) => {

  const mayınoyun = new Minesweeper;
  const ss = mayınoyun.start();

  return ss
    ? message.channel.send(ss)
    : message.channel.send(':warning: Geçersiz veri.');
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mayın-tarlası',"mt"],
  permLevel: 0,
  kategori: 'oyunlar'
}

exports.help = {
  name: 'mayıntarlası',
  description: "Mayın tarlası oynamanızı sağlar.",
  usage: ''
}