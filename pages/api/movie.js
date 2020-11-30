// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
const axios = require("axios");

const handler = nc();

handler.get((req, response) => {
  const url = `${process.env.OMDB_API_BASE_URL}?i=${req.query.id}&plot=full&apikey=${process.env.OMDB_API_KEY}`;
  console.log({ url });
  axios
    .get(url)
    .then((res) => {
      const movie = res.data;
      console.log(movie);
      response.json(movie || {});
    })
    .catch((error) => {
      console.error("Error: ", error);
      response.json({});
    });
});

export default handler;
