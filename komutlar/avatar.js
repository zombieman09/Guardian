const disbut = require("discord-buttons");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  message.channel.send(`Veriler yükleniyor...`).then(async msj => {
    const botPing = msj.createdTimestamp - message.createdTimestamp;
    msj.delete();
    const btn2 = new disbut.MessageMenuOption()
      .setLabel("128")
      .setDescription(`Avatar boyutu => 128`)
      .setValue("3")
      .setEmoji("869707733685927936");
    const btn = new disbut.MessageMenuOption()
      .setLabel("1024")
      .setDescription(`Avatar boyutu => 1024`)
      .setValue("2")
      .setEmoji("869707733685927936");

    const menu = new disbut.MessageMenu()
      .addOptions(btn2, btn)
      .setMaxValues(1)
      .setMinValues(1)
      .setID("menu");

    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
    
let user = await client.users.fetch(userid);
    
    
  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
  
  let embed1 = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 128 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 128 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 128 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 128}))
.setColor("RANDOM")

    let msg = await message.channel.send({ embed: embed, component: menu });

    const filter = menu => menu.clicker.user.id === message.author.id;
    const collector = message.createMenuCollector(filter, { time: 120000 });
    client.on("clickMenu", menu => {
      if (menu.clicker.id !== message.author.id) return;
      menu.reply.defer();
      
      if (menu.values[0] === "2") {
        msg.edit({
          embed: embed
        });
      }
      if (menu.values[0] === "3") {
        msg.edit({
          embed: embed1
        });
          
      }
    });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: [],
  kategori: "genel"
};
exports.help = {
  name: "avatar",
  description: "Avatarınızı istediğiniz boyutta gösterir.",
  usage: "avatar"
};