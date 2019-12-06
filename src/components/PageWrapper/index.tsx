import React, { FC } from "react";
import { Container } from "react-awesome-styled-grid";
import styled from "styled-components";
import { MODE_ANIMATE_CLASS } from "../../utils/theme";

const Decorator = styled.main`
  background: ${({ theme }) => theme.color("background", 90)};
  box-shadow: ${({ theme }) => theme.decorations.shadows.default};
  margin: 0 auto 4rem;
  padding: 3rem 2rem;
`;

const PageWrapper: FC = ({ children }) => (
  <Container>
    <Decorator className={MODE_ANIMATE_CLASS}>{children}</Decorator>
  </Container>
);

export default PageWrapper;
