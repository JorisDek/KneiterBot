module.exports = {
    name: "ping",
    description: "This is pingpong!",
    execute(message, args) {
        message.channel.send('pong!')
    }
}