import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Greeting from './components/Greeting';

const App = () => {
  const [name, setName] = useState();
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