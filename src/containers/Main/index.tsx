import React, { FC } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { ReachOut } from '../../components/ReachOut';

const Main: FC = () => {
return (
    <>
        <Hero
            headline={'Hello! Hej! Labas!'}
            emoji={{
                label: 'Hello',
                value: '👋'
            }}
            paragraphs={[
                `I'm Lukas — a Copenhagen based frontend engineer, currently changing stuff and seeing what happens at Valtech.`
            ]}
        />
        <ReachOut value="Test Test! 📢" />
        <PageWrapper>
            <Section title={'Experience'}>
                <dt>
                    <Card />
                </dt>
            </Section>
        </PageWrapper>
    </>
);
};

export default Main;


/* const Main: FC = () => {
    return (
        <>
            <Hero
                headline={'Lorem ipsum dolor sit amet'}
                emoji={{
                    label: 'Hello',
                    value: '👋'
                }}
                paragraphs={[
                    `Consequat ac felis donec et. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Neque egestas congue quisque egestas diam.`
                ]}
            />
            <ReachOut value="ipsum dolor! 📢" />
            <PageWrapper>
                <Section title={'Experience'}>
                    <dt>
                        <Card />
                    </dt>
                </Section>
            </PageWrapper>
        </>
    );
};

export default Main;
 */