const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);

function downloadYoutubeVideo(url) {
    // Download the video using ytdl-core
    const videoStream = ytdl(url, { quality: 'highestaudio' });

    // Convert the video stream to MP3 using ffmpeg
    ffmpeg(videoStream)
        .audioBitrate(128)
        .saveToFile('output.mp3')
        .on('end', () => {
            console.log('Video downloaded and converted to MP3 successfully!');
        })
        .on('error', (err) => {
            console.error('Error downloading or converting the video:', err);
        });
}

// Example usage
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
downloadYoutubeVideo(youtubeUrl);