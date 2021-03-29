module.exports = {
    name: "ping",
    aliases: [],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "This is pingpong!",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}