const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'deposit',
    aliases: ["dep"],
    permissions: [],
    cooldown: 3600,
    description: "Deposit GG into your bank",
    async execute(client, message, args, Discord, userData) {
        const amount = args[0]
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit must be a whole number above 0')
        try {
            if (amount > userData.coins) return message.channel.send("You don't have that much GG")
            
            let interest = amount * 0.02
            

            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount-interest
                }
            })

            return message.channel.send(`You deposited ${amount-interest} GG into your bank. Interest = 2%`)

        } catch(err) {
            console.error(err)
        }
    }
}