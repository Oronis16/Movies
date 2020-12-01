import "../styles/globals.scss";
import styled from "styled-components";
import Link from "next/link";
import "../styles/style.scss";
import { Provider } from "next-auth/client";

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: pink;
  padding: 10px;
`;

const LinkBar = styled.a`
  display: flex;
  flex-direction: row;
  margin: 6px;
  color: darkred;
  cursor: pointer;
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider session={pageProps.session}>
        <Menu>
          <Link href="/">
            <LinkBar>Movies</LinkBar>
          </Link>
          <Link href="/contact">
            <LinkBar>Contact</LinkBar>
          </Link>
        </Menu>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
