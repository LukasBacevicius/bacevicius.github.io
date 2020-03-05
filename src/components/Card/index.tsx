import React, { FC } from "react";
import {
  Wrapper,
  ColStart,
  ColEnd,
  Period,
  Title,
  LogoLink,
  Description,
  Subtitle
} from "./styles";

export type CardProps = {
  period: {
    start?: string;
    end?: string;
  };
  title?: string;
  description?: Array<string>;
  institution: {
    name: string;
    logo: FC;
    url: string;
  };
  subtitle: string;
};

export const Card: FC<CardProps> = ({
  period,
  title,
  description = [],
  institution,
  subtitle
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
    <Subtitle fontWeight={"bold"}>{subtitle}</Subtitle>
    {description.map((item, index) => (
      <Description key={index}>{item}</Description>
    ))}
  </Wrapper>
);
