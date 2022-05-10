const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cattext',
    execute(client, message, args){
        if (!message.guild) return;
            async function cattext() {
                const catTEXT = await neko.catText();
                message.channel.send(catTEXT.cat);
            }
            cattext();
    }
}