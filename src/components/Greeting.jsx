import React, {useState} from 'react';

const Greeting = props => {
  const [name, setName] = useState();



  return(
    <>
    <h1>Hey {name}, have a happy day.</h1>
    </>
  );
};

export default Greeting;