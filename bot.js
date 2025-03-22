const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = '7827301147:AAGOSpd2qTtGvMWTTSCNoJtP0AfkkjYCh68';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of messages.
bot.onText(//start/, (msg) => {
    

    // Send a welcome message and a link to your channel
    const welcomeMessage = `
Welcome to our bot! 🎉
To get started, join our channel: [Your Channel Name](https://t.me/tcronebhackx)
`;

    bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
});

// Optional: Add more commands or functionalities as needed
bot.onText(//help/, (msg) => {
    
    const helpMessage = `
Here are some commands you can use:
/start - Start the bot and get a link to our channel
/help - Get help information
`;
    bot.sendMessage(chatId, helpMessage);
});
