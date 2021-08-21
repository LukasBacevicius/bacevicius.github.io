import React, { FC, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import {
  HeroContext,
  ExperienceContext,
  EducationContext
} from "../../contextProviders";

const Main: FC = () => {
  const { headline, emoji, paragraphs } = useContext(HeroContext);

  return (
    <>
      <Hero headline={headline} emoji={emoji} paragraphs={paragraphs} />
    </>
  );
};

export default Main;
