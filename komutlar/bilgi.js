const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(`
**Köylü**
Gündüzleri Vampirin Kim Olduğunu Sohbette Konuşarak Tahmin Etmeye Çalışırlar. Oylayarak Vampiri Öldürürler.

**VAMPİR**
Gündüzleri Sohbette Ahaliyi Kandırarak İkna Etmeye Çalışır. Geceleri Bota Kimi Öldürmek İstediğini Yazar ve Onları Öldürür Ancak Doktorun Koruduğu Kişiyi Geceleri Öldüremezler.

**DOKTOR**
Oyun Boyunca Geceleri 2 Kere Kendini Koruma Hakları Vardır. Ahaliyi Koruyan Kimsedir. Geceleri Korumak İstediği Kişileri Bota Yazarak Korumaya Alabilirler.

**MEDYUM**
Medyumlar Büyücülerdir Geceleri Bota Vampirin Kim Olduğunu İsmiyle birlikte yazarlar ve Onlara Yetkili Geri Cevap Atarak Vampir Olma Oranını % şeklinde verir.


**Oyun Nasıl Oynanır?**
!vkkatıl yazarak oyuna dahil olurlar. Rolleri Özel Mesaj İle Bildirilir.
Gündüzleri Vampirin Kim Olduğunu Ahali Sohbette Bulmaya Çalışırlar.
Geceleri İse Vampirin Ortaya Çıkmasıyla Bir Bir Katledilirler.
Ahali, Vampiri Bulup Astıklarında İse Oyun Sona Ermiştir.

Sona Kalan 2 kişiden 1 Tanesi Vampir İse Oyunu Vampir Kazanmış DEMEKTİR.
Vampir Asıldığı Anda Oyun Biter ve Ahali Oyunu Kazanmış DEMEKTİR.

`,true)
      .setFooter(`VK yefeblgn | Vampir Köylü Sistemi`)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vkbilgi"],
  permlevel: 4
};

exports.help = {
  name: 'bilgi',
  description: 'Vampir Köylü Yardım.',
  usage: 'bilgi'
};