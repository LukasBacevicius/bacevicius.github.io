import React, { FC } from "react";
import { Ticker } from "../Ticker";
import { Canon } from "../Typography";
import styled from "styled-components";

const Text = styled(Canon)`
  padding: 3rem 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color("typography")};
`;

export const ReachOut: FC<{ title: string; link: string }> = ({
  title,
  link
}) => (
  <Ticker>
    <Link href={link}>
      <Text fontSize={"2.5rem"}>{title}</Text>
    </Link>
  </Ticker>
);
