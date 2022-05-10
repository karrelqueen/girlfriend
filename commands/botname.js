const Command = require("../command");
const { BOT_ID } = require("../config.json")

module.exports = new Command('botname', 'Changes bot nickname', '<name>', 'moderation', async (message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR')){
        let nickname = args.join(' ');
        await console.log(nickname);
        await message.channel.send("Oh? okay..."); return message.guild.members.resolve(BOT_ID).setNickname(nickname);
    }
    else {
        return message.channel.send("You haven't permissions for it")
    }
})