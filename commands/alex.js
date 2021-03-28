module.exports = {
    name: 'alex',
    alisases: ['ali'],
    description: 'What does the bot say when you say "alex"',
    execute(client, message, args) {
        message.channel.send('Alex de palex de pornoster!')
    }
}