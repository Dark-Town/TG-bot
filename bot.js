const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN'; // Make sure to replace this with your actual token

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for the /start command
bot.onText(//start/, (msg) => {
    

    // Send a welcome message and a link to your channel
    
Welcome to our bot! 🎉
To get started, join our channel: [Your Channel Name](https://t.me/yourchannelusername)
`;

    bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
});

// Optional: Add more commands or functionalities as needed
bot.onText(//help/, (msg) => {
    
Here are some commands you can use:
/start - Start the bot and get a link to our channel
/help - Get help information
`;
    bot.sendMessage(chatId, helpMessage);
});
