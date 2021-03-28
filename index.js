const Discord = require('discord.js')
const client = new Discord.Client()

const fs = require('fs')
require('dotenv').config()
const mongoose = require('mongoose')

client.commands = new Discord.Collection()
client.events   = new Discord.Collection()

const handlers = ['command_handler', 'event_handler']

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

mongoose.connect(process.env.SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.error(err)
}) 

client.login(process.env.TOKEN)

