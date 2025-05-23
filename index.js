require("dotenv").config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImage(query) {
  let response = await fetch(`${endpoint}&q=${query}`);
  let dataJson = await response.json();
  let randomResult = Math.floor(Math.random() * dataJson.data.length);
  let actualUrl = dataJson.data[randomResult].url;
  console.log(actualUrl);
  console.log(`${endpoint}&q=${query}`);
}

getImage("monkey");
