import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';
import Colors from '../../contexts/Colors';

interface BackgroundProps {
    children: React.ReactNode;
}

interface BackgroundDivProps {
    color: string;
}

function Background(props: BackgroundProps) {
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
        ${(props: BackgroundDivProps) => darken(0.20, props.color)},
        ${(props: BackgroundDivProps) => props.color},
        ${(props: BackgroundDivProps) => lighten(0.10, props.color)},
        ${(props: BackgroundDivProps) => lighten(0.20, props.color)}
    );
    background-size: 400% 400%;
    min-height: 100vh;
`;

export default Background