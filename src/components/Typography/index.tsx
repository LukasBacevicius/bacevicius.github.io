import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

const acceptedStyleProps = [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'color'
]

const BaseStyledType = styled.div`
    color: ${({ theme }) => theme.color('typography', 100)};

    ${props => {
        return Object.keys(props).map(key => {
            if (!acceptedStyleProps.includes(key)) return '';
            //@ts-ignore
            return `${key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()}: ${props[key]};`
        }).join('');
    }
    }
`;

const TypeWithContext: FC<{ type: string }> = ({ children, type, ...props }) => {
    const { typography }: any = useContext(ThemeContext);

    const {
        tag,
        ...mergedProps
    }: any = {
        ...typography[type],
        ...props,
    };

    const Type = BaseStyledType.withComponent(tag);

    return (
        <Type {...mergedProps}
        >
            {children}
        </Type>
    );
}

export const Canon: FC<any> = ({ children, ...props }: any) => (
    <TypeWithContext
        type={'Canon'}
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Trafalgar: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Trafalgar"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Paragon: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Paragon"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const DoublePice: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="DoublePice"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const GreatPrimer: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="GreatPrimer"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const BodyCopy: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="BodyCopy"
        {...props}
    >
        {children}
    </TypeWithContext>
);

export const Brevier: FC = ({ children, ...props }: any) => (
    <TypeWithContext
        type="Brevier"
        {...props}
    >
        {children}
    </TypeWithContext>
);


