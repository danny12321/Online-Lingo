import React from 'react';
import { ContextProvider as Socket } from './Socket';
import { ContextProvider as Colors } from './Colors';

function Provider(props) {

    return (
        <>
            <Socket>
                <Colors>
                    {props.children}
                </Colors>
            </Socket>
        </>
    )
}

export default Provider;