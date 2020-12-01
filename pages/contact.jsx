import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { add, getAll } from "../src/localstorage";

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
  margin: 15px;
  padding: 20px;
  font-size: larger;
  font-family: cursive;
  box-shadow: 10px 5px 5px lightgray;
`;

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 600px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  margin: 15px;
  font-size: larger;
  font-family: cursive;
  color: lightcoral;
`;

const MsgBox = styled.span`
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-bottom: 40px;
  width: 600px;
  border: 1px salmon solid;
  padding: 10px;
`;

const UserName = styled.div`
  display: flex;
  font-family: cursive;
  color: lightcoral;
`;

const CurrDate = styled.p`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: flex-end;
`;

export default function Home() {
  const [session, loading] = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(getAll());

  useEffect(() => {
    add(messages);
  }, [messages]);

  const sendMessage = () => {
    const date = new Date();
    setMessages((prevState) => {
      return [...prevState, { message, date: date.toLocaleString() }];
    });
    setMessage("");
  };

  console.log(messages);

  return (
    <Container>
      <SignIn>
        {!session && (
          <>
            Sign in to leave a message to me! <br />
            <Button onClick={() => signIn("github")}>Sign in</Button>
          </>
        )}
        {session && (
          <>
            Welcome {session.user.name} <br />
            <Button onClick={signOut}>Sign out</Button>
          </>
        )}
      </SignIn>
      <Title>Contact Me</Title>
      <Card>
        <h3>My name is Krisztina Andreyka</h3>
        <p>I am a junior fullstack developper</p>
        <p>email: andreyka.kriszti@gmail.com</p>
      </Card>
      {session && (
        <TextArea>
          <Text>Leave a message to me!</Text>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "100%" }}
            rows="5"
            placeholder="Text something..."
          ></textarea>
          <Button onClick={sendMessage}>Send</Button>
          <div>
            {messages.length > 0 && (
              <div>
                {messages.map((msg, idx) => {
                  return (
                    <MsgBox key={idx}>
                      <UserName>
                        <h2>{session.user.name}</h2>
                        <CurrDate>{msg.date}</CurrDate>
                      </UserName>
                      <p>{msg.message}</p>
                    </MsgBox>
                  );
                })}
              </div>
            )}
          </div>
        </TextArea>
      )}
    </Container>
  );
}
