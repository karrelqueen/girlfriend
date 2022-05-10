const Discord = require('discord.js');
const { BOT_PREFIX } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message, args){
        if (message.guild) {
            message.channel.send('Check your DMs!').then(msg => msg.delete({ timeout: 30000 }));
            message.delete();
            const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fez6/nekos.life-discord-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`You want to create a discord bot like this yourself?\nTry do it in your own with discord.js and [nekos.life](https://github.com/fez6/nekos.life-discord-bot)!`)
            .addField('List of commands', BOT_PREFIX + 'commands')
            .setFooter('Made with 💖 and discord.js by karrel#7921', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
            if (!message.guild) {
              const embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fez6/nekos.life-discord-bot')
              .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
              .setTitle('Help')
              .setColor('7289da')
              .setDescription(`You want to create a discord bot like this yourself?\nTry do it in your own with discord.js and [nekos.life](https://github.com/fez6/nekos.life-discord-bot)!`)
              .addField('List of commands', BOT_PREFIX + 'commands')
              .setFooter('Made with 💖 and discord.js by karrel#7921', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
              message.author.send(embed);
            }
    }
}
