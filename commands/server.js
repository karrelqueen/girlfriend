const Command = require('../command');
const KarrelEmbed = require("../modules/karrelEmbed")

module.exports = new Command(
    'server', 'Get the info about server', '', 'misc',  
 async(message) => {
    console.log(message.guild)
   const embed = new KarrelEmbed()
  .setAuthor(message.guild.name)
  .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
  .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.cache.filter(m=>m.user.bot).size} (${message.guild.members.cache.filter(m=>m.user.bot).size} bots)`, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .setTimestamp();

  return message.channel.send({embed});
})