require('dotenv').config()

const downloader = require('./downloader');
const scrapper = require('./scrapper');
const trendChannels = require('./trend-channels');



async function handle () {
    const channels = await trendChannels('Motivation life');
    const randomChannel = getRandomElement(channels);
    const popularShorts = await scrapper(randomChannel.channelId);
    const randomShort = getRandomElement(popularShorts);
    console.log(randomShort);
    downloader(randomShort);
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

handle();