import React from 'react';
import styled from 'styled-components';

const ID = 'LightsOff';

const Checkbox = styled.input`
    display: none;
`;

const Label = styled.label`
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: ${({ theme }) => theme.color('background', 90)};
    box-shadow: ${({ theme }) => theme.decorations.shadows.default};
    border-radius: .2rem;
    font-size: 1rem;

    ${({ theme }) => theme.helpers.setDimensions('2.2rem')}
`;

export const LightsOff = ({ onClick, checked }: { onClick?: () => void; checked?: boolean; }) => (
    <>
        <Checkbox
            type="checkbox"
            defaultChecked={checked}
            id={ID}
        />
        <Label onClick={onClick} htmlFor={ID} title="Activate light mode">
            <span role="img">
                {!checked ? '🌙' : '☀️'}
            </span>
        </Label>
    </>
);