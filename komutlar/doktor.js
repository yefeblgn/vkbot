const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    if (!message.member.roles.find("name", "🏆 | Kurucu")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`🏆 | Kurucu*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  const roller = ["Doktor"]
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Birini etiketlemelisin.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setDescription(`
           ${user} ${roller}
            `,true)
        .   setFooter(`VK yefeblgn | Vampir Köylü Sistemi`)
          const dm = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setDescription(`
           ${user} ${roller} Oldun Önceki Rolün Geçersiz Kalmıştır.
            `,true)
        .   setFooter(`VK yefeblgn | Vampir Köylü Sistemi`)
    let vkkimne = message.guild.channels.find(`name`, "『📥』mod-log");    
        message.guild.channels.get(vkkimne.id).send(embed)
          user.send(dm);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vkdoktor"],
  permlevel: 4
};

exports.help = {
  name: 'doktor',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'doktor'
};