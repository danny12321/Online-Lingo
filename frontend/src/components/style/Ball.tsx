import React, { useContext } from 'react';
import styled from 'styled-components';
import Colors from '../../contexts/Colors';

interface BallProps {
    size: string;
    color: string;
    children: React.ReactChildren
}

interface BallDivProps {
    size: number;
    fontSize: number;
    color: string;
    shadowColor: string;
}

interface ISize {
    font: string;
    size: string;
}

interface ISizes {
    s: ISize;
    m: ISize;
    l: ISize
}

function Ball(props: BallProps) {
    const colors = useContext(Colors);

    return (
        <BallDiv
            key={1}
            size={(sizes as any)[props.size].size || 50}
            fontSize={(sizes as any)[props.size].font || 20}
            color={(colors.ball as any)[props.color] || (colors.ball as any).black}
            shadowColor={colors.ballShadow}
        >
            {props.children}
        </BallDiv>
    );
}

const sizes: ISizes = {
    s: {
        size: '50',
        font: '20'
    },
    m: {
        size: '70',
        font: '25'
    },
    l: {
        size: '90',
        font: '32'
    },
}

const BallDiv = styled.div`
    background: black;
    width: ${(props: BallDivProps) => props.size}px;
    height: ${(props: BallDivProps) => props.size}px;
    line-height: ${(props: BallDivProps) => props.size}px;
    font-size: ${(props: BallDivProps) => props.fontSize}px;
    color: white;
    text-align: center;
    background: ${(props: BallDivProps) => props.color};
    background: radial-gradient(circle at ${(props: BallDivProps) => props.size * 0.5}px ${(props: BallDivProps) => props.size * 0.5}px, ${(props: BallDivProps) => props.color}, ${(props: BallDivProps) => props.shadowColor} 137%);
    border-radius: 50%;
    margin: 0 5px;
    font-weight: 700;
    text-transform: uppercase;
`;

export default Ball;