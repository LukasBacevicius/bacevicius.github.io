import React from "react";
import styled from "styled-components";
//@ts-ignore
import breakpoint from "styled-components-breakpoint";

const ID = "LightsOff";

const Checkbox = styled.input`
    display: none;

    &:checked + [for="${ID}"] {
        &:before {
            transform: translateX(100%);
        }
    }
`;

const Label = styled.label`
    height: 3rem;
    width: 8rem;
    
    ${breakpoint("sm")`
        height: 2.2rem;
        width: 6.5rem;
    `}

    background: ${({ theme }) => theme.color("background", 90)};
    position: relative;
    border-radius: 6.25rem;
    cursor: pointer;
    border: .2rem solid ${({ theme }) => theme.color("background", 90)};
    box-shadow: ${({ theme }) => theme.decorations.shadows.default};
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    
    &:before {
        content: '';
        height: 100%;
        border-radius: inherit;
        width: 50%;
        position: absolute;
        background: ${({ theme }) => theme.color("background")};
        transition: ${({ theme }) => theme.transitions.default(["transform"])};
        z-index: 0;
    }

    span {
        text-align: center;
        width: 50%;
        z-index: 1;
        font-size: 1.25rem;
    }
`;

export const LightsOff = ({
  onClick,
  checked
}: {
  onClick?: () => void;
  checked?: boolean;
}) => (
  <>
    <Checkbox type="checkbox" defaultChecked={checked} id={ID} />
    <Label onClick={onClick} htmlFor={ID} title="Activate light mode">
      <span role="img" arial-label="Light mode">
        ☀️
      </span>
      <span role="img" arial-label="Dark mode">
        🌙
      </span>
    </Label>
  </>
);
