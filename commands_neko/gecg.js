const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'gecg',
    execute(client, message, args){
        if (!message.guild) return;
            async function gecg() {
            const GIF = await neko.gecg();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random genetically engineered catgirl image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            gecg();
    }
}