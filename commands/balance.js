module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    permissions: [],
    cooldown: 5,
    description: "Check the user balance",
    execute(client, message, args, Discord, userData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2096F3')
        .setTitle(`Balance ${message.author.username}`)
        .addFields(
            {name: 'Cash:', value: userData.coins},
            {name: 'Bank:', value: userData.bank}
        )


        message.channel.send(newEmbed)
    }
}