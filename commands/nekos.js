const KarrelEmbed = require('../modules/karrelEmbed')
const Discord = require('discord.js')
const Command = require('../command');
const nekoClient = require('nekos.life');
const { nsfw } = new nekoClient();
const { BOT_PREFIX } = require('../config.json');
//const commands_neko = require('./commands_neko')
let fs = require('fs');
let commands_neko = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands_neko/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command_neko = require(`../commands_neko/${file}`);

  commands_neko.set(file, command_neko);
}
module.exports = new Command('nekos', 'Get image/gif/message according to tag', '<tags>', 'bot', (message, args) => {
        let file_name = `${message.content.split(' ')[1]}.js`;
        console.log(file_name);
        if(!fs.existsSync('./commands_neko/' + file_name)) return console.log('something went wrong');
        if(fs.existsSync('./commands_neko/' + file_name)) {
          commands_neko.get(file_name).execute(message.client, message);
        }
})