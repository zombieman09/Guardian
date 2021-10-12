const Discord = require('discord.js');
exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  if (args[0] === '100') {
   
message.channel.bulkDelete(100)// 1 
 
  }
  
  if (args[0] === '200') {
   
message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2 

  }
if (args[0] === '300') {
   
message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3 

  }
if (args[0] === '400') {
   
message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4 

  }
if (args[0] === '500') {
   
 message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5 

  }
if (args[0] === '600') {
   
 message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6 

  }
 if (args[0] === '700') {
   
 message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6
message.channel.bulkDelete(100)// 7 

  }
if (args[0] === '800') {
   
message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6
message.channel.bulkDelete(100)// 7
message.channel.bulkDelete(100)// 8 

  }
if (args[0] === '900') {
   
 message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6
message.channel.bulkDelete(100)// 7
message.channel.bulkDelete(100)// 8
message.channel.bulkDelete(100)// 9 

  }
if (args[0] === '1000') {
   
 message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6
message.channel.bulkDelete(100)// 7
message.channel.bulkDelete(100)// 8
message.channel.bulkDelete(100)// 9
message.channel.bulkDelete(100)// 10 

  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'sil'
};