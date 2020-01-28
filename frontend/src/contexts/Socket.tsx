import React, { ReactNode } from 'react';
import socketClient from 'socket.io-client';
import ISocket from '../interfaces/ISocket';
const Context = React.createContext({} as ISocket);

interface ContextProviderProps {
    children: ReactNode;
}

export function ContextProvider(props : ContextProviderProps) {
    const socket = socketClient("http://localhost:5000");

    return (
        <Context.Provider value={{
            socket
        }}>
            {props.children}

        </Context.Provider>
    )
}

export default Context;