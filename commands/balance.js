module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(client, message, args, Discord, userData) {
        message.channel.send(`Your wallet balance is ${userData.coins}. Your bank balance is ${userData.bank}.`)
    }
}