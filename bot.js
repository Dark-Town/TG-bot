// pages/api/telegram.js
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Array of random facts
const facts = [
    "Did you know honey never spoils?",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance'.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

// Array of corresponding image URLs
const images = [
    "https://example.com/honey.jpg",
    "https://example.com/bananas.jpg",
    "https://example.com/octopus.jpg",
    "https://example.com/flamingos.jpg",
    "https://example.com/eiffel_tower.jpg"
];

// Handle incoming updates from Telegram
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Check if the message is a command
    if (msg.text === '/start') {
        const randomIndex = Math.floor(Math.random() * facts.length);
        
        const welcomeMessage = `
Welcome to our bot! 🎉
Here's a random fact for you:
${facts[randomIndex]}
`;

        // Send the welcome message
        bot.sendMessage(chatId, welcomeMessage);

        // Send a random image
        bot.sendPhoto(chatId, images[randomIndex]);
    } else if (msg.text === '/help') {
        const helpMessage = `
Here are some commands you can use:
/start - Start the bot and get a random fact and picture
/help - Get help information
`;
        bot.sendMessage(chatId, helpMessage);
    }
});

// Export a default handler for Next.js
export default function handler(req, res) {
    res.status(200).json({ message: 'Telegram bot is running...' });
}
