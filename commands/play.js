const { play } = require("../modules/queueManager");
const Command = require('../command')
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI("AIzaSyC5pGz3BwyPbwpwUUqt9Zs3N3YEvk0rtVc");

module.exports = new Command('play', "Plays audio from YouTube\nNote: playing playlist isn't available now", '<link/searchQuery>', 'music', async(message, args) => {
    const { channel } = message.member.voice;

    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}play <YouTube URL | Video Name>`)
        .then(msg => msg.delete({ timeout: 30000 }))
        .catch(console.error);
    if (!channel) return message.reply("You need to join a voice channel first!").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply("Cannot connect to voice channel, missing permissions").then(msg => msg.delete({ timeout: 30000 }));
    if (!permissions.has("SPEAK"))
      return message.reply("I cannot speak in this voice channel, make sure I have the proper permissions!").then(msg => msg.delete({ timeout: 30000 }));

    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = videoPattern.test(args[0]);

    // Start the playlist if playlist url was provided
    //if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
     // return message.channel.send("Sorry, playing playlists isn't available")
    //}

    const serverQueue = message.client.queue.get(message.guild.id);
    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songInfo = null;
    let song = null;

    if (urlValid) {
      try {
        songInfo = await ytdl.getInfo(url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.length_seconds
        };
      } catch (error) {
        if (error.message.includes("copyright")) {
          return message
            .reply("⛔ The video could not be played due to copyright protection ⛔")
            .then(msg => msg.delete({ timeout: 30000 }))
            .catch(console.error);
        } else {
          console.error(error);
          return message.reply(error.message).catch(console.error);
        }
      }
    } else {
      try {
        const results = await youtube.searchVideos(search, 1);
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.length_seconds
        };
      } catch (error) {
        console.error(error);
        return message.reply("No video was found with a matching title").then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      return serverQueue.textChannel
        .send(`✅ **${song.title}** has been added to the queue by ${message.author}`)
        .then(msg => msg.delete({ timeout: 60000 }))
        .catch(console.error);
    }

    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);

    try {
      queueConstruct.connection = await channel.join();
      play(queueConstruct.songs[0], message);
    } catch (error) {
      console.error(`Could not join voice channel: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(`Could not join the channel: ${error}`).then(msg => msg.delete({ timeout: 30000 })).catch(console.error);
    }
})