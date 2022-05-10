const { MessageEmbed } = require("discord.js")
const Command = require("../command")

module.exports = new Command(
    'createrole',
    "Creating a role\nNote: please, enter colors' name in upper case or use color's code",
    '<name> <color>', 'moderation', async(message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You haven't permissions for this action")
        if (args.length < 2) return message.reply('Not enough arguments')
        await message.guild.roles.create({
            data: {
                name: args[0],
                color: args[1]
            },
            reason: 'idk'
        }).then(role => {
            console.log(role);
            message.channel.send('You created a new role: ' + role.name);
        }).catch(err => console.log(err))
    }
)