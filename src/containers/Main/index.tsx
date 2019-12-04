import React, { FC } from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Hero } from '../../components/Hero';
import { Canon } from '../../components/Typography';

const StyledCanon = styled(Canon)`
    padding: 0 2rem;
`;

const Main: FC = () => {
    return (
        <>
            <Hero>
                <StyledCanon>
                    Hello! Hej! Labas! <span role="img" aria-label="Hello">👋</span>
                </StyledCanon>
            </Hero>
            <PageWrapper>

            </PageWrapper>
        </>
    );
};

export default Main;