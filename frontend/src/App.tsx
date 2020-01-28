import React from 'react';
import Provider from './contexts/Provider';
import Routing from './views/Routing';

const App: React.FC = () => {
  return (
    <Provider>
      <Routing>
      </Routing>
    </Provider>
  );
}

export default App;
