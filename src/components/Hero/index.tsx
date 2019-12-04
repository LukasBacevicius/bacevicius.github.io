import React, { FC } from 'react';
import styled from 'styled-components';
import { Ticker } from '../Ticker';

const Container = styled.div`
    padding: 10rem 0 5rem;
`;

export const Hero: FC = ({ children }) => (
    <Container>
        <Ticker>
            {children}
        </Ticker>
    </Container>
) 