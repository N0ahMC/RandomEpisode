const axios = require("axios");

async function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (await Math.floor(Math.random() * (max - min + 1))) + min;
}
exports.getRandomEpisode = async function (show) {
  try {
    const showReq = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: "f0d9a72d",
        t: show,
      },
    });
    if (showReq.data.Response === "False" || showReq.data.Type !== "series") {
      return JSON.stringify(
        { message: "We were unable to find your show.", Response: "False" },
        null,
        4
      );
    }
    const seasonReq = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: "f0d9a72d",
        t: show,
        season: await getRandomInt(1, showReq.data.totalSeasons),
      },
    });
    const episodeReq = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: "f0d9a72d",
        t: show,
        season: seasonReq.data.Season,
        episode: await seasonReq.data.Episodes[
          await getRandomInt(0, await seasonReq.data.Episodes.length)
        ].Episode,
      },
    });
    return await episodeReq.data;
  } catch (error) {
    return JSON.stringify(
      { message: "We were unable to find your show.", Response: "False" },
      null,
      4
    );
  }
};
