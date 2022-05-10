const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'spoiler',
    execute(client, message, args){
        if (!message.guild) return;
            async function spoiler() {
            const spoilerTEXT = await neko.spoiler({text: message.content.split(' ').slice(2).join(' ')});
            message.delete();
            message.channel.send(spoilerTEXT.owo);
            }
            spoiler();
    }
}