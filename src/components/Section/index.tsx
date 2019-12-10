import React, { FC } from "react";
import { Container, Row, Col } from "react-awesome-styled-grid";
import styled from "styled-components";
import { Trafalgar } from "../Typography";

const StyledSection = styled(Container)`
  & + div {
    margin-top: 5rem;
  }
`;

const Title = styled(Row)`
  margin-bottom: 2rem;

  span {
    font-weight: normal;
  }
`;

const Content = styled.dl``;

export const Section: FC<{ title: { value: string; icon: string } }> = ({
  title,
  children
}) => (
  <StyledSection>
    <Title>
      <Col xs={4}>
        <Trafalgar tag={"h2"}>
          {title.value} <span role="img">{title.icon}</span>
        </Trafalgar>
      </Col>
    </Title>
    <Content>{children}</Content>
  </StyledSection>
);
