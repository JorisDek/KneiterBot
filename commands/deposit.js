const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'deposit',
    aliases: ["dep"],
    permissions: [],
    cooldown: 3600,
    description: "Deposit coins into your bank",
    async execute(client, message, args, Discord, userData) {
        const amount = args[0]
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit must be a whole number above 0')
        try {
            if (amount > userData.coins) return message.channel.send("You don't have that much coins")

            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount
                }
            })

            return message.channel.send(`You depositted ${amount} coins into you bank.`)

        } catch(err) {
            console.error(err)
        }
    }
}