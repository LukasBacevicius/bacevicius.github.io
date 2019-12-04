import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { LightsOff } from '../../components/LightsOff';
import { useSelector, useDispatch } from 'react-redux';
import { stateProps } from '../../reducers';
import { isDarkMode } from '../../utils/theme';
import { setMode } from '../../actions/theme';

export default () => {
    const mode = useSelector(({ theme }: stateProps) => theme.mode);
    const dispatch = useDispatch();

    return (
        <Container >
            <LightsOff
                checked={isDarkMode(mode)}
                onClick={() => dispatch(setMode())}
            />
        </Container >
    );
};