const Command = require('../command')

module.exports = new Command('resume', 'Resumes current playing track', '', 'music', (message) => { 
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return serverQueue.textChannel.send(`${message.author} ▶ resumed the music!`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    }
    return message.reply("There is nothing playing.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
})