require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const mongoose = require("mongoose");

const token = process.env.BOT_TOKEN; // Your bot token from BotFather
const bot = new TelegramBot(token, { polling: true });

const uri = process.env.MONGODB_URI; // MongoDB connection URI

// Command to ping the MongoDB service
bot.onText(//ping/, async (msg) => {
    const chatId = msg.chat.id;
    try {
        // Connect to MongoDB
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Ping the database
        await mongoose.connection.db.admin().command({ ping: 1 });
        
        bot.sendMessage(chatId, "Successfully connected to MongoDB!");
    } catch (error) {
        bot.sendMessage(chatId, "Failed to connect to MongoDB. Please check the connection string.");
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
});

// Start command
bot.onText(//start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Welcome! Use /ping to check the MongoDB connection.");
});

console.log("Bot is running...");
