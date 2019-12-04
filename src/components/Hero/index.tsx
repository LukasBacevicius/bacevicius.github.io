import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10rem 0 3rem;
`;

export const Hero: FC = ({ children }) => (
    <Container>
            {children}
    </Container>
) 