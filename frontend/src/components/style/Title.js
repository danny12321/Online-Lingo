import React, { useContext } from 'react'
import styled from 'styled-components';
import Colors from '../../contexts/Colors';
import Ball from './Ball';

function Title(props) {
    const colors = useContext(Colors);

    return (
        <Wrapper>
            {[...props.children].map(letter => {
                var keys = Object.keys(colors.ball);
                var color = keys[keys.length * Math.random() << 0]
                return <Ball color={color}>{letter}</Ball>
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default Title;