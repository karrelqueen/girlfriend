const Command = require('../command')

module.exports = new Command('stop', 'Stops the music', '', 'music', (message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    if (!serverQueue) return message.reply("There is nothing playing.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`${message.author} ⏹ stopped the music!`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
})