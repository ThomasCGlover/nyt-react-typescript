import React from 'react';
import './App.css';
import DisplayResults from './components/display';
import NytFetch from './components/fetch';

function App() {
  return (
    <div className="App">
      <NytFetch />
    </div>
  );
}

export default App;
