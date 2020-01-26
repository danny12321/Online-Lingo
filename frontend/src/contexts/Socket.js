import React from 'react';
import socketClient from 'socket.io-client';
const Context = React.createContext();

export function ContextProvider(props) {
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