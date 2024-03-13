require("dotenv").config();

const downloader = require("./downloader");
const scrapper = require("./scrapper");
const getListChannels = require("./channel-list");

async function handle() {
  const channels = getListChannels();
  const randomChannel = getRandomElement(channels);
  const popularShorts = await scrapper(randomChannel.channelId);
  const randomShort = getRandomElement(popularShorts);
  downloader(randomShort);
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

handle();
