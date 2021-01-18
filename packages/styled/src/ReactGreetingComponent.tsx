import React from "react";
import styled from "styled-components";
import x from "./ReactGreetingComponent.css";

const Wrapper = styled.div`
  ${x.toString()}
  color: hotpink;
`;

export const Greeting = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <p>Hello, styled component, {name}!</p>
    </Wrapper>
  );
};
