import React, { useContext } from 'react'
import Colors from '../../contexts/Colors';
import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

function Background(props) {
    const colors = useContext(Colors);

    return (
        <BackgroundDiv color={colors.blue}>
            {props.children}
        </BackgroundDiv>
    )
}

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const BackgroundDiv = styled.div`
    animation: ${gradient} 30s ease infinite;
    background: linear-gradient(
        -45deg, 
        ${props => darken(0.20, props.color)},
        ${props => props.color},
        ${props => lighten(0.10, props.color)},
        ${props => lighten(0.20, props.color)}
    );
    background-size: 400% 400%;
    min-height: 100vh;
`;

export default Background