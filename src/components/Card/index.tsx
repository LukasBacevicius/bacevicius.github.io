import React, { FC } from "react";
import styled from "styled-components";
import { DoublePica, GreatPrimer, BodyCopy } from "../Typography";

const Wrapper = styled.div`
  margin: 0 0 2.5rem;
`;

const Position = styled(DoublePica)`
  margin-bottom: 0.85rem;
`;

const Period = styled(GreatPrimer)`
  margin-bottom: 0rem;

  span {
    padding: 0 0.5rem;
  }
`;

export type CardProps = {
  period: {
    start?: string;
    end?: string;
  };
  position?: string;
  description?: string;
  company?: string;
};

export const Card: FC<CardProps> = ({
  period,
  position,
  description,
  company
}) => (
  <Wrapper>
    <Period fontSyle={"italic"}>
      <small>
        {period.start}
        <span>—</span>
        {period.end}
      </small>
    </Period>
    <Position fontWeight={600}>{position}</Position>
    <BodyCopy>{description}</BodyCopy>
  </Wrapper>
);
