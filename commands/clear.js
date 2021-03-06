const Command = require('../command');

module.exports = new Command('clear', 'Clears the specified amount of messages in channel', '<amount>', 'moderation', async (message, args) => {
    //Check permissions
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        let amount = parseInt(args[0])
        
        if (isNaN(amount)) {
            return message.reply('please, type a valid number');
        } else if (amount < 2) return message.reply('you wanna delete your message, huh?\n Delete it yourself then...')
        else if (amount > 100) return message.reply("man, it's too for me, a can't delete so much :(")
        
        await message.channel.bulkDelete(amount);
        message.channel.send(`Deleted ${amount} messages`)

    } else message.channel.send('You don\'t have enough permissions for that')
})