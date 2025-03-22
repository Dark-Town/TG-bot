const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
var token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of messages.
bot.onText(//start/, function (msg) {
    var chatId = msg.chat.id;

    // Send a welcome message and a link to your channel
    var welcomeMessage = `
Welcome to our bot! 🎉
To get started, join our channel: [Your Channel Name](https://t.me/yourchannelusername)
`;

    bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
});

// Optional: Add more commands or functionalities as needed
bot.onText(//help/, function (msg) {
    var chatId = msg.chat.id;
    var helpMessage = `
Here are some commands you can use:
/start - Start the bot and get a link to our channel
/help - Get help information
`;
    bot.sendMessage(chatId, helpMessage);
});
