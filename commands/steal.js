const profileModel = require('../models/profileSchema')

module.exports = {
    name: 'steal',
    aliases: [],
    permissions: [],
    cooldown: 7200,
    description: "Steal from another player",
    async execute(client, message, args, Discord, userData) {
        await message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)
        })
        if (!args.length) return message.author.send('You need to mention a user to steal from')
        const targetUser = message.mentions.users.first()
        if(!targetUser) return message.author.send("That user doesn't exist")
        
        const randomChance = Math.random() * 100
        
        if(randomChance > 67) {
            let randomAmount = Math.floor(Math.random() * (userData.pp * 500)) 

            try {
                const victim = await profileModel.findOne({
                    userID: targetUser.id
                })
                
                if (!victim) return message.author.send(`This player doesn't exist in DB.`)

                if(victim.coins < randomAmount) randomAmount = victim.coins
                
                await profileModel.findOneAndUpdate({
                    userID: targetUser.id
                }, {
                    $inc: {
                        coins: -randomAmount
                    }
                })

                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: randomAmount
                    }
                })

                targetUser.send(`You have been stolen ${randomAmount} GG by ${message.author.username}`)
                return message.author.send(`You stole ${randomAmount} GG form ${targetUser.username}!`)

            } catch(err) {
                console.log(err)
            }
        }  else {
            targetUser.send(`${message.author.username} tried to steal from you`)
                .then(message => console.log(`Sent message: ${message.content}`))
                .catch(console.error);
            return message.author.send(`You stole nothing from ${targetUser.username}!`)
        }
    }
}