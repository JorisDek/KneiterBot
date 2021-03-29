module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    permissions: [],
    cooldown: 5,
    description: "Check the user balance",
    execute(client, message, args, Discord, userData) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('##2096F3')
        .setTitle(`Balance ${userData.id}`)
        .setDescription(`Your wallet balance is ${userData.coins}. Your bank balance is ${userData.bank}.`)


        message.channel.send(`Your wallet balance is ${userData.coins}. Your bank balance is ${userData.bank}.`)
    }
}