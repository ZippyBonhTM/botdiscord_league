const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "token"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log (`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Elo"){
        message.reply("Qual seu nick no Lol?", console.log("Olhando perfil no lol, procurando elo..."))
    }
})

client.login(process.env.TOKEN)