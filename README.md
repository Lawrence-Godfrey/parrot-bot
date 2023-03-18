Parrot
------
The Discord bot which plays audio clips on events.

## Installation
1. Install Node.js
2. Clone this repository
3. Run `npm install`
4. Create a Discord bot and invite it to your server
   1. The bot will need the Message Content Intent turned on, as well as the following permissions in the OAuth2 tab: `Send Messages`, `Connect`, `Speak`.
5. Create a `.env` file in the root directory and add the following variables:
   1. `TOKEN` - The bot token
   2. `CLIEND_ID` - The bot client ID/Application ID
   3. `GUILD_ID` - The ID of the server you want to use the bot in
6. Run `node deploy-commands.js` to deploy the slash commands.
7. Run `npm start` to start the bot.

## Usage
The bot has a few slash commands:
- `/join` - Joins the voice channel you are in.
