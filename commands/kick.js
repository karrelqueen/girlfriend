const Command = require('../command')

module.exports = new Command(
    'kick', 
    'Kicks a member if you have permission to', 
    '<@member>', 'moderation', async (message, args) => {
    if (message.member.hasPermission('KICK_MEMBERS')) {
        const mentionedUser = message.mentions.users.first();
        if (mentionedUser) {
            if (!message.guild) return;
            const mentionedMember = message.guild.member(mentionedUser)
            if (mentionedMember) {
                await mentionedMember.kick({ days: 256, reason: "it isn't important" } )
                message.channel.send(`You kicked <@${mentionedMember.id}>`)
            } else message.reply('there is no user with such a name in this guild...')
        } else message.reply('so you want to kick nobody?\n...or you didn\'t mention the user') 
    } else message.reply('you don\'t have enough permissions for this')
})