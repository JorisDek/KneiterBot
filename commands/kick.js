module.exports = {
    name: 'kick',
    alisases: [],
    permissions: ["KICK_MEMBERS"],
    cooldown: 10,
    description: "Kick a user",
    execute(client, message, args) {
        const member = message.mentions.users.first()
        if (member) {
            const targetMember = message.guild.members.cache.get(member.id)
            targetMember.kick()
            message.channel.send("User has been kicked.")
        } else {
            message.channel.send("You couldn't kick that member!")
        }
    }
}