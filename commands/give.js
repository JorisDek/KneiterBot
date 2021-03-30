const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'give',
    aliases: ['gv'],
    permissions: ["ADMINISTRATOR"],
    cooldown: 0,
    description: "Deposit coins into your bank",
    async execute(client, message, args, Discord, userData) {
        if (!args.length) return message.channel.send('You need to mention a user to send coins')
        const amount = args[1]

        const targetUser = message.mentions.users.first()
        if(!targetUser) return message.channel.send("That user doesn't exist")
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Number must be a whole number above 0')

        try {
            const targetData = await profileModel.findOne({
                userID: message.author.id
            })
            if (!targetData) return message.channel.send(`This user doesn't exist in DB.`)

            await profileModel.findOneAndUpdate({
                userID: targetUser.id
            }, {
                $inc: {
                    coins: amount
                }
            })

            return message.channel.send(`This user has been given ${amount} coins!`)

        } catch(err) {
            console.log(err)
        }
    }
}