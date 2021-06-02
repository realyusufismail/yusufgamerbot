module.exports = {
    name: 'ping',
    description: 'The bots respond speed!',
    execute(message, args) {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    },
};