import React from 'react';
import Title from '../../components/style/Title';

function Home() {
    return (
        <>
            <Title colors={['red', 'blue', 'blue', 'yellow', 'green']}>Lingo</Title>
            <h2>View all current games here</h2>
        </>
    )
}

export default Home;