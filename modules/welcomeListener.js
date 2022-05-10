const { welcomeModel } = require('../db/models');

class WelcomeListener {
    listen(member) {
        welcomeModel.find({_id: member.guild.id}, (err, res) => {
            if (res.length == 0) return;

            console.log(res[0])
            if (res[0].channel != null) {
                let welcomeChannel = member.guild.channels.cache.find(ch => ch.name == res[0].channel)
                welcomeChannel.send(res[0].message.replace('{member}', `<@${member.id}>`))
            }
            if (res[0].default_role != null) member.roles.add(res[0].default_role)
        })
    }
}
module.exports = WelcomeListener;
                                                                       
