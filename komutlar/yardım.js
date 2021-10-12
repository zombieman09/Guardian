const categorylist = require("fs")
  .readdirSync("./komutlar/")
  .filter(s => s !== "private");
for (const category of categorylist) {
  const Discord = require("discord.js");
  const { MessageButton } = require("discord-buttons");

  exports.run = async (client, message, args) => {
    const buttonDelete = new MessageButton()
      .setStyle("red")
      .setLabel("Clear")
      .setID("buttonDelete");

    let embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setTitle("Komutlar")
      .setDescription("Komutlara ulaşmak için aşağıdan kategori seçin. Prefix `;`");
    message.channel
      .send(embed, {
        buttons: [
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Genel")
            .setID("10"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Moderasyon")
            .setID("20"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Eğlence")
            .setID("30"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Satışlar")
            .setID("40"),
        ]
      })
      .then(async function(helpMessage) {
        helpMessage
        .createButtonCollector(
          user => user.clicker.user.id == message.author.id
        )
          .on("collect", async button => {
            if (button.id == "buttonDelete") {
              message.delete().then(helpMessage.delete());

              button.reply.defer();
            } else if (button.id == "1") {
              embed.setTitle("Komutlar");
              embed.setDescription("Komutlara ulaşmak için aşağıdan kategorilerden birine tıklayın. Prefix `;`");
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Genel")
                    .setID("10"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Moderasyon")
                    .setID("20"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Eğlence")
                    .setID("30"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "10") {
              embed.setTitle("Genel");
              embed.setDescription(
                ";kullanıcı-bilgi Etiketlediğin Kişinin Bilgilerini Gösteriri \n -------------------------------------------------- \n ;otorol Etiketlediğin Rol'ü Yeni Gelen Kullanıcılara Otomatik Veriri \n -------------------------------------------------- \n ;sil 100 ile 1000 Arasında Mesaj Siler \n -------------------------------------------------- \n ;sunucu-bilgi Yazıldığı Sunucu Hakkındaki Bilgileri Veriri \n -------------------------------------------------- \n ;kullnıcı-bilgi Etiketli Kullanıcı Hakkındaki Bilgileri Verir \n -------------------------------------------------- \n ;davet Botun Davet Linkini Atar"
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Şikayet İçin DM")
                    .setID("30"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("⭕🧂 1")
                    .setID("40"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "20") {
              embed.setTitle("Moderasyon");
               embed.setDescription(";unlock Yazıldığı Kanalın Kilidini Açar \n -------------------------------------------------- \n ;ban Etiketli Kullanıcıyı Sunucudan Yasaklar \n -------------------------------------------------- \n ;unban Etiketli Kişinin Yasağ'ını Kaldırır (Sadece ID'ile Çalışır) \n -------------------------------------------------- \n ;mute Susturur Mesaj Atmasını Engeller \n -------------------------------------------------- \n ;unmute Susturmayı Açar Mesaj Atmasına İzin Veriri \n -------------------------------------------------- \n ;warn Etiketli Kullanıcıyı Uyarır \n -------------------------------------------------- \n ;lock Yazıldığı Kanalı Kilitler \n -------------------------------------------------- \n ;unlock Yazıldığı Kanalın Kilidini Açar"
                );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("Öneri İçin DM :)")
                    .setID("50"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("⭕🧂 1")
                    .setID("60"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "30") {
              embed.setTitle("Eğlence");
              embed.setDescription(";düello Etiketli Kullanıcı'ile Savaşırsın \n -------------------------------------------------- \n ;mayıntarlası Bombalara Tıklamadan Bütün Sayıları Bulmaya Çalışırsınız \n -------------------------------------------------- \n ;xox Etiketli Kullanıcı ile X - O Oynarsınız \n -------------------------------------------------- \n ;ascii Yazdığınız Sözü Eğik Çizgi Düze Çizgi ve Yan Çizgi İle Yazar \n -------------------------------------------------- \n ;yaz Yazdığınız Mesajı Bota Yazdırır"
                );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("Yapımcı--> Sen Çok Tatlısın <31")
                    .setID("70"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Devamı Yok ;)")
                    .setID("80"),
                 ]
              });
              
              button.reply.defer();
            } else if (button.id == "40") {
              embed.setTitle("Satış Fiyatları");
              embed.setDescription("**Eğlence Komutlarının 1 Tanesi 15k OwO Cash** 💸 \n                            \n **Moderasyon -- Genel Komutlarının 1 Tanesi 30k OwO Cash** 💸 \n                            \n **Botun Aynısı 600k OwO Cash** 💸 \n                            \n **Bot Satış Sunucumuzun Linki**---> https://discord.gg/vVBztnBQUc"
                );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("90"),
                 ]
              });
            }
          });
      });
  };
}

exports.conf = { aliases: [] };
exports.help = { name: "yardım" };