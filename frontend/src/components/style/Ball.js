import React from 'react';
import styled from 'styled-components';

function Ball(props) {
    return (
        <BallDiv key={1} size={50} color={colors[props.color] || colors.black}>
            {props.children}
        </BallDiv>
    );
}

const colors = {
    red: '#E52435',
    blue: '#137BD5',
    yellow: '#D0AF22',
    green: '#368F25',
    black: '#1d1e21'
}

const BallDiv = styled.div`
    background: black;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    line-height: ${props => props.size}px;
    color: white;
    text-align: center;
    background: ${props => props.color};
    background: radial-gradient(circle at 10px 10px, ${props => props.color}, rgb(82, 82, 82));
    border-radius: 50%;
`;

export default Ball;