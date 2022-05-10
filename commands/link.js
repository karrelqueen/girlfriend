const Command = require('../command')
const KarrelEmbed = require("../modules/karrelEmbed")

module.exports = new Command('link', 'Link to add the bot to your server', '', 'bot', (message) => {
    const linkEmbed = new KarrelEmbed()
    .setTitle('Link')
    .setThumbnail(message.client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setDescription("[Here you go](https://discord.com/api/oauth2/authorize?client_id=943860881563987969&permissions=1374925614167&scope=bot)")
    message.channel.send(linkEmbed)
})
