import { createContext } from 'react';

export const HeroContext = createContext({
    headline: 'Hello! Hej! Labas!',
    emoji: {
        label: 'Hello',
        value: '👋'
    },
    paragraphs: [
    ]
});