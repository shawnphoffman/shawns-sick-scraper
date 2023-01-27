import GetTwitchAccessToken from "src/utils/getTwitchAccessToken";
import fetchWithCache from "src/utils/fetchWithCache";

async function GetTwitchUser(username, token) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Client-ID", clientId);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const json = await fetchWithCache(
    `https://api.twitch.tv/helix/users?login=${username}`,
    requestOptions
  );

  return json;
}

export default async function handler(req, res) {
  // Get Twitch Access Token
  const token = await GetTwitchAccessToken();

  // Get Twitch Name
  const { username } = req.query;

  // Get Twitch User
  const user = await GetTwitchUser(username, token);

  // Set Cache Headers
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=599"
  );

  res.json(user);
}
