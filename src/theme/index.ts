import colors from './colors';
import awesomegrid from './grid';
import transitions from './transitions';
import decorations from './decorations';
import typography from './typography';
import breakpoints from './breakpoints';
import * as helpers from './helpers';

export default (mode: string = 'dark') => ({
    //@ts-ignore
    color: (name: string, tint: number = 100): string | undefined => colors[name][mode][tint],
    awesomegrid,
    helpers,
    transitions,
    decorations,
    typography,
    breakpoints
});