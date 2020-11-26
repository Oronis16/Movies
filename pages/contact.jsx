import styled from "styled-components";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightcoral;
  border: 2px solid salmon;
  margin: 15px 200px;
  font-size: larger;
  font-family: cursive;
  box-shadow: 10px 5px 5px lightgray;
`;

export default function Home() {
  return (
    <div>
      <Title>Contact Me</Title>
      <Card>
        <h3>My name is Krisztina Andreyka</h3>
        <p>I am a junior fullstack developper</p>
        <p>email: andreyka.kriszti@gmail.com</p>
      </Card>
    </div>
  );
}
