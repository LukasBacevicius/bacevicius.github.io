import React, { FC } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import PageWrapper from '../../components/PageWrapper';
import { Hero } from '../../components/Hero';
import { Canon, Trafalgar, Paragon } from '../../components/Typography';

const StyledCanon = styled(Canon)`
    margin-bottom: 2rem;

    span {
        position: relative;
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes wave-animation {
        0% { transform: rotate(  0.0deg) }
        10% { transform: rotate(-10.0deg) }
        20% { transform: rotate( 12.0deg) }
        30% { transform: rotate(-10.0deg) }
        40% { transform: rotate(  9.0deg) }
        50% { transform: rotate(  0.0deg) }
        100% { transform: rotate(  0.0deg) }
    }
`;

const Main: FC = () => {
    return (
        <>
            <Hero>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <StyledCanon>
                                Hello! Hej! Labas! <span role="img" aria-label="Hello">👋</span>
                            </StyledCanon>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <Paragon>
                                I'm Lukas — a Copenhagen based frontend engineer, currently breaking builds at Valtech.
                            </Paragon>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <PageWrapper>
{/*                 <Row>
                    <Col xs={4}>
                        <Trafalgar>
                            Experience
                        </Trafalgar>
                    </Col>  
                </Row> */}
            </PageWrapper>
        </>
    );
};

export default Main;