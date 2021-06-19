import './App.css';
import React from 'react';

import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div className='container'>
      <h1 className='title' id='startShow'>Movie Search</h1>
      <SearchMovie/>
    </div>
  );
}

export default App;
