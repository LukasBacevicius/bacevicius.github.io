import React from 'react';
import styled from 'styled-components';

const ID = 'LightsOff';

const Checkbox = styled.input`
    display: none;

    &:checked + [for="${ID}"] {
    }
`;

const Label = styled.label`
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    ${({ theme }) => theme.setDimensions('3rem')}
`;

export const LightsOff = ({ onClick, checked }: { onClick?: () => void; checked?: boolean; }) => (
    <>
        <Checkbox
            type="checkbox"
            defaultChecked={checked}
            id={ID}
        />
        <Label onClick={onClick} htmlFor={ID}>
            <span role="img">
                {!checked ? '🌙' : '☀️'}
            </span>
        </Label>
    </>
);