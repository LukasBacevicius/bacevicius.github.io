import React, { FC } from 'react';
import { Ticker } from '../Ticker';
import { Canon } from '../Typography';
import styled from 'styled-components';

const Text = styled(Canon)`
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const Link = styled.a`
    color: ${({ theme }) => theme.color('typography')}
`;

export const ReachOut: FC<{ value: string }> = ({ value }) => (
    <Ticker>
        <Link href="mailto:lukasbacevicius@gmail.com">
            <Text fontSize={'2.5rem'}>
                {value}
            </Text>
        </Link>
    </Ticker>
);