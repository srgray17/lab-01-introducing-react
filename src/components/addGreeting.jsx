import React, {useState} from 'react';

const addGreeting = props => {
  const [inputs, setInputs] = useState({});

  const {name, setName} = props;

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

export default addGreeting;