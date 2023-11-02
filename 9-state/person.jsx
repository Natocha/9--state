import React, { useState } from 'react';

function Person() {
  const [name, setName] = useState('John');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(100);

  const handleIncreaseAge = () => {
    setAge(age + 1);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  return (
    <>
      <h1>{name} {lastName}</h1>
      <h2>{age}</h2>
      <input type="text" value={name} onChange={handleNameChange} placeholder="First Name" />
      <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  )
}

export default Person;
