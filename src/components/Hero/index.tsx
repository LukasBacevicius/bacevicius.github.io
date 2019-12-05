import React, { FC } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { Canon, Paragon } from '../../components/Typography';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding: 4rem 0 2rem;
`;

const StyledCanon = styled(Canon)`
    margin-bottom: 2rem;
`;

/* 
    In a perfect world, this would be a standalone component
*/
const AnimatedEmoji = styled.span`
        position: relative;
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;

        @keyframes wave-animation {
        0% { transform: rotate(  0.0deg) }
        10% { transform: rotate(-10.0deg) }
        20% { transform: rotate( 12.0deg) }
        30% { transform: rotate(-10.0deg) }
        40% { transform: rotate(  9.0deg) }
        50% { transform: rotate(  0.0deg) }
        100% { transform: rotate(  0.0deg) }
    }
`

export const Hero: FC<{ headline: any, paragraphs: Array<string>, emoji?: { label: string, value: string } }> = ({ headline, paragraphs, emoji }) => (
    <StyledContainer>
        <Row>
            <Col xs={4}>
                <StyledCanon>
                    {headline} 
                    &nbsp;
                    {emoji && (
                        <AnimatedEmoji role="img" aria-label={emoji.label}>
                            {emoji.value}
                        </AnimatedEmoji>
                    )}
                </StyledCanon>
            </Col>
        </Row>
        {
            paragraphs.map(paragraph => (
                <Row>
                    <Col xs={3}>
                        <Paragon>
                            {paragraph}
                        </Paragon>
                    </Col>
                </Row>
            ))
        }
    </StyledContainer>
) 