const Discord = require('discord.js');

module.exports = {
    name: 'skip',
    aliases: ['sk'],
    description: 'skips a song/nasheed',

    async execute (client, message, args) {
        if(!message.member.voice.channel) return message.reply('Pleases be in a vc to use this command.');
        await client.distube.skip(message)
        await message.channel.send("Song Skipped")
    }
}