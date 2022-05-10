const { BOT_PREFIX } = require('./config.json');

class Command {
    constructor(name, description, example, category, execute) {
        this.name = name;
        this.description = description;
        this.example = "```" + BOT_PREFIX + name + " " + example + "```";
        this.category = category;
        this.execute = execute;
    }
}

module.exports = Command;