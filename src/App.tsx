import React from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="REACT"/>
      <Description countBy={3}/>
    </div>
  );
}

export default App;
