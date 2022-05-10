const Command = require('../command')

module.exports = new Command('skip', 'Skips the current playing track', '', 'music', (message) => { 
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    if (!serverQueue)
      return message.channel.send("There is nothing playing that I could skip for you.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`${message.author} ⏭ skipped the song`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
})