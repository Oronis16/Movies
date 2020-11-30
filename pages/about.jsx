import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pg } from "../src/pg";

const Title = styled.div`
  flex-direction: column;
  color: salmon;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;
  min-width: 300px;
  width: 300px;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  margin: 32px auto;
`;

const Plot = styled.span`
  margin-top: 32px;
`;

const Ratings = styled.ul`
  padding: 5px;
  font-size: 15px;
  margin: 0px 10px;
`;

const Cast = styled.div`
  margin: 32px 0px;
  padding: 7px 0px;
`;

const Rat = styled.h1`
  margin-top: 10px;
  font-weight: bold;
  color: salmon;
`;

const PgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.img`
  margin: 0 10px;
  cursor: pointer;
`;

export default function Home({ colorChange }) {
  const [movie, setMovie] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/movie?id=${router.query.movieID}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie));
  }, []);

  const iconHandler = (movie) => {
    console.log("clicked");
    console.log(movie);
    window.open(`https://www.imdb.com/title/${movie.imdbID}`);
  };

  return (
    <div>
      {movie && (
        <Box>
          <ContainerLeft>
            <img src={movie.Poster} alt="Placeholder image" />
            <Rat>Ratings:</Rat>
            <Ratings>
              {movie.Ratings.map((rating) => {
                return (
                  <ul>
                    {rating.Source}: {rating.Value}
                  </ul>
                );
              })}
            </Ratings>
          </ContainerLeft>
          <ContainerRight>
            <Title>
              <h1 className="is-size-2 has-text-weight-semibold">
                {movie.Title}
              </h1>
              <PgBox>
                <h4>{movie.Year}</h4>
                <Pg pg={movie.Rated} />
                <Icon
                  src="imdb.png"
                  width="40"
                  height="20"
                  onClick={(e) => iconHandler(movie)}
                />
              </PgBox>
            </Title>
            <Plot>{movie.Plot}</Plot>
            <Cast>
              <p>Director: {movie.Director}</p>
              <p>Writers: {movie.Writer}</p>
              <p>Actors: {movie.Actors}</p>
            </Cast>
          </ContainerRight>
        </Box>
      )}
    </div>
  );
}
