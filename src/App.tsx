import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const handleInputName = (nameEvent: React.ChangeEvent<HTMLInputElement>) => {
    setName(nameEvent.target.value);
  }
  const handleInputIdade = (idadeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(idadeEvent.target.value);
  }
  return (
    <div>
      Nome:<br />
      <input type="text" value={name} onChange={handleInputName} />
      <br />
      Idade:<br />
      <input type="number" value={idade} onChange={handleInputIdade} />
      <hr />
      Seu nome é: {name}
      <br />
      Você tem: {idade} anos
    </div>
  )
}

export default App;
