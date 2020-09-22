import React from 'react';

import GlobalStyle from './globalStyles';
import Theme from './Theme';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Theme>
      <div>
        <GlobalStyle />
        <Header />
        <Routes />
      </div>
    </Theme>
  )
}

export default App
