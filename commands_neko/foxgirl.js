const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'foxgirl',
    execute(client, message, args){
        if (!message.guild) return;
            async function foxgirl() {
            const GIF = await neko.foxGirl();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random foxgirl image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            foxgirl();
    }
}