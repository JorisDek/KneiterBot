module.exports = {
    name: 'alex',
    alisases: ['ali'],
    cooldown: 5,
    description: 'What does the bot say when you say "alex"',
    execute(client, message, args) {
        message.channel.send('Alex de palex de pornoster!')
    }
}