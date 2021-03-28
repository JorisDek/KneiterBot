module.exports = {
    name: 'edwin',
    alisases: ['ed'],
    description: 'What does the bot say when you say "edwin"',
    execute(client, message, args) {
        message.channel.send('Better than the rest!')
    }
}