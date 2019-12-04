import React, { FC } from 'react';
import ReactTicker from 'react-ticker';

export const Ticker: FC = ({ children }) => (
    <ReactTicker speed={10}>
        {() => (
            children
        )}
    </ReactTicker>
);