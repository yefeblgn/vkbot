const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  message.delete();
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`5` Dakika da bir oyuna katılabilirsiniz. - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 300000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }  
  const roller = ["Köylü", "Vampir", "Medyum", "Doktor"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];
  
  const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 <@${message.author.id}> Rolün yönetici tarafından ayarlanacak! Lütfen bekleyiniz...
`,true)
        .setFooter("VK yefeblgn | Vampir Köylü Sistemi")
    let oyunakatildi = message.guild.channels.find(`name`, "VAMPIR KOYLU ODASI İSMİ");
    let vkkimne = message.guild.channels.find(`name`, "MODLOG ODASI İSMİ"); 
    vkkimne.send(embed)
    message.author.send(embed)

const hg = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 <@${message.author.id}> Başarıyla oyuna katıldı! Rolünü söylememm.
`,true)
        .setFooter(`VK yefeblgn | Vampir Köylü Sistemi`)
    oyunakatildi.send(hg)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vkkatıl"],
  permLevel: 0
};

exports.help = {
  name: 'katıl',
  description: 'Vampir Köylü Katılma.',
  usage: 'katıl'
};
