module.exports = {
    name: 'me',
    aliases: [],
    permissions: [],
    cooldown: 5,
    description: "Check the user balance",
    execute(client, message, args, Discord, userData) {
        const meEmbed = new Discord.MessageEmbed()
        .setColor('#2096F3')
        .setTitle(` ${message.author.username}`)
        .addFields(
            {name: 'Cash:', value: userData.coins},
            {name: 'Bank:', value: userData.bank},
            {name: 'GGS:', value: userData.ggs},
            {name: 'PP:', value: userData.pp}
        )


        message.channel.send(meEmbed)
    }
    
}