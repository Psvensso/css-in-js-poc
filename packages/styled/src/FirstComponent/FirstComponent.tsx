import React from "react";
import styled from "styled-components";
import x from "./FirstComponent.css";

const Wrapper = styled.div`
  ${x.toString()}
  color: hotpink;
`;

export const FirstComponent = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <p>Hello, FirstComponent, {name}!</p>
    </Wrapper>
  );
};
