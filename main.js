const Discord = require('discord.js')
const fs = require('fs')

// const getenv = require('getenv')
// const token = getenv.int('TOKEN')

const client = new Discord.Client()

const prefix = '!'

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('KneiterBot ONLINE!!')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    }
})

client.login('ODI0NzkxMjQxOTUwMzYzNjU5.YF0gsw.2iRJERE9EEcYBNk20nYPco-o0rY')

