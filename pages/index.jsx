import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: salmon;
  font-weight: bold;
  font-size: 2cm;
`;

const Search = styled.div`
  display: flex;
  margin: 15px;
`;

const MovieTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-family: cursive;
  font-weight: bold;
  font-size: larger;
  color: salmon;
`;

const Card = styled.div`
  width: 300px;
  margin: 40px;
  border: 6px solid salmon;
  box-shadow: 10px 5px 5px lightgray;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const Link = styled.a`
  display: flex;
  color: darkred;
  cursor: pointer;
`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/movies", {
      method: "POST",
      body: search,
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, [search]);

  const handleChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  const handleClick = (movie) => {
    const movieID = movie.imdbID;
    router.push({
      pathname: "/about",
      query: { movieID },
    });
  };

  return (
    <div>
      <Search>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </Search>
      <Title>Movies</Title>
      {!movies.length && <MovieTitle>Search a movie for tonight!</MovieTitle>}
      <CardContainer>
        {movies.map((movie) => {
          return (
            <Card onClick={(e) => handleClick(movie)}>
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={movie.Poster} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left"></div>
                    <div className="media-content">
                      <p className="title is-4">{movie.Title}</p>
                      <p className="subtitle is-6">{movie.Year}</p>
                    </div>
                  </div>

                  <div className="content">
                    Check on Imdb:
                    <Link
                      href={`https://www.imdb.com/title/${movie.imdbID}`}
                      target="_blank"
                    >
                      Click here!
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
}
