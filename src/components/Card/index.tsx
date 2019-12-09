import React, { FC, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid";
import breakpoint from "styled-components-breakpoint";
import { DoublePica, GreatPrimer, BodyCopy } from "../Typography";

const Wrapper = styled.div`
  margin: 0 0 1.45rem;
  padding-bottom: 1.45rem;
`;
const Title = styled(DoublePica)`
  margin-bottom: 1rem;
`;

const Period = styled(GreatPrimer)`
  margin-bottom: 0rem;
  flex: 0 0 100%;

  color: ${({ theme }) => theme.color("typography")};
  font-style: italic;

  span {
    padding: 0 0.5rem;
  }
`;

const LogoLink = styled.a`
  width: 5.5rem;

  ${breakpoint("sm")`
    width: 6.25rem;  
  `}

  svg {
    fill: ${({ theme }) => theme.color("typography")};
  }
`;

const ColStart = styled(Col)`
  flex-wrap: wrap;
`;

export type CardProps = {
  period: {
    start?: string;
    end?: string;
  };
  title?: string;
  description?: string;
  institution: {
    name: string;
    logo: FC;
    url: string;
  };
};

export const Card: FC<CardProps> = ({
  period,
  title,
  description,
  institution
}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Wrapper>
      <Row align={"center"}>
        <ColStart xs={3}>
          <Period fontSyle={"italic"}>
            <small>
              {period.start}
              <span>—</span>
              {period.end}
            </small>
          </Period>
          <Title fontWeight={800}>{title}</Title>
        </ColStart>
        <Col xs={1} align={"center"} justify={"flex-end"}>
          <LogoLink href={institution.url} aria-label={institution.name}>
            <institution.logo aria-hidden />
          </LogoLink>
        </Col>
      </Row>
      <BodyCopy collapsed={collapsed}>{description}</BodyCopy>
    </Wrapper>
  );
};
