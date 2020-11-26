// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
const axios = require("axios");

const handler = nc();

handler.post((req, response) => {
  const url = `${process.env.OMDB_API_BASE_URL}?s=${req.body}&apikey=${process.env.OMDB_API_KEY}`;
 
  axios
    .get(url)
    .then((res) => {
      const movies = res.data.Search;
      response.json(movies || []);
    })
    .catch((error) => {
      console.error("Error: ", error);
      response.json([]);
    });
});

export default handler;
