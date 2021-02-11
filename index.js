const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on('ready', () => {
    console.log(`Bot ${client.user.tag} jest teraz online!`);
})
client.on("message", message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    message.reply("wpisana komenda: " + command + ". Podane argumenty: " + args);
})
client.login(config.token);