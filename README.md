# Discord Roster Bot

This is a simple Discord bot built with **discord.js** that allows users to view different teams and categories within the server. The bot allows for selecting categories such as **Staff Team**, **Boosters**, **Developer**, and **Players**, which will return information about each category in an embedded message.

## Features

- **Interactive Dropdown Menu**: Users can choose from the following options:
  - **Staff Team**: Displays a list of staff members.
  - **Boosters**: Displays a list of server boosters.
  - **Developer Team**: Displays information about the bot developers.
  - **Players**: Displays the active players in various teams.

- **Customizable Embed Messages**: Each category displays information with an embed format, including an image and a description.

- **Supports Multiple Categories**: The bot is easily extendable with new categories and updates to member lists.

## Requirements

To run this bot, you will need:

- A **Node.js** environment (v16.6.0 or higher recommended).
- **discord.js** library (v14.x or higher).
- A **Discord bot token**.
- A Discord server with the appropriate channel to post the bot's messages.

## Installation

### 1. Clone the repository or create your own project folder.

	· git clone https://github.com/DEV-Skyz/Discord-Roster-Bot.git

	· cd discord-roster-bot

### 2. Install dependencies.

	· npm install discord.js


### 3. Configure the bot.

	· Replace YOUR_CHANNEL_ID with the ID of the channel where the bot will send the roster panel.
	· Replace YOUR_DISCORD_IMAGE_LINK with the image link that you want to use in the embed.
	· Replace YOUR_DISCORD_TOKEN with your actual Discord bot token.

### 4. Run the Bot.

  node index.js

  
   

The bot should now be live and responding to interactions in your specified Discord channel.




### Code Breakdown

Embed Setup: The bot creates a main panel embed with a dropdown menu that allows users to select different categories.

Interaction Handling: Based on the user's selection, the bot sends an embed message with the relevant information.

Customization: You can easily change the content and appearance of the embeds, as well as add additional categories.




### Customization

You can modify the following sections to personalize the bot for your server:

staffText: Add or remove staff members.

boosterText: List of active server boosters.

developerText: Information about the bot developers.

spielerText: List of players and their respective teams.

Embed settings like embedColor and imageEmbed can also be modified to suit your server's theme.





### License

This bot is open-source. Feel free to use, modify, and contribute to the project!

