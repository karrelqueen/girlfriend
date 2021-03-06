const KarrelEmbed = require('../modules/karrelEmbed')
const Command = require('../command')
const CommandManager = require('../modules/commandManager');
const { BOT_PREFIX } = require("../config.json")

module.exports = new Command('help', 'Shows what the command do or list of all commands', '', 'bot', (message, args) => {
    if (!args.length) {
        //Code if no command specified
        let categories = ['moderation','bot', 'osu', 'music', 'misc'];
        let commandsFormatted = `Type ${BOT_PREFIX}help <command> to get the info about command \n\n`;

        function ucFirst(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
        function checkCategory(category) {
            return commandsFormatted.filter(value => value.category == category).map(value => value.commands)
        }

        categories.forEach(category => {
            let command = message.client.commands.array().filter(command => command.category == category).map(value => ' `' + value.name + '`');
            commandsFormatted += `‣ **${ucFirst(category)}**:${command}\n`
        })

        message.channel.send(new KarrelEmbed({
            title: `Available Commands`,
            description: commandsFormatted
        }))
    }
    else {
        //Code if there's something like 'k!help guild'
        let command = message.client.commands.get(args[0])
        let helpEmbed = new KarrelEmbed({
            title: `Command ${command.name}`,
            color: "#FFC0CB",
            fields: [
                { name: "Description", value: command.description },
                { name: "Example usage", value: command.example }
            ]
        })
        message.channel.send(helpEmbed);
    }
})