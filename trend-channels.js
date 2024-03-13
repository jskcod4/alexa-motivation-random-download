const axios = require("axios");

async function getYouTubeChannelsByTheme(theme) {
  // Replace 'theme' with the actual theme you want to search for
  const searchQuery = theme;

  // Use the YouTube Data API to search for channels with the given theme
  // You'll need to set up an API key and make an HTTP request to the API endpoint
  // Here's an example using the 'axios' library:
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        q: searchQuery,
        part: "snippet",
        type: "channel",
        key: process.env.API_KEY,
        maxResults: 3,
        relevanceLanguage: "en",
        order: "viewCount",
      },
    }
  );

  // Parse the response and extract the channel information
  const channels = response.data.items.map((item) => ({
    channelId: item.id.channelId,
    channelTitle: item.snippet.channelTitle,
  }));

  // Return the list of channels
  return channels;
}

module.exports = getYouTubeChannelsByTheme;
