import { createContext } from 'react';

export const HeroContext = createContext({
    headline: 'Hello! Hej! Labas!',
    emoji: {
        label: 'Hello',
        value: '👋'
    },
    paragraphs: [
        `I'm Lukas — a Copenhagen based frontend engineer, currently changing stuff and seeing what happens at Valtech.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at vestibulum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec urna turpis.`,
    ]
});