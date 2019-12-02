import { theme } from '../actions/theme';
import {
    userPreferredMode,
    isDarkMode,
    MODE_DARK,
    MODE_LIGHT
} from '../utils/theme';

const initialState = {
    mode: userPreferredMode()
};


export default function themeReducer(state: any, { type, data }: { type: string, data: any }) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (type) {
        case theme.setMode:
            return {
                ...state,
                mode: isDarkMode(state.mode) ? MODE_LIGHT : MODE_DARK,
            };
        default:
            return state;
    }
}
