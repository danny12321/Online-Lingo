import React from 'react'
import styled from 'styled-components';
import Ball from './Ball';

interface TitleProps {
    children: string;
    colors: Array<string>;
}

function Title(props : TitleProps) {
    return (
        <Wrapper>
            {[...(props.children as any)].map((letter, key) => {
                return <Ball key={key} size="l" color={props.colors[key]}>{letter}</Ball>
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
`;

export default Title;