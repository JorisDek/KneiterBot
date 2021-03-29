module.exports = {
    name: 'edwin',
    aliases: ['ed'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 10,
    description: 'What does the bot say when you say "edwin"',
    execute(client, message, args) {
        message.channel.send('Better than the rest!')
    }
}