const Discord = require('discord.js');
const { BOT_PREFIX } = require('../config.json');

module.exports = {
    name: 'commands',
    execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('Roleplay and Images Commands')
        .addField(BOT_PREFIX + 'nekos help', 'Returns a help module', true)
        .addField(BOT_PREFIX + 'nekos hug', 'Hug a user', true)
        .addField(BOT_PREFIX + 'nekos kiss', 'Kiss a user', true)
        .addField(BOT_PREFIX + 'nekos pat', 'Pat a user', true)
        .addField(BOT_PREFIX + 'nekos slap', 'Slap a user', true)
        .addField(BOT_PREFIX + 'nekos tickle', 'Tickle a user', true)
        .addField(BOT_PREFIX + 'nekos cuddle', 'Cuddle a user', true)
        .addField(BOT_PREFIX + 'nekos feed', 'Feed a user', true)
        .addField(BOT_PREFIX + 'nekos cat', 'Returns a cat image/gif', true)
        .addField(BOT_PREFIX + 'nekos dog', 'Returns a dog image/gif', true)
        .addField(BOT_PREFIX + 'nekos goose', 'Returns a goose image', true)
        .addField(BOT_PREFIX + 'nekos smug', 'Returns a smug image/gif', true)
        .addField(BOT_PREFIX + 'nekos neko', 'Returns a neko image', true)
        .addField(BOT_PREFIX + 'nekos nekogif', 'Returns a neko gif', true)
        .addField(BOT_PREFIX + 'nekos lizard', 'Returns a lizard image/gif', true)
        .addField(BOT_PREFIX + 'nekos foxgirl', 'Returns a foxgirl image/gif', true)
        .addField(BOT_PREFIX + 'nekos wallpaper', 'Returns a wallpaper', true)
        .addField(BOT_PREFIX + 'nekos gecg', 'Returns a genetically genetically engineered catgirl image', true)
        .addField(BOT_PREFIX + 'nekos avatar', 'Returns an anime avatar', true)
        .addField(BOT_PREFIX + 'nekos waifu', 'Returns a waifu image/gif', true)
        .addField(BOT_PREFIX + 'nekos owofy', 'Returns a owofied version of your text', true)
        .addField(BOT_PREFIX + 'nekos cattext', 'Returns a cattext emoji', true)
        .addField(BOT_PREFIX + 'nekos fact', 'Returns a random fact', true)
        .addField(BOT_PREFIX + 'nekos spoiler', 'Returns a message with a unique spoiler for ever text letter', true)
        .addField(BOT_PREFIX + 'nekos why', 'Returns a random question', true)
        message.channel.send(embed);
    }
}
