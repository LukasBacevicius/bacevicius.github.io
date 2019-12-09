import React, { FC, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { ReachOut } from "../../components/ReachOut";

import {
  HeroContext,
  TickerContext,
  ExperienceContext
} from "../../contextProviders";

const Main: FC = () => {
  const { headline, emoji, paragraphs } = useContext(HeroContext);
  const { title, link } = useContext(TickerContext);
  const experience = useContext(ExperienceContext);

  return (
    <>
      <Hero headline={headline} emoji={emoji} paragraphs={paragraphs} />
      <ReachOut title={title} link={link} />
      <PageWrapper>
        <Section title={experience.title}>
          {experience.items.map(
            ({ period, position, description, company }) => (
              <Card
                period={period}
                position={position}
                description={description}
                company={company}
              />
            )
          )}
        </Section>
      </PageWrapper>
    </>
  );
};

export default Main;
