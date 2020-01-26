import React from 'react';
const Context = React.createContext();

export function ContextProvider(props) {
    const colors = {
        red: '#E52435',
        blue: '#137BD5',
        yellow: '#D0AF22',
        green: '#368F25',
        black: '#1d1e21',
    }

    return (
        <Context.Provider value={{
            ...colors,
            ball: {
                red: colors.red,
                blue: colors.blue,
                yellow: colors.yellow,
                green: colors.green,
            }
        }}>
            {props.children}

        </Context.Provider>
    )
}

export default Context;