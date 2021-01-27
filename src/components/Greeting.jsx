import React, {useState} from 'react';

const Greeting = props => {
  const [name, setName] = useState();
  const [inputs, setInputs] = useState({});

const setName = event => {
  
}

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    setName([
      ...name,
      inputs.name
    ]);
  };

  return(
    <>
    <h1>Hey {name}, have a happy day.</h1>
    </>
  );
};

export default Greeting;