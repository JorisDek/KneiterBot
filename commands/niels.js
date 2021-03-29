module.exports = {
    name: 'niels',
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: 'What does the bot say when you say "Niels"',
    execute(client, message, args) {
        message.channel.send('NIZZA????')
    }
}