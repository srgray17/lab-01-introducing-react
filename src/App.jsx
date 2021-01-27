import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './components/addGreeting'

const App = () => {
  return (
  <>
    <input
      onChange={({target: {value}}) => setName(value)}
      placeholder="Enter your name"
    />
    <Greeting name={name}/>
  </>
  );
}

export default App;