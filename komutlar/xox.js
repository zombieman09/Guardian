const TicTacToe = require('discord-tictactoe');

const Discord = require('discord.js');

const client = new Discord.Client();

const game = new TicTacToe({ language: 'tr' })

 

exports.run = async (client ,message, args) =>{

  game.handleMessage(message);

};

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['xox'],

    permLevel: 0,
  kategori: "oyunlar"

}

exports.help = {

    name: 'xox',

    description: 'XOX oyunu.',

    usage: 'xox'

}