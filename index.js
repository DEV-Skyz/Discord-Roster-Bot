const { Client, GatewayIntentBits, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// Configuration
const CHANNEL_ID = 'YOUR_CHANNEL_ID'; // Channel where the panel will be posted

// Configuring the static text for each option
const staffText = `

:star: Owner
@test 

:performing_arts: Server management
@test 

:crown: Team
@test 

:zap: Administration
@test

:trident: Head-Manager
@test  

:diamond_shape_with_a_dot_inside: Manager
@test 

:shield: Head-Moderator
@test

:beginner: Moderator
@test 

:pencil: Tryouter`;

const boosterText = `

⋅ Current Boosters
⋅ @Test`;

const developerText = `

⋅ Developer Team
@timm.5`;

// Player text with list of teams
const spielerText = `

⋅ Main Team
@test 

⋅ Academy
@test 

⋅ Talents
@test`;

// Common color for all embeds
const embedColor = '#2b2d31';

// Image embed that appears on top of each subsequent embed
const imageEmbed = new EmbedBuilder()
  .setImage('YOUR_DISCORD_IMAGE_LINK')
  .setColor(embedColor);

// URL für die "Linien"-Grafik, die unter jedem Text-Embed angezeigt wird
const lineImageUrl = 'YOUR_DISCORD_IMAGE_LINK';

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Get the channel based on the ID provided
  const channel = await client.channels.fetch(CHANNEL_ID);
  if (!channel) {
    console.error('Channel not found!');
    return;
  }

  // Create an embed for the panel
  const panelEmbed = new EmbedBuilder()
    .setTitle('📜 TEAM ROSTER')
    .setDescription('> Select a category to learn more about the members!')
    .setColor(embedColor)
    .setImage(lineImageUrl);

  // Create the Select Menu with the four options
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId('roster_select')
    .setPlaceholder('Choose an option')
    .addOptions([
      {
        label: 'Staff Team',
        description: 'Displays the Staff Team',
        value: 'staff',
      },
      {
        label: 'Booster',
        description: 'Displays all server boosters',
        value: 'booster',
      },
      {
        label: 'Entwickler',
        description: 'Displays the development team',
        value: 'developer',
      },
      {
        label: 'Spieler',
        description: 'Displays the players',
        value: 'spieler',
      },
    ]);

  const row = new ActionRowBuilder().addComponents(selectMenu);

  // Send the panel (Image Embed + Panel Embed + Dropdown Menu) to the specified channel
  await channel.send({ embeds: [imageEmbed, panelEmbed], components: [row] });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isStringSelectMenu()) return;

  if (interaction.customId === 'roster_select') {
    const selected = interaction.values[0];

    if (selected === 'staff') {
      // Embed für Staff Team
      const staffEmbed = new EmbedBuilder()
        .setTitle('👥 STAFF TEAM')
        .setDescription('> Here you can see our current staff team:')
        .setColor(embedColor)
        .setImage(lineImageUrl)
        .setDescription(staffText);

      await interaction.reply({ embeds: [imageEmbed, staffEmbed], ephemeral: true });
    }
    else if (selected === 'booster') {
      // Embed für Booster
      const boosterEmbed = new EmbedBuilder()
        .setTitle('🚀 BOOSTER')
        .setDescription('> Here you can see our active boosters:')
        .setColor(embedColor)
        .setImage(lineImageUrl)
        .setDescription(boosterText);

      await interaction.reply({ embeds: [imageEmbed, boosterEmbed], ephemeral: true });
    }
    else if (selected === 'developer') {
      // Embed für Entwickler Team
      const developerEmbed = new EmbedBuilder()
        .setTitle('💻 DEVELOPER')
        .setDescription('> Information about the bot developers:')
        .setColor(embedColor)
        .setImage(lineImageUrl)
        .setDescription(developerText);

      await interaction.reply({ embeds: [imageEmbed, developerEmbed], ephemeral: true });
    }
    else if (selected === 'spieler') {
      // Embed für Spieler
      const spielerEmbed = new EmbedBuilder()
        .setTitle(':video_game: Player')
        .setDescription('> Here you can see our active players:')
        .setColor(embedColor)
        .setImage(lineImageUrl)
        .setDescription(spielerText);

      await interaction.reply({ embeds: [imageEmbed, spielerEmbed], ephemeral: true });
    }
  }
});

// Start the bot with your token
client.login('YOUR_DISCORD_TOKEN');
