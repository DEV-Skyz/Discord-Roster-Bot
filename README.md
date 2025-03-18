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

```bash
git clone https://github.com/your-username/discord-roster-bot.git
cd discord-roster-bot

2. Install dependencies.
bash
Kopieren
Bearbeiten
npm install discord.js
