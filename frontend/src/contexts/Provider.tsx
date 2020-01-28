import React, { ReactNode } from 'react';
import { ContextProvider as Socket } from './Socket';
import { ContextProvider as Colors } from './Colors';

interface ProviderProps {
    children: React.ReactNode;
}

function Provider(props: ProviderProps) {

    return (
        <Socket>
            <Colors>
                {props.children}
            </Colors>
        </Socket>
    )
}

export default Provider;