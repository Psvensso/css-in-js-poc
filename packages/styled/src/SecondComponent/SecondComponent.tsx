import React from "react";
import styled from "styled-components";
import x from "./SecondComponent.css";

const Wrapper = styled.div`
  ${x.toString()}
  color: darkblue;
`;

export const SecondComponent = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <p>Hello, SecondComponent, {name}! I have different styled.div style's</p>
    </Wrapper>
  );
};
