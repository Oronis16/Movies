import styled from "styled-components";

const PgRate = styled.div`
  margin-left: 10px;
  color: black;
  padding: 0 4px;
`;

export function Pg({ pg }) {
  let color;
  if (pg === "PG") {
    color = "has-background-primary";
  } else {
    color = "has-background-danger";
  }

  return <PgRate className={color}>{pg}</PgRate>;
}
