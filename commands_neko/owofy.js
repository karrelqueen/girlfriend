const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'owofy',
    execute(client, message, args){
        if (!message.guild) return;
            async function owofy() {
                const owoTEXT = await neko.OwOify({text: message.content.split(' ').slice(2).join(' ')});
                message.channel.send(owoTEXT.owo);
            }
            owofy();
        }
}