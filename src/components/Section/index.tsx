import React, { FC } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { Canon } from '../Typography';

const StyledSection = styled(Container)`
    margin-bottom: 4rem;
`;

const Title = styled(Row)`
    margin-bottom: 3.5rem;
`;

const Content = styled.dl`
`;

export const Section: FC<{ title: string }> = ({ title, children }) => (
    <StyledSection>
        <Title>
            <Col xs={4}>
                <Canon tag={'h2'} fontSize={'2.85rem'}>
                    {title}
                </Canon>
            </Col>
        </Title>
        <Content>
            {children}
        </Content>
    </StyledSection>
);