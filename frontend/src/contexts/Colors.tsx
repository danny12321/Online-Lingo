import React from 'react';
import IColors from '../interfaces/IColors';
const Context = React.createContext({} as IColors);

interface IContext {
    children: React.ReactNode;
}

export function ContextProvider(props: IContext) {
    const colors: IColors = {
        red: '#E52435',
        blue: '#137BD5',
        yellow: '#D0AF22',
        green: '#368F25',
        black: '#1d1e21',
        ballShadow: 'rgba(0, 0, 0, 0.9)'
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