const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let youtube = args.slice(0).join('+');
        let link = `https://www.youtube.com/channel/UCplcVJ94k9bsYqF0i-Ctv6g` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Aktivasyon:', 'Youtubede Aranıyor')
          .addField("Aranan:", `${args.slice(0).join(' ')}`)
          .addField('Link:', `${link}`)
         
          .setFooter("Avatarın", message.author.avatarURL);
          
              message.channel.send(embed);
        
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['youtube'],
  permLevel: 0
};
exports.help = {
  name: 'youtube',
  description: 'Denemde...',
  usage: 'youtube'
};
