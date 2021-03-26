module.exports = {
    name: "ping",
    description: "This is pingpong!",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}