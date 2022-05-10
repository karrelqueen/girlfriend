const Command = require('../command')
const KarrelEmbed = require('../modules/karrelEmbed')

module.exports = new Command('queue', 'Displays current queue', '', 'music', async (message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) return message.reply("There is nothing playing.").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    let queueEmbed = new KarrelEmbed()
      .setTitle("Girlfriend's Music Queue")
      .setDescription(serverQueue.songs.map((song, index) => `${index + 1}. ${song.title}`))

    queueEmbed.setTimestamp();
    if (queueEmbed.description.length >= 2048)
        queueEmbed.description =
          queueEmbed.description.substr(0, 2007) + "\nQueue is larger than character limit...";
    return message.channel.send(queueEmbed).then(msg => msg.delete({ timeout: 120000 }));
})