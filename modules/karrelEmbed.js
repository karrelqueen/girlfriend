const { MessageEmbed } = require('discord.js');

class KarrelEmbed extends MessageEmbed {
    constructor(options) {
        if (options != undefined) {
            options.color = options.color == undefined ? 'PURPLE' : options.color;
            options.footer = options.footer == undefined ? { text: 'Made by karrel#7921' }: options.footer;
            super(options)
        } else {
            options = {
                color: 'PURPLE',
                footer: {
                    text: 'Made by karrel#7921'
                }
            } 
            super(options)
        };
    }
}
module.exports = KarrelEmbed;