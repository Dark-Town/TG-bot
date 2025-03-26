   from telegram import Update
   from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

   async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
       await update.message.reply_text('Hello! I am your bot.')

   async def main():
       # Create the Application and pass it your bot's token.
       application = ApplicationBuilder().token('YOUR_BOT_TOKEN').build()

       # Add a command handler for the /start command
       application.add_handler(CommandHandler('start', start))

       # Run the bot until you send a signal to stop (Ctrl+C)
       await application.run_polling()

   if __name__ == '__main__':
       import asyncio
       asyncio.run(main())
   
