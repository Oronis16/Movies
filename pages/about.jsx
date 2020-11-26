import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: salmon;
  font-weight: bold;
  font-size: 2cm;
  margin: 40px 0px;
`;

export default function Home() {
  const [movie, setMovie] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/movie?id=${router.query.movieID}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie));
  }, []);

  console.log(router.query);
  return (
    <div>
      <Title>About</Title>
      <div>{JSON.stringify(movie)}</div>
    </div>
  );
}
