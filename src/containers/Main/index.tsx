import React, { FC, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { ReachOut } from "../../components/ReachOut";

import {
  HeroContext,
  TickerContext,
  ExperienceContext,
  EducationContext
} from "../../contextProviders";

const Main: FC = () => {
  const { headline, emoji, paragraphs } = useContext(HeroContext);
  const { title, link } = useContext(TickerContext);
  const experience = useContext(ExperienceContext);
  const education = useContext(EducationContext);

  return (
    <>
      <Hero headline={headline} emoji={emoji} paragraphs={paragraphs} />
      <ReachOut title={title} link={link} />
      <PageWrapper>
        {[experience, education].map((section, indexSection) => (
          <Section title={section.title} key={indexSection}>
            {section.items.map(
              ({ period, title, description, institution }, indexCard) => (
                <Card
                  key={indexCard}
                  period={period}
                  title={title}
                  description={description}
                  institution={institution}
                />
              )
            )}
          </Section>
        ))}
      </PageWrapper>
    </>
  );
};

export default Main;
