
const { Client, Collection } = require("discord.js");
const CommandManager = require('./modules/commandManager');
const WelcomeListener = require('./modules/welcomeListener');
const QueueManager = require('./modules/queueManager')
require('./db/db');
const { BOT_PREFIX, BOT_TOKEN } = require('./config.json');


//Main Class
class KarrelBot extends Client {
    constructor(options) {
        super(options);
        this.prefix = options.prefix;
        this.commands = new CommandManager(options.commandsPath)
        this.welcomeListener = new WelcomeListener()
        this.queue = new Map();
    }

    login(token) {
        this._setupClient()
        return super.login(token);
    }

    _setupClient() {
        this.on('message', message => {
            if (message.author.bot || !message.content.startsWith(this.prefix)) return;
            
            const args = message.content.slice(this.prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            try {
                if (command != '') {
                    this.commands.get(command).execute(message, args);
                }
                else {
                    this.commands.get('help').execute(message, args);
                }
            } catch (error) {
                //console.error(error);
                message.channel.send("No such command :c");
            }
        });

        //Listener for k!welcome
        this.on('guildMemberAdd', member => {
            this.welcomeListener.listen(member);
        })

        this.on('ready', () => console.log('Ready'))
    }
}

//Starting The Bot
let kayaBot = new KarrelBot({
    presence: {
        activity: {
            name: "k!help"
        }	
    }, 
    prefix: BOT_PREFIX,
    commandsPath: './commands'
}).login(BOT_TOKEN)