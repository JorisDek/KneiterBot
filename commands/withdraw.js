const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'withdraw',
    aliases: ["wd"],
    permissions: [],
    cooldown: 0,
    description: "Withdraw coins from your bank",
    async execute(client, message, args, Discord, userData) {
        const amount = args[0]
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Withdraw must be a whole number above 0')
        try {
            if (amount > userData.bank) return message.channel.send("You don't have that much coins in your bank")

            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount
                }
            })

            return message.channel.send(`You withdrawn ${amount} coins from you bank.`)

        } catch(err) {
            console.error(err)
        }
    }
}