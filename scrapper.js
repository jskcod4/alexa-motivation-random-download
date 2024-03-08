async function getPopularShorts(channelId) {
    try {
        // Use the YouTube Data API to fetch the channel ID based on the channel name
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?id=${channelId}&key=AIzaSyA_ymNndefPfaZAih2da9t6b2ooCB71L5M`);
        const data = await response.json();
        const channelId2 = data.items[0].id;

        // Use the YouTube Data API to fetch the most popular short videos from the channel
        const shortsResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId2}&type=video&videoDuration=short&order=viewCount&maxResults=3&key=AIzaSyA_ymNndefPfaZAih2da9t6b2ooCB71L5M`);
        const shortsData = await shortsResponse.json();


        // Extract the video URLs from the API response
        const videoUrls = shortsData.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`);

        return videoUrls;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

module.exports = getPopularShorts;