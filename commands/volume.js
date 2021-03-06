const Command = require('../command')

module.exports = new Command('volume', 'Sets the volume for music', '<0-100>', 'music', (message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    if (!serverQueue) return message.reply("There is nothing playing.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    if (!args[0])
      return message.reply(`🔊 The current volume is: **${serverQueue.volume}%**`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    if (isNaN(args[0])) return message.reply("Please use a number to set volume.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Please use a number between 0 - 100.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return serverQueue.textChannel.send(`Volume set to: **${args[0]}%**`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
})