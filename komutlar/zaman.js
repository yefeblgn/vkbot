const Discord = require('discord.js');

exports.run = async (codeAcademy, message, args) => {
    message.delete()
    if (!message.member.roles.find("name", "🏆 | Kurucu")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`🏆 | Kurucu*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }  let yashinu = message.guild.roles.find(a => a.name === "@everyone");
  if(message.channel.permissionsFor(yashinu).has('SEND_MESSAGES')) {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: false,
    });
    message.channel.send('Gece Oldu, İyi Şanslar Dostum.!')
  } else {
    message.channel.overwritePermissions(yashinu, {
      SEND_MESSAGES: null,
    });
    message.channel.send('Gündüz Oldu, Herkese Günaydın.!')
  };
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vkzaman'],
  permLevel: 4
};

exports.help = {
  name: 'gunduz',
  description: 'Kanalı kilitler.',
  usage: 'gunduz',
  kategori: 'yetkili'
};