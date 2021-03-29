const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'give',
    aliases: ['gv'],
    permissions: [],
    cooldown: 0,
    description: "Deposit coins into your bank",
    async execute(client, message, args, Discord, userData) {
        if (!args.length) return message.channel.send('You need to mention a user to send coins')
        const amount = args[1]

        const targetUser = message.mentions.users.first()
        if(!targetUser) return message.channel.send("That user doesn't exist")
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit must be a whole number above 0')

        try {
            const targetData = await profileModel.findOne({
                userID: message.author.id
            })
        } catch(err) {
            console.log(err)
        }
    }
}