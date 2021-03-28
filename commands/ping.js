module.exports = {
    name: "ping",
    alisases: [],
    description: "This is pingpong!",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}