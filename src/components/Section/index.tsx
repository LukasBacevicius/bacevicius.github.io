import React, { FC } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { Trafalgar } from '../Typography';

const StyledSection = styled(Container)`
`;

const Title = styled(Row)`
    margin-bottom: 2rem;
`;

const Content = styled.dl`
`;

export const Section: FC<{ title: string }> = ({ title, children }) => (
    <StyledSection>
        <Title>
            <Col xs={4}>
                <Trafalgar fontWeight={800}>
                    {title}
                </Trafalgar>
            </Col>
        </Title>
        <Content>
            {children}
        </Content>
    </StyledSection>
);