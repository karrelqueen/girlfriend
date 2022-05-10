const Command = require('../command')

module.exports = new Command('pause', 'pauses the music', '', 'music', (message) => { 
    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true);
      return serverQueue.textChannel.send(`${message.author} ⏸ paused the music.`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    }
    return message.reply("There is nothing playing.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
})