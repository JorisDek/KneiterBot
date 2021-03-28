module.exports = {
    name: 'clear',
    alisases: [],
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 10,
    description: "Clear messages!",
    async execute(client, message, args) {
        if(!args[0] ) return message.reply("Plaease enter the amount of messages you want to clear.")
        if(isNaN(args[0])) return message.reply("Please eneter a number")
        if(args[0] < 1 || args[0] > 100) return message.reply("Please enter a number between 1 and 100")

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })

    }
}