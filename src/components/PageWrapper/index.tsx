import React, { FC } from 'react';
import { Container } from 'react-awesome-styled-grid';
import styled from 'styled-components';

const Decorator = styled.main`
  background: ${({ theme }) => theme.color('background', 90)};
  margin: 4rem auto;
  padding: 5rem 2rem;
  box-shadow: 0 30px 90px 0 rgba(31,36,48,.1);
`;

const PageWrapper: FC = ({ children }) => (
    <Container>
        <Decorator>
            {children}
        </Decorator>
    </Container>
);

export default PageWrapper;