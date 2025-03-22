const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN'; // Make sure to replace this with your actual token

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Array of random facts
const facts = [
    "Did you know honey never spoils?",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance'.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

// Array of corresponding image URLs (you can replace these with your own images)
const images = [
    "https://example.com/honey.jpg",
    "https://example.com/bananas.jpg",
    "https://example.com/octopus.jpg",
    "https://example.com/flamingos.jpg",
    "https://example.com/eiffel_tower.jpg"
];

// Listen for the /start command
bot.onText(//start/, (msg) => {
    const chatId = msg.chat.id;

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * facts.length);

    // Prepare the welcome message and random fact
    const welcomeMessage = `
Welcome to our bot! 🎉
Here's a random fact for you:
${facts[randomIndex]}
`;

    // Send the welcome message
    bot.sendMessage(chatId, welcomeMessage);

    // Send a random image
    bot.sendPhoto(chatId, images[randomIndex]);
});

// Optional: Add more commands or functionalities as needed
bot.onText(//help/, (msg) => {
    const chatId = msg.chat.id;
    const helpMessage = `
Here are some commands you can use:
/start - Start the bot and get a random fact and picture
/help - Get help information
`;
    bot.sendMessage(chatId, helpMessage);
});
