const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'why',
    execute(client, message, args){
        if (!message.guild) return;
            async function why() {
            const whyTEXT = await neko.why();
            message.channel.send(whyTEXT.why).then(message.delete());
            
            }
            why();
    }
}