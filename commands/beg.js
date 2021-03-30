const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'beg',
    aliases: [],
    permissions: [],
    cooldown: 3600,
    description: "beg for coins",
    async execute(client, message, args, Discord, userData) {
        const random = Math.floor(Math.random() * 50) + 1

        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id
        }, {
            $inc: {
                coins: random
            }
        })

        return message.channel.send(`${message.author.username}, you begged and received ${random} coins.`)
    }
}