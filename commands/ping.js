module.exports = {
    name: "ping",
    alisases: [],
    cooldown: 5,
    description: "This is pingpong!",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}