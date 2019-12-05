import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { LightsOff } from '../../components/LightsOff';
import { useSelector, useDispatch } from 'react-redux';
import { stateProps } from '../../reducers';
import { isDarkMode, changeMode } from '../../utils/theme';
import { setMode } from '../../actions/theme';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styled from 'styled-components';

const Navigation = styled(Container)`
    height: 11rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogo = styled(Logo)`
    height: 7rem;
`;

export default () => {
    const mode = useSelector(({ theme }: stateProps) => theme.mode);
    const dispatch = useDispatch();

    const toggleMode = () => changeMode(() => dispatch(setMode()));

    return (
        <Navigation>
            <Row justify='flex-end'>
                <Col align="center">
                    <StyledLogo />
                </Col>
                <Col xs={2} justify='flex-end'>
                    <LightsOff
                        checked={isDarkMode(mode)}
                        onClick={toggleMode}
                    />
                </Col>
            </Row>
        </Navigation>
    );
};