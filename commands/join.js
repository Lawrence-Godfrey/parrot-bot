import { SlashCommandBuilder } from 'discord.js';
import { joinVoiceChannel, createAudioResource, createAudioPlayer } from "@discordjs/voice";
import fs from "fs";


const audioPath = './audio_clips/never_liked_that_guy/morgan_freeman.wav';


const command = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Request the bot to join your voice channel'),
    async execute(interaction) {
        if (interaction.member.voice.channel) {
            const channel = interaction.member.voice.channel;

            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });

            await interaction.reply('Joined the voice channel!');

            const audioPlayer = createAudioPlayer();
            connection.subscribe(audioPlayer);

            interaction.client.on('voiceStateUpdate', async (oldState, newState) => {
                if (newState.channelId === channel.id) {
                    if (oldState.channelId !== newState.channelId) {
                        // User joined the channel
                        // audioPlayer.play(audioResource);
                    }
                } else if (oldState.channelId === channel.id) {
                    // User left the channel
                    const audioResource = createAudioResource(fs.createReadStream(audioPath));
                    audioPlayer.play(audioResource);
                }
            });
        } else {
            await interaction.reply('You need to join a voice channel first!');
        }
    },
}

export default command;
