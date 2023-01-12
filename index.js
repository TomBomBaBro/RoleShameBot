require('dotenv').config();

const roleID = '1063152302640345209' //Discord role ID goes here, can be accessed by using disocrd in developer mode.

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on('ready', () => {
    console.log('bot is ready');
})

client.on('messageCreate', async (message) => {
    if (message.member.roles.cache.has(roleID)) {
        message.reply({
            content: 'https://tenor.com/Q9nz.gif',
        })
    }
})

client.login(process.env.DISCORD_BOT_ID);