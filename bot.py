
import os
import logging
from pymongo import MongoClient
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

# Set up logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB connection URI
MONGODB_URI = os.getenv('MONGODB_URI')

# Command to ping the MongoDB service
def ping(update: Update, context: CallbackContext) -> None:
    try:
        # Connect to MongoDB
        client = MongoClient(MONGODB_URI)
        # Ping the database
        client.admin.command('ping')
        update.message.reply_text("Successfully connected to MongoDB!")
    except Exception as e:
        update.message.reply_text("Failed to connect to MongoDB. Please check the connection string.")
        logger.error(f"Error connecting to MongoDB: {e}")
    finally:
        client.close()

# Start command
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text("Welcome! Use /ping to check the MongoDB connection.")

def main() -> None:
    # Create the Updater and pass it your bot's token
    updater = Updater(os.getenv('BOT_TOKEN'))

    # Get the dispatcher to register handlers
    dispatcher = updater.dispatcher

    # Register command handlers
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("ping", ping))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you send a signal to stop
    updater.idle()

if __name__ == '__main__':
    main()
