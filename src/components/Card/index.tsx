import React, { FC } from "react";
import { BodyCopy } from "../Typography";
import { Wrapper, ColStart, ColEnd, Period, Title, LogoLink } from "./styles";

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
}) => (
  <Wrapper>
    <ColStart>
      <Period fontSyle={"italic"}>
        <small>
          {period.start}
          <span>—</span>
          {period.end}
        </small>
      </Period>
      <Title fontWeight={800}>{title}</Title>
    </ColStart>
    <ColEnd>
      <LogoLink href={institution.url} aria-label={institution.name}>
        <institution.logo aria-hidden />
      </LogoLink>
    </ColEnd>
    <BodyCopy>{description}</BodyCopy>
  </Wrapper>
);
