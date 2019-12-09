import { createContext } from 'react';

export const HeroContext = createContext({
    headline: 'Hello! Hej! Labas!',
    emoji: {
        label: 'Hello',
        value: '👋'
    },
    paragraphs: [
        `I'm Lukas — a Copenhagen based frontend engineer, currently changing stuff and seeing what happens at Valtech.`,
    ]
});