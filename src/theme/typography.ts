import { toRem } from './helpers';
const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'";

export default {
    fontFamily,
    styles: {
        // http://www.bbc.co.uk/gel/guidelines/typography
        Canon: {
            tag: 'h1',
            fontSize: toRem(52),
            fontWeight: 900,
            lineHeight: toRem(56),
            fontFamily,
        },
        Trafalgar: {
            tag: 'h1',
            fontSize: toRem(36),
            fontWeight: 600,
            lineHeight: toRem(40),
            fontFamily,
        },
        Paragon: {
            tag: 'h2',
            fontSize: toRem(28),
            fontWeight: 500,
            lineHeight: toRem(32),
            fontFamily,
        },
        DoublePica: {
            tag: 'h3',
            fontSize: toRem(26),
            fontWeight: 500,
            lineHeight: toRem(30),
            fontFamily,
        },
        GreatPrimer: {
            tag: 'h4',
            fontSize: toRem(21),
            fontWeight: 500,
            lineHeight: toRem(24),
            fontFamily,
        },
        BodyCopy: {
            tag: 'p',
            fontSize: toRem(18),
            fontWeight: 400,
            lineHeight: toRem(22),
            fontFamily,
        },
        Brevier: {
            tag: 'p',
            fontSize: toRem(14),
            fontWeight: 400,
            lineHeight: toRem(18),
            fontFamily,
        }
    }
}