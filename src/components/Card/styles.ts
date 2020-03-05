import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { DoublePica, GreatPrimer, BodyCopy } from "../Typography";

export const Wrapper = styled.dt`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  & + dt {
    margin-top: 2rem;
  }
`;

export const Title = styled(DoublePica)`
  margin-bottom: 1rem;
`;

export const Period = styled(GreatPrimer)`
  margin-bottom: 0rem;
  flex: 0 0 100%;

  color: ${({ theme }) => theme.color("typography")};
  font-style: italic;

  span {
    padding: 0 0.5rem;
  }
`;

export const LogoLink = styled.a`
  width: 5.5rem;

  ${breakpoint("sm")`
  width: 6.25rem;  
`}

  svg {
    fill: ${({ theme }) => theme.color("typography")};
    transition: ${({ theme }) => theme.transitions.default(["opacity"], ".2s")};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ColStart = styled.div`
  flex: 0 0 70%;
  flex-wrap: wrap;
`;

export const ColEnd = styled.div`
  justify-content: flex-end;
  flex: 0 0 30%;
  display: flex;
`;

export const Description = styled(BodyCopy)`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:before {
    content: '✅';
    padding-right: 1rem;
  }
`;

export const Subtitle = styled(BodyCopy)`
  margin-bottom: 1.5rem;
`;
